import { useState } from "react";

const Addproduct = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const products = props.products;

    const [isNewSelected, setIsNewSelected] = useState(false);
    const [isExistingSelected, setIsExistingSelected] = useState(false);

    // const handleNewSelect = (e) => {
    //     setIsNewSelected(true);
    //     setIsExistingSelected(false);
    // }

    // const handleExistingSelect = () => {
    //     setIsNewSelected(false);
    //     setIsExistingSelected(true);
    // }

    const handleSelect = (event) => {
        if (event.target.value === "Add New"){
            setIsNewSelected(true);
            setIsExistingSelected(false);
        }else if(event.target.value === "Add Existing"){
            setIsNewSelected(false);
            setIsExistingSelected(true);
        }
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
                                <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/>
                                <input type ="text" placeholder="Category" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Manufacturer" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Batch Number" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br />
                                <label>Manufacturer Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Entry Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Expiry Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Unit Price" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Quantity" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Target" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>

                                <div className="text-center">
                                    <button type = "submit" onClick = {handleSubmit} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                                        Add
                                    </button>
                                </div>
                            </div>
                        }</div>}
                        {isExistingSelected && <div className="pt-5">{
                            <div className="container mx-auto">
                                {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
                                <select className="h-9 w-full rounded-lg bg-zinc-100 border-black my-5">
                                    <option>--SELECT PRODUCT--</option>
                                    {products.map((product) => {
                                        return (
                                        <option value={product.name}> {product.name} </option>)
                                    })}
                                </select>
                                <input type ="text" placeholder="Batch Number" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br />
                                <label>Manufacturer Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Entry Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <label>Expiry Date</label><br/>
                                <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Unit Price" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>
                                <input type ="text" placeholder="Quantity" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>

                                <div className="text-center">
                                    <button type = "submit" onClick = {handleSubmit} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
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