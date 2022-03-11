import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const Addproduct = ({ products }) => {

    

    const [isNewSelected, setIsNewSelected] = useState(false);
    const [isExistingSelected, setIsExistingSelected] = useState(false);

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [batchNo, setBatchNo] = useState("");
    const [manufactureDate, setManufactureDate] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [target, setTarget] = useState("");
    const [location, setLocation] = useState("");

    const handleProductName = (e) => {
        setProductName(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleManufacturer = (e) => {
        setManufacturer(e.target.value);
    }
    const handleBatchNo = (e) => {
        setBatchNo(parseInt(e.target.value));
    }
    const handleManufatureDate = (e) => {
        setManufactureDate(e.target.value);
    }
    const handleEntryDate = (e) => {
        setEntryDate(e.target.value);
    }
    const handleExpiryDate = (e) => {
        setExpiryDate(e.target.value);
    }
    const handleUnitPrice = (e) => {
        setUnitPrice(parseInt(e.target.value));
    }
    const handleQuantity = (e) => {
        if (e.target.value > 0) {

            setQuantity(parseInt(e.target.value));
        } else {
            console.log("Quantity must be greater than 0");
        }
    }
    const handleTarget = (e) => {
        // setTarget(parseInt(e.target.value));
        setTarget(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    // const handleNewSelect = (e) => {
    //     setIsNewSelected(true);
    //     setIsExistingSelected(false);
    // }

    // const handleExistingSelect = () => {
    //     setIsNewSelected(false);
    //     setIsExistingSelected(true);
    // }

    const handleClearInput = () => {
        setProductName("");
        setCategory("");
        setManufacturer("");
        setBatchNo("");
        setManufactureDate("");
        setEntryDate("");
        setExpiryDate("");
        setQuantity("");
        setLocation("");
        setUnitPrice("");
        setTarget("");
        swal({
            title: "Item Added Successfully",
            body: "",
            icon: "success",
            buttons: "OK"
        })
    }

    const handleSelect = (event) => {
        if (event.target.value === "Add New") {
            setIsNewSelected(true);
            setIsExistingSelected(false);
        } else if (event.target.value === "Add Existing") {
            setIsNewSelected(false);
            setIsExistingSelected(true);
        }
        
        
    }

    const handleSubmitAddNewProduct = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        //this is to sent to backend
        axios.post("http://localhost:5000/entry/new", {
            productName: productName,
            category: category,
            manufacturer: manufacturer,
            batchNumber: batchNo,
            manufactureDate: manufactureDate,
            entryDate: entryDate,
            expiryDate: expiryDate,
            quantity: quantity,
            location: location,
            price: unitPrice,
            target: target
        }).then((res) => {
            console.log(res)
            handleClearInput();
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleSubmitAddExistingProduct = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        //this is to sent to backend
        const obj = {
            productName: productName,
            batchNumber: batchNo,
            manufactureDate: manufactureDate,
            entryDate: entryDate,
            expiryDate: expiryDate,
            quantity: quantity,
            price: unitPrice,
        }
        // console.log("1")
        // console.log(obj)
        const a = axios.post("http://localhost:5000/entry/existing", { ...obj })
            .then((res) => {
                handleClearInput();
                console.log(res);
                //toast.error(res.response.data.message);
            }).catch((err) => {
                console.log(err)
            })
        console.log(a)
    }

    return (
        <div>
            <form>
                <div className= 'container mx-auto shadow-xl w-4/5 border-1 bg-gray-50 border-2 border-gray-300 rounded-md box-shadow'>
                    <div className="container mx-auto py-3 text-2xl text-center text-gray-600">Add Product</div>
                    <hr />
                    <div className="container pb-4 w-full text-xl">
                        <div className="text-center">
                            <select defaultValue={'DEFAULT'} onChange={handleSelect} className="text-base mt-4  w-48 text-gray-500 pl-1 py-2 border-2 focus:outline-none focus-within:border-blue-500 rounded-md  border-blue-200">
                                <option value="DEFAULT" disabled className="text-gray-400 my-1">Select Action</option>
                                <option value="Add New" className="text-gray-500 text-sm">Add New</option>
                                <option value="Add Existing" className="text-gray-500 text-sm ">Add Existing</option>
                            </select>
                        </div>
                        {isNewSelected && <div className="pt-5">{
                            <div className="container ">
                                <div className="text-center">

                                    <input type="text" placeholder="Product Name" value={productName} onChange={handleProductName} className=" shadow-sm text-sm p-1 border-2 w-52 border-gray-300 mb-4 focus:outline-none focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md" />
                                    <br />
                                    <input type="text" placeholder="Category" value={category} onChange={handleCategory} className="  border-gray-300 text-sm p-1 w-52 border-2 mb-4 focus:outline-none focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md  " />
                                    <br />
                                    <input type="text" placeholder="Manufacturer" value={manufacturer} onChange={handleManufacturer} className="  focus:shadow-md  border-gray-300 w-52 text-sm p-1 mb-4 border-2 focus:outline-none focus:border-blue-400 rounded-md text-gray-500" />
                                    <br />
                                    <input type="number" placeholder="Batch Number" value={batchNo} onChange={handleBatchNo} className="  border-gray-300 text-sm p-1 w-52 border-2 mb-4 focus:outline-none focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md " /><br />
                                    
                                    <input type="number" placeholder="Unit Price" value={unitPrice} onChange={handleUnitPrice} className="  border-gray-300 focus:shadow-md  text-sm p-1 w-52 border-2 mb-4  focus:outline-none focus:border-blue-400 rounded-md text-gray-500" /><br />
                                    
                                    <input type="number" placeholder="Quantity" value={quantity} onChange={handleQuantity} className="  border-gray-300 text-sm w-52 p-1 border-2 mb-4  focus:outline-none focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md " />
                                    <br />


                                    <input type="number" placeholder="Target" value={target} onChange={handleTarget} className="  border-gray-300 focus:shadow-md  text-sm p-1 border-2 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500 w-52" /><br />


                                    <input type="text" placeholder="Location" value={location} onChange={handleLocation} className="  border-gray-300  focus:shadow-md text-sm p-1 border-2 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500 w-52" /><br />
                                    <label className="text-sm text-gray-600 ml-2 mb-1">Manufactured Date</label><br />

                                    <input type="date" onChange={handleManufatureDate} value={manufactureDate} className="  border-gray-300 text-sm p-1 border-2  focus:shadow-md w-52 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500" />
                                    <br />
                                    <label className="text-sm text-gray-600 ml-2 mb-1">Entry Date</label><br />

                                    <input type="date" onChange={handleEntryDate} className="  border-gray-300 text-sm p-1 border-2 focus:outline-none w-52  focus:shadow-md focus:border-blue-400 rounded-md mb-4 text-gray-500" />
                                    <br />
                                    <label className="text-sm text-gray-600 ml-2 mb-1">Expiry Date</label>
                                    <br />
                                    <input type="date" onChange={handleExpiryDate} value={expiryDate} className="  border-gray-300 text-sm p-1 border-2 focus:outline-none focus:shadow-md  w-52 focus:border-blue-400 mb-4 rounded-md text-gray-500" />
                                    <br />
                                </div>
                                <div className="text-center">
                                    <button onClick={handleSubmitAddNewProduct} className=" px-5  text-white py-1  rounded-md bg-blue-400 hover:bg-blue-500 active:to-blue-600 text-base focus:shadow-md">
                                       <i className = "fa fa-plus mr-1"></i> Add
                                    </button>
                                </div>
                            </div>
                        }</div>}
                        {isExistingSelected && <div className="pt-5">{
                            <div className="container mx-auto text-center">
                                {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
                                <select defaultValue={'DEFAULT'} onChange={handleProductName} className="w-52 text-sm pl-1 mb-4 text-gray-400 py-1   border-2 focus:outline-none focus-within:border-blue-500 rounded-md">
                                    <option value="DEFAULT" disabled className='text-gray-400'>Select Product</option>
                                    {products.map((product) => {
                                        return (
                                            <option value={product.productName} className='text-gray-500'> {product.productName} </option>)
                                    })}
                                </select><br />
                                <div className="text-center">


                                    <input type="number" placeholder="Batch Number" value={batchNo} onChange={handleBatchNo} className="  border-gray-300 w-52 text-sm mb-4 p-1 border-2 focus:outline-none focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md " /><br />
                                    <input type="number" placeholder="Unit Price" value={unitPrice} onChange={handleUnitPrice} className="  border-gray-300 w-52 text-sm p-1 border-2 focus:outline-none  mb-4 focus:border-blue-400 rounded-md text-gray-500 focus:shadow-md" /><br />
                                    <input type="number" placeholder="Quantity" value={quantity} onChange={handleQuantity} className="  border-gray-300 focus:shadow-md text-sm p-1 border-2 w-52 focus:outline-none mb-4 focus:border-blue-400 rounded-md text-gray-500" /><br />
                                    <label className="text-sm text-gray-600 ml-2">Manufacturer Date</label><br />
                                    <input type="date" onChange={handleManufatureDate} value={manufactureDate} className="  focus:shadow-md border-gray-300 text-sm p-1 border-2 focus:outline-none focus:border-blue-400 w-52 mb-1 rounded-md text-gray-500" /><br />
                                    <label className="text-sm text-gray-600 ml-2">Entry Date</label><br />
                                    <input type="date" onChange={handleEntryDate} value={entryDate} className=" focus:shadow-md w-52 border-gray-300 text-sm p-1 border-2 focus:outline-none focus:border-blue-400 mb-1 rounded-md text-gray-500" /><br />
                                    <label className="text-sm text-gray-600 ml-2">Expiry Date</label><br />
                                    <input type="date" onChange={handleExpiryDate} value={expiryDate} className="  focus:shadow-md border-gray-300 text-sm p-1 border-2 focus:outline-none focus:border-blue-400 rounded-md mb-4 w-52 text-gray-500" /><br />
                                </div>

                                <div className="text-center">
                                    <button onClick={handleSubmitAddExistingProduct} className=" px-5  text-white py-1  rounded-md bg-blue-400 hover:bg-blue-500 active:to-blue-600 text-base">
                                      <i className="fa fa-plus ml-1"></i>  Add
                                    </button>
                                </div>
                            </div>
                        }</div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addproduct;