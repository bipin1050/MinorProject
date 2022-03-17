import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import DashboardNav from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import InvoiceWrapper from './InvoiceWrapper'
import Saleshistory from "./saleshistory";
import { useAuth } from "../Authentication/auth";
// import Invoice from "./invoice";
// import Sellproduct from "./sellproduct";

const Mainpage = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
  }, [])


  return (
    <DashboardNav>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="removeproduct" element={<Removeproduct/>} />
        <Route path="searchproduct" element={<Searchproduct />} />
        <Route path="sellproduct/*" element={<InvoiceWrapper />} />
        <Route path="saleshistory" element={<Saleshistory />} />
      </Routes>
    </DashboardNav>
  );
};

export default Mainpage;
