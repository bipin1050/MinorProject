import axios from "axios";
import { useState } from "react";

const Removeproduct = (props) => {
  const products = props.products;

  const [productName, setProductName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleClearInput = () => {
    document.getElementById("defValue").value = "DEFAULT";
    setProductName("");
    setBatchNo("");
    setQuantity("");
  };


  const handleSubmitRemoveProduct = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    //this is to sent to backend
    const obj = {
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
  };

  return (
    <div className="container mx-auto bg-zinc-200">
      <div className="container mx-auto w-1/4 py-6 text-2xl text-center">
        Remove Product
      </div>
      <div className="container mx-auto container pb-10 w-1/4 text-xl text-center">
        {/* <input type ="text" placeholder="Product Name" className="h-9 w-full rounded-lg bg-zinc-100 border-black"/><br/><br/> */}
        <select
          id="defValue"
          onChange={(e) => setProductName(e.target.value)}
          defaultValue={"DEFAULT"}
          className="h-9 w-full rounded-lg bg-zinc-100 border-black my-5"
        >
          <option value="DEFAULT" disabled>
            --SELECT PRODUCT--
          </option>
          {products.map((product, index) => {
            return (
              <option key={index} value={product.productName}>
                {" "}
                {product.productName}{" "}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          onChange={(e) => setBatchNo(e.target.value)}
          value={batchNo}
          placeholder="Batch Number"
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />

        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          placeholder="Quantity"
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmitRemoveProduct}
            className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Removeproduct;
