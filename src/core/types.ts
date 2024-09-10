import { ContactStatus } from "./enum";

export interface IContact {
  id?: string;
  firstName?: string;
  lastName?: string;
  number?: string;
  status?: ContactStatus;
}

export interface IStatisticsData{
  updated?: number;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  todayRecovered?: number;
  active?: number;
  critical?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  tests?: number;
  testsPerOneMillion?: number;
  population?: number;
  oneCasePerPeople?: number;
  oneDeathPerPeople?: number;
  oneTestPerPeople?: number;
  activePerOneMillion?: number;
  recoveredPerOneMillion?: number;
  criticalPerOneMillion?: number;
  affectedCountries?: number;
}

export interface IDateWiseData {
  cases?: {
    [key: string]: number;
  };
  deaths?: {
    [key: string]: number;
  };
  recovered?: {
    [key: string]: number;
  };
}

export interface ICountryWiseData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}
