import {useState} from 'react';
import { useNavigate } from 'react-router';


const Sellproduct = (props) => {

    const products = props.products;
    
    const [totalItems, setTotalItems] = useState([]);
    
    const isItemAdded = totalItems.length > 0;

    const[oneItem, setOneItem] = useState({
        productName: "",
        batchNo: "",
        units: ""
    })

    const[buyerDetail, setBuyerDetail] = useState({
        name: "",
        company: "",
        contact: ""
    })

    const handleProduct = (e) => {
        setOneItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleAddProduct = (e) => {
        {oneItem.productName.length>0 && oneItem.units>0 && oneItem.batchNo.length>0 && setTotalItems([...totalItems, oneItem])}
        setOneItem({
            productName:"",
            batchNo: "",
            units: ""
        })
    }
    console.log(oneItem);
    console.log(totalItems);

    return ( 
        <div>
            <div className="container mx-auto flex py-20">
                {/* <input type ="text" placeholder="Product Name" value={productName} onChange={handleProductName} className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
                <select  onChange = {handleProduct} name='productName' className="h-9 w-full rounded-lg bg-zinc-100 border-black my-5 justify-start">
                                    <option disabled selected>--SELECT PRODUCT--</option>
                                    {products.map((product) => {
                                        return (
                                        <option value={product.name}> {product.name} </option>)
                                    })}
                                </select>
                <input type ="text" required placeholder="Batch No" name='batchNo' value={oneItem.batchNo} onChange={handleProduct} className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                <input type ="text" required placeholder="units" name='units' value={oneItem.units} onChange={handleProduct}  className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                
                <div className="text-center">
                    <button type="submit" onClick = {handleAddProduct} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                        Add
                    </button>
                </div>
            </div>

            {
                isItemAdded &&
                <div>
                    {
                        totalItems.map((product) => {
                        return (
                        <div>
                            <label className="flex">
                            <div>Name : &nbsp;</div>
                            <div key = {product.productName}> {product.productName} </div>
                            </label>
                            <label className="flex">
                            <div>units : &nbsp;</div>
                            <div key = {product.units}> {product.units} </div>
                            </label>
                            <label className="flex">
                            <div>Unit Price : &nbsp;</div>
                            <div key = {product.batchNo}> {product.batchNo} </div>
                            </label>
                            <br />
                        </div>)
                        })
                    }
                </div>
            }
            {isItemAdded && <button>SELL</button>}
        </div>
     );
}
 
export default Sellproduct;