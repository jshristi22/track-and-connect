import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  ICountryWiseData,
  IDateWiseData,
  IStatisticsData,
} from "../../../core/types";

Chart.register(CategoryScale);

function ChartsAndMaps() {
  // API calls
  const getStats = async (): Promise<IStatisticsData> => {
    return (await axios.get("https://disease.sh/v3/covid-19/all")).data;
  };
  const fetchDateWiseCases = async (): Promise<IDateWiseData> => {
    return (
      await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      )
    ).data;
  };
  const fetchCountryWiseCases = async (): Promise<ICountryWiseData[]> => {
    return (await axios.get("https://disease.sh/v3/covid-19/countries")).data;
  };

  // React queries
  const { data: stats } = useQuery({
    queryKey: ["getStatsInChartsAndMaps"],
    queryFn: getStats,
  });
  const { data: dateWiseCasesData } = useQuery({
    queryKey: ["fetchDateWiseCasesDataInChartsAndMaps"],
    queryFn: fetchDateWiseCases,
  });
  const { data: countryWiseCasesData } = useQuery({
    queryKey: ["fetchCountryWiseCasesDataInChartsAndMaps"],
    queryFn: fetchCountryWiseCases,
  });

  // Store date-wise covid data for line chart
  const chartData = {
    labels: Object.keys(dateWiseCasesData?.cases ?? {}),
    datasets: [
      {
        label: "Covid cases",
        data: Object.keys(dateWiseCasesData?.cases ?? {}).map(
          (k) => dateWiseCasesData?.cases?.[k]
        ),
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,0.1)",
        borderColor: "transparent",
        pointRadius: 1,
      },
    ],
  };

  return (
    <div className="flex-1 px-[10px] py-[15px] sm:px-[20px] sm:py-[30px] flex flex-col gap-[30px]">
      {/* Statistics */}
      <div className="stats flex flex-col gap-[10px]">
        <h1 className="text-md sm:text-3xl font-bold">Statistics</h1>
        <div className="flex flex-col sm:flex-row justify-between border-b-2 pb-[10px]">
          <p className="text-sm">
            <strong>Cases: </strong>
            {stats?.cases}
          </p>
          <p className="text-sm">
            <strong>Active: </strong>
            {stats?.active}
          </p>
          <p className="text-sm">
            <strong>Deaths: </strong>
            {stats?.deaths}
          </p>
          <p className="text-sm">
            <strong>Recovered: </strong>
            {stats?.recovered}
          </p>
        </div>
      </div>

      {/* React leaflet */}
      <div className="leaflet">
        <h1 className="text-md sm:text-2xl font-bold underline mb-[10px]">
          Country-wise covid cases
        </h1>
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countryWiseCasesData?.slice(0, 10)?.map((data) => (
            <Marker
              key={data?.countryInfo?._id}
              position={[data?.countryInfo?.lat, data?.countryInfo?.long]}
            >
              <Popup>
                Country: {data?.country} <br />
                Active: {data?.active} <br />
                Recovered: {data?.recovered} <br />
                Death: {data?.deaths}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Line graphs */}
      <div className="linechart w-full">
        <h1 className="text-md sm:text-2xl font-bold underline mb-[10px]">
          Cases fluctuations with dates
        </h1>
        {dateWiseCasesData && (
          <Line
            className="w-full mb-[30px]"
            data={chartData}
            options={{
              scales: {
                y: {
                  ticks: {
                    callback: function (val, index) {
                      return Number(val) / 1000000 + "M";
                    },
                  },
                },
              },
              responsive: true,
              plugins: {
                title: {
                  display: false,
                  text: "Number of covid cases Date-Wise",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ChartsAndMaps;
