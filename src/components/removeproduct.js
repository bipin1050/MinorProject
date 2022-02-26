const Removeproduct = (props) => {

    const products = props.products

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
    <div className="container mx-auto bg-zinc-200">
        <div className="container mx-auto w-1/4 py-6 text-2xl text-center">Remove Product</div>
        <div className="container mx-auto container pb-10 w-1/4 text-xl text-center">
            {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
            <select className="h-9 w-full rounded-lg bg-zinc-100 border-black my-5">
                <option>--SELECT PRODUCT--</option>
                {products.map((product) => {
                    return (
                    <option value={product.name}> {product.name} </option>)
                })}
            </select>
            <input type ="text" placeholder="Batch Number" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br />
            
            <input type ="text" placeholder="Quantity" className="h-9 w-full bg-zinc-100 rounded-lg"/><br/><br/>

            <div className="text-center">
                <button type = "submit" onClick = {handleSubmit} className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black">
                    Add
                </button>
            </div>
        </div>
    </div> 
    );
}
 
export default Removeproduct;