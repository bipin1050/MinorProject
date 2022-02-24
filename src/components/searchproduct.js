import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

const Searchproduct = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (event) => {
    setSearchValue(event.target.value)
  }
  const handleClearButton = () => {
    setSearchValue("");
  }
  
  const showClearButton = searchValue.length > 0;
  const isSearched = searchValue.length > 0;

  const [products, setProducts] = useState([
    {name: 'oil',       price: 3000,    quantity: 30},
    {name: 'soap',      price: 1200,    quantity: 50},
    {name: 'samphoo',   price: 100,     quantity: 200},
    {name: 'toothpaste',price: 50,      quantity: 1300}
  ]);
  // const products = ["oil", "toothpaste", "soap", "samphoo"];

  const searchedProduct = products.filter((product) =>{
    if (product.name.toUpperCase().includes(searchValue.toUpperCase()))
      return product;
  })

  // console.log(isSearched);
  return (
    <div className="px-64 py-8">
      <div
        className="flex bg-zinc-100 border-2 border-zinc-200 px-3 rounded-2xl text-xl items-center"
        style={{ width: "600px" }}
      >
        <div>
          <SearchIcon className="text-zinc-500" />
        </div>
        <div className="ml-2 mr-2 w-full ">
          <input
            className="outline-none w-full h-14 focus:outline-none bg-zinc-100 rounded-sm"
            type="text"
            name="searchitem"
            placeholder="Search"
            value = {searchValue}
            onChange={handleInputValue}
            autoComplete ="off"
          />
        </div>
        <div>
          {showClearButton && <button onClick={handleClearButton}><CloseOutlinedIcon className="text-zinc-500" /></button>}
        </div>
      </div>
      {isSearched && searchedProduct.map((product) => {
        return (
          <div>
            <label className="flex">
              <div>Name : &nbsp;</div>
              <div key = {product.name}> {product.name} </div>
            </label>
            <label className="flex">
              <div>Unit Price : &nbsp;</div>
              <div key = {product.price}> {product.price} </div>
            </label>
            <label className="flex">
              <div>Available quantity : &nbsp;</div>
              <div key = {product.quantity}> {product.quantity} </div>
            </label>
            <br />
        </div>)
        })
        // <div>
        //   searchedProduct.map((product) => {
        //     return <div key = {product}> {product} </div>
        //   })
        // </div>
      }
    </div>
  );
};

export default Searchproduct;