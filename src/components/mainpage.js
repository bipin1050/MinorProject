import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import DashboardNav from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import Sellproduct from "./sellproduct";

const Mainpage = (props) => {
  return (
    <DashboardNav>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addproduct" element={<Addproduct products={props.products} />} />
        <Route path="removeproduct" element={<Removeproduct />} />
        <Route path="searchproduct" element={<Searchproduct products={props.products}/>} />
        <Route path="sellproduct" element={<Sellproduct />} />
      </Routes>
    </DashboardNav>
  );
};

export default Mainpage;
