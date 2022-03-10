import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "./chart";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
    }, [])

    const [option, setOption] = useState('option1');
    const [isTotalActice, setIsTotalActive] = useState(true);
    
    const handleTotal = (e) => {
        setIsTotalActive(true); 
        setOption("option1");
    }
    const handleEach = (e) => {
        setIsTotalActive(false);
        setOption("option2");
    }
    const day =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sat'];
    const month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let currentDay = currentDate.getDate();
    let currentWeekDay = currentDate.getDay();
    

    return (
        <div>
            <div className="container w-full h-36 border-2 rounded-md drop-shadow-2xl border-gray-300 ">
                <div className=" text-center text-3xl h-24 w-full text-white flex flex-col justify-center" style={{backgroundColor:'#98c499'}}> <div>Product's Summary</div></div>
                <div className=" text-sm text-center flex flex-col justify-center h-12"><div>As of  {day[currentWeekDay]} {month[currentMonth]} {currentDay}, {currentYear}</div></div>
            </div>
            <div className="flex flex-row flex-wrap mt-4 justify-between">
                <div className="w-1/4 mr-2 flex flex-col text-center justify-center rounded-md" style={{backgroundColor:'#dff0d8'}}><div className="font-medium ">Total Products</div></div>
                <div className="w-1/4 mr-2 h-56"> Low Stock</div>
                <div className="w-1/4 h-56">Total Orders</div>
                <div className="w-1/4 mr-2 h-56">Pending Order</div>
                <div className="w-1/4 mr-2 h-56">Expiring Soon !!!</div>
            </div>

            {/* <Chart option = {option}/>

            <div className="flex justify-center pt-10 text-2xl">
                <button className="px-5 border-4" onClick={handleTotal}>Total Sale</button>
                <button className="px-5 border-4" onClick={handleEach}>Individual Product</button>
                {}
            </div> */}

            {/* {
                !isTotalActice 
                && 
                <div> {
                    <select id="defValue"
                        // onChange={handleProduct}
                        defaultValue="DEFAULT"
                        name="productName"
                        className="h-9 w-full rounded-lg bg-zinc-100 border-black justify-start"
                        >{
                        <option disabled value={"DEFAULT"}>
                            --SELECT PRODUCT--
                        </option>
                        {products.map((product, index) => {
                            return (
                            <option key={index} value={product.pid}>
                                {" "}
                                {product.productName} ({product.price}){" "}
                            </option>
                            );
                        })}}
                        </select>
                }</div>
            } */}
        </div>
     );
}
 
export default Dashboard;