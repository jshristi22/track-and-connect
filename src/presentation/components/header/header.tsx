import { useMemo } from "react";
import {
  charts_and_map_page_route,
  contacts_page_route,
} from "../../../core/constants.route";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // generates heading based on Current Url
  const heading = useMemo(() => {
    const url = location.pathname.split("/")?.[1];
    switch (url) {
      case charts_and_map_page_route:
        return "Chart And Maps";
      case contacts_page_route:
        return "Contacts";
      default:
        return "Management App";
    }
  }, [location]);

  return (
    <div
      className="header w-full h-12 sm:h-16 
    shadow-md px-[20px] py-[10px] sticky top-0
     bg-white"
    >
      <h1
        className="text-lg sm:text-4xl 
      font-bold capitalize"
      >
        {heading}
      </h1>
    </div>
  );
}

export default Header;
