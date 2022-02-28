import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import Invoice from "./invoice";
import DashboardNav from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import Sellproduct from "./sellproduct";
import InvoiceWrapper from './InvoiceWrapper'

const Mainpage = () => {

  // const [products, setProducts] = useState([
  //       { name: 'oil', price: 3000, quantity: 30, batchNumber: 343443, brand: 'tata', category: 'groceries' },
  //       { name: 'soap', price: 1200, quantity: 50, batchNumber: 2345, brand: 'colgate', category: 'Pencil' },
  //       { name: 'samphoo', price: 100, quantity: 200, batchNumber: 2345, brand: 'clinic', category: 'Copy' },
  //       { name: 'toothpaste', price: 50, quantity: 1300, batchNumber: 2345, brand: 'Dabur', category: 'Book' }
  //     ]);

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
  }, [products.length])

  return (
    <DashboardNav>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addproduct" element={<Addproduct products={products} />} />
        <Route path="removeproduct" element={<Removeproduct products={products}/>} />
        <Route path="searchproduct" element={<Searchproduct />} />
        <Route path="sellproduct/*" element={<InvoiceWrapper products={products} />} />
      </Routes>
    </DashboardNav>
  );
};

export default Mainpage;
