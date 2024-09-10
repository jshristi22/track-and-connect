import Sidebar from "./presentation/pages/sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import Contacts from "./presentation/pages/contacts/contacts";
import ChartsAndMaps from "./presentation/pages/charts_and_maps/charts_and_maps";
import {
  charts_and_map_page_route,
  contacts_page_route,
} from "./core/constants.route";
import "./App.css";
import Header from "./presentation/components/header/header";

function App() {
  return (
    <div className="app">
      {/* Header of the app */}
      <Header />
      <div className="contactApp flex h-[calc(100vh-64px)] overflow-auto">
        {/* sidebar of the app containing all the links*/}
        <Sidebar />

        {/* Registration of all routes */}
        <Routes>
          <Route path={contacts_page_route} element={<Contacts />} />
          <Route path={charts_and_map_page_route} element={<ChartsAndMaps />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
