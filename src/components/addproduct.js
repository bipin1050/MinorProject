import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Addproduct = (props) => {

    const products = props.products;

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
        setQuantity(parseInt(e.target.value));
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
    }

    const handleSelect = (event) => {
        if (event.target.value === "Add New"){
            setIsNewSelected(true);
            setIsExistingSelected(false);
        }else if(event.target.value === "Add Existing"){
            setIsNewSelected(false);
            setIsExistingSelected(true);
        }
    }

    const handleSubmitAddNewProduct = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        //this is to sent to backend
        axios.post("http://localhost:5000/entry/new",{
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
        }).then((res)=>{
            console.log(res)
            handleClearInput();
        }).catch((err)=>{
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
        const a = axios.post("http://localhost:5000/entry/existing",{...obj})
        .then((res)=>{
            handleClearInput();
            console.log(res);
            //toast.error(res.response.data.message);
        }).catch((err)=>{
            console.log(err)
        })
        console.log(a)
    }


    return (
        <div>
            <form>
                <div className="container mx-auto bg-zinc-200">
                    <div className="container mx-auto w-1/4 py-6 text-2xl text-center">Add Product</div>
                    <div className="container pb-10 mx-auto w-1/4 text-xl text-center">
                        <select defaultValue={'DEFAULT'} className="border-4 border-slate-400 rounded-lg" onChange={handleSelect}>
                            <option value="DEFAULT" disabled>--SELECT OPTION--</option>
                            <option value="Add New">Add New</option>
                            <option value="Add Existing">Add Existing</option>
                        </select>
                        {isNewSelected && <div className="pt-5">{
                            <div className="container mx-auto">
                                <input type ="text" placeholder="Product Name" value={productName} onChange={handleProductName} className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/>
                                <input type ="text" placeholder="Category" value={category} onChange={handleCategory} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Manufacturer" value={manufacturer} onChange={handleManufacturer} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Batch Number" value={batchNo} onChange={handleBatchNo} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br />
                                <label>Manufacturer Date</label><br/>
                                <input type ="date" onChange={handleManufatureDate} value={manufactureDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Entry Date</label><br/>
                                <input type ="date" onChange={handleEntryDate} value={entryDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Expiry Date</label><br/>
                                <input type ="date" onChange={handleExpiryDate} value={expiryDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Unit Price" value={unitPrice} onChange={handleUnitPrice} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Quantity" value={quantity} onChange={handleQuantity}  className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Target" value={target} onChange={handleTarget} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Location" value={location} onChange={handleLocation} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                
                                <div className="text-center">
                                    <button onClick = {handleSubmitAddNewProduct} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                                        Add
                                    </button>
                                </div>
                            </div>
                        }</div>}
                        {isExistingSelected && <div className="pt-5">{
                            <div className="container mx-auto">
                                {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
                                <select defaultValue={'DEFAULT'} onChange = {handleProductName} className="h-9 w-full rounded-lg bg-zinc-100 border-black my-5">
                                    <option value="DEFAULT" disabled>--SELECT PRODUCT--</option>
                                    {products.map((product) => {
                                        return (
                                        <option value={product.productName}> {product.productName} </option>)
                                    })}
                                </select>
                                <input type ="number" placeholder="Batch Number" value={batchNo} onChange={handleBatchNo} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br />
                                <label>Manufacturer Date</label><br/>
                                <input type ="date" onChange={handleManufatureDate} value={manufactureDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Entry Date</label><br/>
                                <input type ="date" onChange={handleEntryDate} value={entryDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Expiry Date</label><br/>
                                <input type ="date" onChange={handleExpiryDate} value={expiryDate} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Unit Price" value={unitPrice} onChange={handleUnitPrice} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="number" placeholder="Quantity" value={quantity} onChange={handleQuantity} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>

                                <div className="text-center">
                                    <button onClick = {handleSubmitAddExistingProduct} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                                        Add
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