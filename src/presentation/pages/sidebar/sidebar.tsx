import { useNavigate } from "react-router-dom";
import { SidebarOptions } from "../../../core/enum";
import {
  charts_and_map_page_route,
  contacts_page_route,
} from "../../../core/constants.route";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InsertChartIcon from "@mui/icons-material/InsertChart";

function Sidebar() {
  const navigate = useNavigate();

  // return route based on label
  const getRoute = (label: string) => {
    switch (label) {
      case SidebarOptions.CHARTS_AND_MAPS:
        return charts_and_map_page_route;
      case SidebarOptions.CONTACT:
        return contacts_page_route;
      default:
        return contacts_page_route;
    }
  };

  // return icons based on label
  const getIcon = (label: string) => {
    switch (label) {
      case SidebarOptions.CONTACT:
        return <ContactPageIcon />;
      case SidebarOptions.CHARTS_AND_MAPS:
        return <InsertChartIcon />;

      default:
        return <InsertChartIcon />;
    }
  };

  // redirects to respective url based on label
  const redirect = (label: string) => {
    const route = getRoute(label);
    navigate(`${route}`);
  };

  return (
    <div className="sm:w-1/5 h-full shadow-lg sm:py-[12px] sm:px-[12px] sticky top-0">
      {Object.keys(SidebarOptions).map((key) => {
        const k = key as keyof typeof SidebarOptions;
        return (
          <div
            className="py-[12px] px-[12px] border-b-2 cursor-pointer"
            onClick={() => redirect(SidebarOptions[k])}
          >
            {/* Show icons on mobile device */}
            <div className="sm:hidden">{getIcon(SidebarOptions[k])}</div>

            {/* Show label on desktop device */}
            <p className="hidden sm:block">{SidebarOptions[k]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
