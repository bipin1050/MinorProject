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

    const addDate = () => {

    }

    if (today.getMonth() + 1 <= 9) {
        if (today.getDate() <= 9) {
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
        }
        else {
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
        }
    }

    const [option, setOption] = useState('option1');
    const [selectedProduct, setSelectedProduct] =useState();
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

<<<<<<< HEAD
    const [isLowStockClicked, setIsLowStockClicked] =useState(false);
    const [isExpiredStockClicked, setIsExpiredStockClicked] =useState(false);
=======

    const [isLowStockClicked, setIsLowStockClicked] = useState(false);
    const [isExpiredStockClicked, setIsExpiredStockClicked] = useState(false);
>>>>>>> 33cebe9ab3c567c2a2e9b6f66a020b6f3737d9d4
    // const [isExpiringStockClicked, setIsExpiringStockClicked] =useState(false);

    const toggleLowStock = () => {
        setIsExpiredStockClicked(false);
        // setIsExpiringStockClicked(false);
        if (isLowStockClicked === true) {
            setIsLowStockClicked(false);
        }
        else {
            setIsLowStockClicked(true);
        }
        // console.log(islowStockClicked)
    }
    const toggleExpiredStock = () => {
        setIsLowStockClicked(false);
        // setIsExpiringStockClicked(false);
        if (isExpiredStockClicked === true) {
            setIsExpiredStockClicked(false);
        }
        else {
            setIsExpiredStockClicked(true);
        }
        // console.log(islowStockClicked)
    }
    // const toggleExpiringStock = () => {
    //     setIsLowStockClicked(false);
    //     setIsExpiredStockClicked(false);
    //     if(isExpiringStockClicked === true){
    //         setIsExpiringStockClicked(false);
    //     }
    //     else {
    //         setIsExpiringStockClicked(true);
    //     }
    //     // console.log(islowStockClicked)
    // }

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

    // const expiringStocks = products
    //     .map((product) => {
    //         if (
    //             (product.expiryDate > date) && 
    //             ((product.expiryDate-product.manufactureDate) <= product.expiryDate)
    //         ) {
    //             // console.log(product.expiryDate)
    //             return {
    //                 productName: product.productName,
    //                 quantity: product.quantity
    //             };
    //         }
    //     })
    //     .filter((product) => product);

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
                <div className=" text-center text-4xl h-24 w-full text-white flex flex-col justify-center" style={{ backgroundColor: '#A7BDF8' }}> <div className="font">Product's Summary</div></div>
                <div className=" text-sm text-center flex flex-col justify-center h-12"><div>As of  {day[currentWeekDay]} {month[currentMonth]} {currentDay}, {currentYear}</div></div>
            </div>
            <div className="flex flex-row flex-wrap mt-4 justify-between">
                <div className="hover:cursor-pointer custom-30 mr-2 flex flex-col text-center justify-center rounded-md from-inherit" style={{ backgroundColor: '#dff0d8' }}>
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
                    <div >
                        <h1 className="badge text-6xl bg-gray-400" >{lowStocks.length}</h1>
                    </div>
                </div>
                <div className=" hover:cursor-pointer custom-30 mr-2 flex flex-col text-center justify-center rounded-md h-56 from-inherit" onClick={() => { toggleExpiredStock() }} style={{ backgroundColor: '#f2dede' }}>
                    <div className="font-medium">
                        Expired
                    </div>
                    <div>
                        <h1 className="badge text-6xl" style={{ backgroundColor: '#B3696E' }}>{expiredStocks.length}</h1>

                    </div>
                </div>
                <div className=" h-9 custom-30 mt-4 p-1 px-2 rounded-lg hover:cursor-pointer flex justify-between" style={{backgroundColor:'#FEE4E6'}}>
                    <div className="justify-center text-gray-600">
                        Expiring Soon!!!
                    </div>
                    <div className="smallbadge justify-center" style={{ backgroundColor: '#D22B36' }}>2</div>
                </div>
            </div>
            <div className="py-6">
                <div>
                    <tbody>
                        {/* {console.log(products)}
                        {console.log(lowStocks)}
                        {console.log(isLowStockClicked)} */}
                        {isExpiredStockClicked && <>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Expiry Date</th>
                        </>}
                        {isExpiredStockClicked && expiredStocks.map((product, idx) => {
                            return (<tr key={idx}>
                                <td className="p-2">{product.productName}</td>
                                <td className="p-2">{product.expiryDate.substr(0, 10)}</td>
                            </tr>)
                        })}
                    </tbody>
                </div>
                <div>
                    <tbody>
                        {isLowStockClicked && <>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Target</th>
                        </>}
                        {isLowStockClicked && lowStocks.map((product, idx) => {
                            return (<tr key={idx}>
                                <td className="p-2">{product.productName}</td>
                                <td className="p-2">{product.quantity}</td>
                                <td className="p-2">{product.target}</td>
                            </tr>)
                        })}
                    </tbody>
                </div>
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

            <Chart values = {option} />

            <div className="flex justify-center mt-3">
                <button className="px-2 text-base mr-4 py-1 text-white rounded-md" style={{ backgroundColor: '#1877f2' }} onClick={handleTotal}>Total Sale</button>
                <button className="px-2 text-base text-white rounded-md" style={{ backgroundColor: '#42b72a' }} onClick={handleEach}>Individual Product</button>
                {!isTotalActive && 
                <select onChange={handleSelectedProduct} id = "defValue" defaultValue={"DEFAULT"} name="productName" className="w-30 h-9 rounded-lg bg-zinc-100 border-black justify-start">
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