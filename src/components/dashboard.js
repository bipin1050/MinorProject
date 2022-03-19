import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
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

    // const addDate = () => {

    // }

    if (today.getMonth() + 1 <= 9) {
        if (today.getDate() <= 9) {
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
        }
        else {
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
        }
    }
    function findDayDifference(date1, date2) {
        return Math.floor((Math.abs(date2 - date1)) / (1000 * 60 * 60 * 24));
    }

    const [option, setOption] = useState('option1');
    const [selectedProduct, setSelectedProduct] = useState("");
    const [isTotalActive, setIsTotalActive] = useState(true);

    const handleTotal = (e) => {
        setIsTotalActive(true);
        setOption("option1");
    }
    const handleEach = (e) => {
        setIsTotalActive(false);
    }
    const handleSelectedProduct = (e) => {
        setSelectedProduct(e.target.value)
        setOption("option2");
    }


    const [isLowStockClicked, setIsLowStockClicked] = useState(false);
    const [isExpiredStockClicked, setIsExpiredStockClicked] = useState(false);
    const [isExpiringStockClicked, setIsExpiringStockClicked] = useState(false);

    const toggleLowStock = () => {
        setIsExpiredStockClicked(false);
        setIsExpiringStockClicked(false);
        if (isLowStockClicked === true ) {
            setIsLowStockClicked(false);
            
        }
        else {
            if(lowStocks.length > 0){
                setIsLowStockClicked(true);
            }
        }
        console.log(lowStocks);
        // console.log(islowStockClicked)
    }
    const toggleExpiredStock = () => {
        setIsLowStockClicked(false);
        setIsExpiringStockClicked(false);
        if (isExpiredStockClicked === true) {
            setIsExpiredStockClicked(false);
        }
        else {
            if(expiredStocks.length > 0){
            setIsExpiredStockClicked(true);
            }}
            console.log(expiredStocks)
        // console.log(islowStockClicked)
    }
    const toggleExpiringStock = () => {
        setIsLowStockClicked(false);
        setIsExpiredStockClicked(false);
        if (isExpiringStockClicked === true) {
            setIsExpiringStockClicked(false);
        }
        else {
            if(expiringStocks.length > 0)
            setIsExpiringStockClicked(true);
        }
        // console.log(islowStockClicked)
    }

    const lowStocks = products
        .map((product) => {
            if (product.quantity <= 0.05 * Number(product.target)) {
                return {
                    productName: product.productName,
                    quantity: product.quantity,
                    target: product.target
                };
            }
        })
        .filter((product) => product);

    const expiredStocks = products
        .map((product) => {
            if (product.expiryDate <= date) {
                // console.log(product.expiryDate)
                return {
                    productName: product.productName,
                    expiryDate: product.expiryDate
                };
            }
        })
        .filter((product) => product);

    const expiringStocks = products
        .map((product) => {
            let mDate = new Date(product.manufactureDate);
            let eDate = new Date(product.expiryDate);
            let tDate = new Date();
            if (
                findDayDifference(eDate, tDate) <= findDayDifference(eDate, mDate) * 0.1 &&
                product.expiryDate > date
            ) {
                return {
                    productName: product.productName,
                    expiryDate: product.expiryDate
                };
            }
        })
        .filter((product) => product);

    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let currentDay = currentDate.getDate();
    let currentWeekDay = currentDate.getDay();

    const navigate = useNavigate();

    return (
        <div className="font">
            <div className="container w-full h-36  rounded-md  box-shadow ">
                <div className=" text-center text-4xl h-24 w-full text-white flex flex-col justify-center" style={{ backgroundColor: '#A7BDF8' }}> <div className="font">Product's Summary</div></div>
                <div className=" text-sm text-center flex flex-col justify-center h-12"><div>As of  {day[currentWeekDay]} {month[currentMonth]} {currentDay}, {currentYear}</div></div>
            </div>
            <div className="flex flex-row-reverse">

                <div className=" h-9 custom-30 mt-4 p-1 px-2 rounded-lg hover:cursor-pointer flex  justify-between" onClick={() => { toggleExpiringStock() }} style={{ backgroundColor: '#FEE4E6' }}>
                    <div className="justify-center text-gray-600">
                        Expiring Soon!!!
                    </div>
                     <div className="flex justify-between w-9">
                     <div className="smallbadge justify-center" style={{ backgroundColor: '#D22B36' }}>{expiringStocks.length}</div>

                    {!isExpiringStockClicked && <div className=" justify-center" ><i className="fa fa-caret-down text-gray-500 text-xl"></i> </div>}
                    {isExpiringStockClicked && <div className=" justify-center" ><i className="fa fa-caret-up text-gray-500 text-xl"></i> </div>}
                     </div>
                </div>
            </div>
            <div className="flex w-full justify-end">
                <table className="mt-4 custom-30 rounded-xl divide-gray-200 border-2 border-gray-100">
                    <tbody>
                        {/* {console.log(products)}
                        {console.log(lowStocks)}
                        {console.log(isLowStockClicked)} */}
                        {isExpiringStockClicked && <tr className=" text-white" style={{backgroundColor:'rgb(242,112,112)'}}>
                            <th className="p-2 pr-12 ">Product Name</th>
                            <th className="p-2 ">Expiry Date</th>
                        </tr>}
                        {isExpiringStockClicked && expiringStocks.map((product, idx) => {
                            return (<tr key={idx}>
                                <td className="p-2 pr-10 text-red-300">{product.productName}</td>
                                <td className="p-2 text-red-300">{product.expiryDate.substr(0, 10)}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row flex-wrap mt-4 justify-between">
                <div className="hover:cursor-pointer custom-30 mr-2 flex flex-col text-center justify-center rounded-md from-inherit" onClick={() => { navigate("/mainpage/searchproduct") }} style={{ backgroundColor: '#dff0d8' }}>
                    <div className="font-medium ">Items Type
                    </div>
                    <div>
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#64B371' }}>{products.length}</h1>
                    </div>
                </div>
                <div className="hover:cursor-pointer bg-gray-200 custom-30 mr-2 flex flex-col text-center justify-center rounded-md from-inherit" onClick={() => { toggleLowStock() }} >
                    <div className="font-medium" >
                        Low Stock
                    </div>
                    <div className="flex justify-center items-center" >
                        <div className="">

                        <h1 className="badge text-6xl bg-gray-400" >{lowStocks.length}</h1>
                        </div>
                    

                        {isLowStockClicked && <h1 className="text-white text-4xl  rounded-md w-6 text-center" ><i className="fa fa-caret-up"></i></h1>}
                        {!isLowStockClicked && <h1 className="text-white text-4xl rounded-md w-6 text-center" ><i className="fa fa-caret-down"></i></h1>}
                    
                    </div>
                </div>
                <div  className=" hover:cursor-pointer custom-30 mr-2 flex flex-col text-center justify-center rounded-md h-56 from-inherit" onClick={() => { toggleExpiredStock() }} style={{ backgroundColor: '#f2dede' }}>
                    <div className="font-medium">
                        Expired Stock
                    </div>
                    <div>
                        <div className="flex justify-center items-center" >
                        <div className="">
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#dc3545' }}>{expiredStocks.length}</h1>

                        </div>
                    

                        {isExpiredStockClicked && <h1 className="text-white text-4xl  rounded-md w-6 text-center" ><i className="fa fa-caret-up"></i></h1>}
                        {!isExpiredStockClicked && <h1 className="text-white text-4xl rounded-md w-6 text-center" ><i className="fa fa-caret-down"></i></h1>}
                    
                    </div>

                    </div>
                </div>

            </div>
            <div className=" flex flex-row-reverse">
                <table className=" mt-4 custom-30 divide-y rounded-2xl divide-gray-200 border-2 border-gray-100">
                    <tbody className="">
                        {/* {console.log(products)}
                        {console.log(lowStocks)}
                        {console.log(isLowStockClicked)} */}
                        {isExpiredStockClicked &&
                            <tr className=" text-white rounded-lg" style={{backgroundColor:'rgb(242,112,112)'}}>
                                <th className="p-2 pr-10">Product Name</th>
                                <th className="p-2">Expired Date</th>
                            </tr>
                        }
                        {isExpiredStockClicked && expiredStocks.map((product, idx) => {
                            return (<tr key={idx}>
                                <td className="p-2 text-red-300 fade-in">{product.productName}</td>
                                <td className="p-2 text-red-300 fade-in">{product.expiryDate.substr(0, 10)}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex w-full justify-center">
                <table className=" mt-4 mb-4 custom-30 divide-y rounded-2xl divide-gray-200 border-2 border-gray-100">
                    <tbody>
                        {isLowStockClicked && <tr className="text-white bg-gray-500">
                            <th className="p-2 pr-10">Product Name</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Target</th>
                        </tr>}
                        {isLowStockClicked && lowStocks.map((product, idx) => {
                            return (<tr key={idx}>
                                <td className="p-2 text-gray-500">{product.productName}</td>
                                <td className="p-2 text-gray-500">{product.quantity}</td>
                                <td className="p-2 text-gray-500">{product.target}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

            {/* <div className=" my-5 flex flex-col text-center justify-center rounded-md h-20 from-inherit" onClick={()=>{toggleExpiringStock()}} style={{ backgroundColor: '#d9edf7' }}>
                    <div className="font-medium">
                        Expiring Soon : <h1 className="badge text-6xl" style={{ backgroundColor: '#31708f' }}>{expiringStocks.length}</h1>
                    </div>
            </div>
            <div>
                <tbody>
                    {isExpiringStockClicked && expiringStocks.map((product, idx) => {
                        return (<tr key={idx}>
                        <td className="p-2">{product.productName}</td>
                        <td className="p-2">{product.quantity}</td>
                        </tr>)
                    })}
                </tbody>
            </div> */}

            <Chart values={option} selectedProduct={selectedProduct} />

            <div className="flex justify-center mt-3">
                <button className="px-2 text-base mr-4 py-1 text-white rounded-md" style={{ backgroundColor: '#1877f2' }} onClick={handleTotal}>Total Sale</button>
                <button className="px-2 text-base text-white rounded-md" style={{ backgroundColor: '#42b72a' }} onClick={handleEach}>Individual Product</button>
                {!isTotalActive &&
                    <select onChange={handleSelectedProduct} id="defValue" defaultValue={"DEFAULT"} name="productName" className="w-30 h-9 rounded-lg bg-zinc-100 border-black justify-start">
                        <option disabled value={"DEFAULT"}>--SELECT PRODUCT--</option>
                        {products.map((product, index) => {
                            return (
                                <option key={index} value={product.productName}>
                                    {product.productName}
                                </option>
                            )
                        })}
                    </select>}
            </div>

        </div>
    );
}

export default Dashboard;