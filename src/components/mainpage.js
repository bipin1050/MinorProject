import { Box } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import DashboardNav from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import Sellproduct from "./sellproduct";

const Mainpage = () => {

  const [products, setProducts] = useState([
    {name: 'oil',       price: 3000,    quantity: 30,   batchNo: 'prod1'},
    {name: 'soap',      price: 1200,    quantity: 50,   batchNo: 'prod2'},
    {name: 'samphoo',   price: 100,     quantity: 200,  batchNo: 'prod3'},
    {name: 'toothpaste',price: 50,      quantity: 1300, batchNo: 'prod4'}
  ]);

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
