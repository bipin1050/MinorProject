const Addproduct = () => {
    return ( 
        <div className="bg-neutral-300">
            <form>
                <div className="container mx-auto">
                    <div className="container mx-auto w-1/4 py-6 text-2xl text-center">Enter New Product</div>
                    <div className="container mx-auto w-1/4">
                        <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg border-black"/><br/><br/>
                        <input type ="text" placeholder="Cateegory" className="h-9 w-full rounded-lg"/><br/><br/>
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
                            <button className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Addproduct;