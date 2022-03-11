import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "./chart";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/checkout")
            .then((res) => {
                setProducts(res.data)
            })
    }, [])

    var today = new Date(), date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if(today.getMonth()+1 <=9 ){
        if(today.getDate() <=9 ){
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
        }
        else{
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
        }
    }

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
    const lowStocks = products
        .map((product) => {
            if (product.quantity <= 0.05 * Number(product.target)) {
            return {
                productName: product.productName,
                quantity: product.quantity
            };
            }
        })
        .filter((product) => product);
    
    const expiredStocks = products
        .map((product) => {
            if (product.expiryDate <= date) {
                console.log(product.expiryDate)
                return {
                    productName: product.productName,
                    quantity: product.quantity
                };
            }
        })
        .filter((product) => product);
    console.log(expiredStocks)
    
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let currentDay = currentDate.getDate();
    let currentWeekDay = currentDate.getDay();




    return (
        <div className="font">
            <div className="container w-full h-36  rounded-md  box-shadow ">
                <div className=" text-center text-4xl h-24 w-full text-white flex flex-col justify-center" style={{ backgroundColor: '#98c499' }}> <div className="font">Product's Summary</div></div>
                <div className=" text-sm text-center flex flex-col justify-center h-12"><div>As of  {day[currentWeekDay]} {month[currentMonth]} {currentDay}, {currentYear}</div></div>
            </div>
            <div className="flex flex-row flex-wrap mt-4 justify-between">
                <div className="custom-30 mr-2 flex flex-col text-center justify-center rounded-md from-inherit" style={{ backgroundColor: '#dff0d8' }}>
                    <div className="font-medium ">Total Products
                    </div>
                    <div>
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#3c763d' }}>3</h1>
                    </div>
                </div>
                <div className="custom-30 mr-2 flex flex-col text-center justify-center rounded-md from-inherit" style={{ backgroundColor: '#f2dede' }}>
                    <div className="font-medium">
                        Low Stock
                    </div>
                    <div>
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#a94442' }}>4</h1>
                    </div>
                </div>
                <div className="custom-30 mr-2 flex flex-col text-center justify-center rounded-md h-56 from-inherit" style={{ backgroundColor: '#d9edf7' }}>
                    <div className="font-medium">
                    Total Orders
                        </div>
                        <div>
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#31708f' }}>4</h1>
        
                        </div>
                </div>
                <div className="w-1/4 mr-2 h-56">Pending Order</div>
                <div className="w-1/4 mr-2 h-56">Expiring Soon !!!</div>
            </div>

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