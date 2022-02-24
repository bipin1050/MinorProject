import { useState } from "react";

const Addproduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    // const [isNewSelected, setIsNewSelected] = useState(true);
    // const [isExistingSelected, setIsExistingSelected] = useState(false);

    // const handleNewSelect = (e) => {
    //     console.log("New item selected");
    //     console.log(e);

    // //     setIsNewSelected(true);
    // //     setIsExistingSelected(false);
    // //     console.log(setIsNewSelected);
    // // ````console.log(setIsExistingSelected);
    // }

    // const handleExistingSelect = () => {
    //     setIsNewSelected(false);
    //     setIsExistingSelected(true);
    // }
    // console.log(setIsNewSelected);
    // console.log(setIsExistingSelected);


    const handleSelect = (event) => {
        
    }

    return (
        <div>
            <form>
                <div className="container mx-auto">
                    <div className="container mx-auto w-1/4 py-6 text-2xl text-center">Add Product</div>
                    <div className="container mx-auto w-1/4 text-xl text-center">
                        <select className="border-4 border-slate-400 rounded-lg" onChange={handleSelect}>
                            <option value="Add New">Add New</option>
                            <option value="Add Existing">Add Existing</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
    {/*return ( 
        <div className="bg-neutral-300">
            <form>
                <div className="container mx-auto">
                    <div className="container mx-auto w-1/4 py-6 text-2xl text-center">Add New Product</div>
                    <div className="container mx-auto w-1/4">
                        <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg border-black"/><br/><br/>
                        <input type ="text" placeholder="Category" className="h-9 w-full rounded-lg"/><br/><br/>
                        <input type ="text" placeholder="Manufacturer" className="h-9 w-full rounded-lg"/><br/><br/>
                        <input type ="text" placeholder="Batch Number" className="h-9 w-full rounded-lg"/><br/><br />
                        <label>Manufacturer Date</label><br/>
                        <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full rounded-lg"/><br/><br/>
                        <label>Entry Date</label><br/>
                        <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full rounded-lg"/><br/><br/>
                        <label>Expiry Date</label><br/>
                        <input type ="date" placeholder="mm/dd/yyyy" className="h-9 w-full rounded-lg"/><br/><br/>
                        <input type ="text" placeholder="Unit Price" className="h-9 w-full rounded-lg"/><br/><br/>
                        <input type ="text" placeholder="Quantity" className="h-9 w-full rounded-lg"/><br/><br/>
                        <input type ="text" placeholder="Target" className="h-9 w-full rounded-lg"/><br/><br/>

                        <div className="text-center">
                            <button type = "submit" onClick = {handleSubmit} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     ); */}
}
 
export default Addproduct;