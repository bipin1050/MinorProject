import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React, { useState } from "react";

const Searchproduct = (props) => {

  const products = props.products;

  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (event) => {
    setSearchValue(event.target.value.trim())
  }
  const handleClearButton = () => {
    setSearchValue("");
  }

  const showClearButton = searchValue.length > 0;

  const computedProducts = products.filter((product) => {
    if (!searchValue.length) return product;

    let search = searchValue.toUpperCase();

    if (
      product.productName.toUpperCase().includes(search) || 
      product.manufacturer.toUpperCase().includes(search) || 
      product.category.toUpperCase().includes(search)
    )
      return product;
  })

  return (
    <div className="py-8">
      <div
        className="p-1 flex ml-auto w-1/3 border-2 rounded-md items-center mb-3 focus-within:border-blue-500"
      >
        <div>
          <SearchIcon className="fill-current text-gray-500" />
        </div>
        <div className="ml-2 mr-2 w-full ">
          <input
            className="outline-none w-full focus:outline-none  rounded-sm"
            type="text"
            name="searchitem"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputValue}
            autoComplete="off"
          />
        </div>
        <div>
          {showClearButton && <button onClick={handleClearButton}><CloseOutlinedIcon className="text-zinc-500" /></button>}
        </div>
      </div>
      <table className="w-full divide-y divide-gray-200 border border-gray-200">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-left">Batch Number</th>
            <th className="p-2 text-left">Manufacturer</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {computedProducts.map((product, idx) => {
            return (<tr key={idx}>
              <td className="p-2">{product.productName}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.quantity}</td>
              <td className="p-2">{product.batchNumber}</td>
              <td className="p-2">{product.manufacturer}</td>
              <td className="p-2">{product.category}</td>
              <td>
              </td>
            </tr>)
          })}
        </tbody>

      </table>
    </div>
  );
};

export default Searchproduct;