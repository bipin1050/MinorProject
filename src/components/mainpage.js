import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import DashboardNav from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import Sellproduct from "./sellproduct";

const Mainpage = () => {

  const [products, setProducts] = useState();
  
  useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
  }, [])

  return (
    <DashboardNav>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addproduct" element={<Addproduct products={products} />} />
        <Route path="removeproduct" element={<Removeproduct products={products}/>} />
        <Route path="searchproduct" element={<Searchproduct products={products}/>} />
        <Route path="sellproduct" element={<Sellproduct products={products}/>} />
      </Routes>
    </DashboardNav>
  );
};

export default Mainpage;
