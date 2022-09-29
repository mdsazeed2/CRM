import React from "react";
import ReactDOM from "react-dom/client";
//import Mainlist from "./Mainlist";
//import Doughnut from "./Doughnut";
//import VerticalBargraph from "./VerticalBargraph"
import Horizontalbargraph from "./Horizontalbargraph.js"
import Topbar from "./Topbar.js";
//import Salespersonsdashboard from "./Salespersonsdashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Topbar/>
  </React.StrictMode>
);