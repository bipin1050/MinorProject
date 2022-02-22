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


  const products =[
    {'oil','3000','30'},
    {'soap','1200','50'},
    {'samphoo','100','200'},
    {'toothpaste','50','1300'}
  ]
  // const products = ["oil", "toothpaste", "soap", "samphoo"]

  const searchedProduct = products.filter((product) =>{
    return product.includes(searchValue);
  })

  console.log(isSearched);
console.log()
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
          />
        </div>
        <div>
          {showClearButton && <button onClick={handleClearButton}><CloseOutlinedIcon className="text-zinc-500" /></button>}
        </div>
      </div>
      {isSearched &&
          searchedProduct.map((product) => {
              return <div key = {product}> {product} </div>
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