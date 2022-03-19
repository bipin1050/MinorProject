import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { DataGrid } from '@mui/x-data-grid';

const Saleshistory = () => {

    let found;
    const [soldProducts,setSoldProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/checkout/salesDetail")
        .then((res)=>{
            setSoldProducts(res.data)
            setIsLoading(false)
        })
    },[])

    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const handleInputValue = (event) => {
        setSearchValue(event.target.value.trim())
    }
    const handleClearButton = () => {
        setSearchValue("");
    }

    const showClearButton = searchValue.length > 0;

    const computedProducts = soldProducts.filter((product) => {
        let date= new Date(product.salesDate);
        if (date.getMonth() + 1 <= 9) {
            if (date.getDate() <= 9) {
                date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
            }
            else {
                date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
            }
        }
        if (!searchValue.length){
          return product;  
        } 
        let search = searchValue.toUpperCase();
        if (
            product.name.toUpperCase().includes(search) ||
            product.company.toUpperCase().includes(search) ||
            product.productName.toUpperCase().includes(search) ||
            date.includes(search) ||
            (product.billnumber === Number(search))
            // ((product.billnumber).toString().match(search) && (product.billnumber).toString().match(search)[0])
        )
        {
            found++;
            return product;
        }
    })

    return ( 
        <div>
            <div className="text-center text-2xl text-gray-500 mb-1 rounded-sm h-16  pt-5" style={{backgroundColor:'#f5f5f5'}}> Sales History </div> <hr />

            <div
                className="p-1 flex ml-auto w-1/3 border-2 rounded-md items-center mt-6 mb-3 focus-within:border-blue-500"
            >
                <div>
                <SearchIcon className="fill-current text-gray-500" />
                </div>
                <div className="ml-2 mr-2 w-full ">
                <input
                    className="outline-none w-full focus:outline-none  rounded-sm"
                    type="text"
                    name="searchitem"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleInputValue}
                    autoComplete="off"
                />
                </div>
                <div>
                {showClearButton && <button onClick={handleClearButton}><CloseOutlinedIcon className="text-zinc-500" /></button>}
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center mt-8">
                    
                </div>
            </div>
            <table className="w-full box-shadow divide-y divide-gray-200 border border-gray-200">
                <thead>
                    <tr className=" text-white"style={{ backgroundColor: '#5c94ed' }}>
                        <td className="p-2">Bill No.</td>
                        <td className="p-2">Buyers</td>
                        <td className="p-2">Address</td>
                        <td className="p-2">Company</td>
                        <td className="p-2">Product Name</td>
                        <td className="p-2">Price</td>
                        <td className="p-2">Quantity</td>
                        <td className="p-2">Sales Date</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-200">
                    {isLoading &&
                        <tr><td className="p-2" colSpan={7}><p className="text-sm text-center text-gray-500">Loading...</p></td></tr>
                    }
                    {!isLoading && computedProducts && computedProducts.map((product, idx) => {
                        let date= new Date(product.salesDate);
                        if (date.getMonth() + 1 <= 9) {
                            if (date.getDate() <= 9) {
                                date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
                            }
                            else {
                                date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
                            }
                        }
                        if(idx < 50){
                            return (
                            <tr key={idx}>
                                <td className="p-2">{product.billnumber}</td>
                                <td className="p-2">{product.name}</td>
                                <td className="p-2">{product.address}</td>
                                <td className="p-2">{product.company}</td>
                                <td className="p-2">{product.productName}</td>
                                <td className="p-2">{product.price}</td>
                                <td className="p-2">{product.quantity}</td>
                                <td className="p-2">{date}</td>
                            </tr>)
                        }
                    })}
                    {(!computedProducts.length && !isLoading) &&
                        <tr><td className="p-2" colSpan={7}><p className="text-sm text-center text-gray-500">No records found</p></td></tr>
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default Saleshistory;





