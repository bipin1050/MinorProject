import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const Removeproduct = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
  }, [products])

  const [productName, setProductName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleClearInput = () => {
    document.getElementById("defValue").value = "DEFAULT";
    setProductName("");
    setBatchNo("");
    setQuantity("");
    swal({
      title: "Item Removed Successfully !!!",
      body: "",
      icon : "success",
      buttons :"OK"
    })
  };


  const handleSubmitRemoveProduct = (event) => {
    event.preventDefault();
    let conform = window.confirm("Are you sure want to delete?");
    console.log(conform)
    let obj = {};
    if(conform){
    //const data = new FormData(event.currentTarget);
    //this is to sent to backend
     let obj = {
      productName: productName,
      batchNumber: batchNo,
      quantity: quantity,
    };
    // console.log(obj)
    const a = axios
    .delete("http://localhost:5000/entry/remove", { data: obj })
    .then((res) => {
      handleClearInput();
      console.log(res);
      //toast.error(res.response.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(a);
  }
  };

  return (
    <div className="container mx-auto bg-gray-100 border-2 rounded-md shadow-xl w-4/5 box-shadow ">
      <div className="container mx-auto w-1/4 py-3 text-2xl text-center text-gray-600">
        Remove Product
      </div> <hr />
      <div className="container mx-auto container mt-4 pb-4 w-1/4 text-xl text-center">
        {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
        <select
          id="defValue"
          onChange={(e) => setProductName(e.target.value)}
          defaultValue={"DEFAULT"}
          className="  border-blue-300 text-sm p-2 border-2 w-44 focus:outline-none mb-2 focus:border-blue-500 rounded-md text-gray-500"
        >
          <option value="DEFAULT" disabled >
            Select Product
          </option>
          {products.map((product, index) => {
            return (
              <option key={index} value={product.productName} className ="text-sm text-gray-400">
                {product.productName}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          onChange={(e) => setBatchNo(e.target.value)}
          value={batchNo}
          placeholder="Batch Number"
          className="  border-gray-300 text-sm p-1 border-2 w-44 focus:outline-none mb-2 focus:border-blue-500 rounded-md text-gray-500"
        />
        <br />

        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          placeholder="Quantity"
          className="  border-gray-300 text-sm p-1 border-2 w-44 focus:outline-none mb-2 focus:border-blue-500 rounded-md text-gray-500"
        />
        <br />
        

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmitRemoveProduct}
            className="border-2 px-2 py-1 mb-2 mt-2 rounded-md text-base text-white bg-red-500 hover:bg-red-600"
          >
            <i className="fa fa-trash mr-1">  </i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Removeproduct;
