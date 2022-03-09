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

    return (
        <div>
            <div className="scaledwidth">
                <div className="topBar ">
                    <div className="leftSide w-4/5 inline-block border-r-4 border-slate-400">
                        <div className="text-center text-4xl py-5 text-slate-400">
                            Sales Activity
                        </div>
                        <div className=" flex justify-around text-center w-2/3 m-auto">
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>To Be Delivered</div>
                                <div>580 item</div>
                            </div>
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>Receiving Items</div>
                                <div>580 item</div>
                            </div>
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>Pending Packing</div>
                                <div>580 item</div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide w-1/5 inline-block text-center">
                        <div>
                            Quantity Summary
                        </div>
                        <div className="my-5">
                            <div className="py-2">Quantity in hand : </div>
                            <div className="py-2">Quantity to be received : </div>
                        </div>
                    </div>
                </div>
                <div className="my-3" style ={{width: "100%", height: "4px", marginLeft: "auto", marginRight: "auto", backgroundColor: "#b7d0e2",}}>
                    <hr/>
                </div>
                <div className="flex justify-around">
                    <div className="border-4">
                        <div>
                            Product Details
                        </div>
                        <div>
                            <div>
                                <div>Low Stock</div>
                                <div>580 item</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-4">
                        <div>Top Selling Items</div>
                    </div>

                </div>
            </div>
            <p className="flex justify-center font-semibold text-3xl uppercase">Since Last 30 Days</p>

            <Chart option = {option}/>

            <div className="flex justify-center pt-10 text-2xl">
                <button className="px-5 border-4" onClick={handleTotal}>Total Sale</button>
                <button className="px-5 border-4" onClick={handleEach}>Individual Product</button>
                {}
            </div>

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