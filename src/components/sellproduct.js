import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Sellproduct = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:5000/checkout")
    .then((res)=>{
      setProducts(res.data)
    })
  }, []);

  const navigate = useNavigate();

  const [totalItems, setTotalItems] = useState([]);

  const isItemAdded = totalItems.length > 0;

  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const [oneItem, setOneItem] = useState({
    productName: "",
    quantity: "",
    batchNumber: ""
  });

  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
  // const [buyerContact, setBuyerContact] = useState("");
  const [address, setAddress] = useState("");

  const customer = {
    customerName,
    company,
    address
  }

  const handleProduct = (e) => {
    setOneItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddProduct = (e) => {
    const singleProduct = products
      .map((product) => {
        if (product.pid === Number(oneItem.productName)) {
          return {
            productName: product.productName,
            quantity: Number(oneItem.quantity),
            batchNumber: product.batchNumber,
            price: product.price,
            salesDate: date
          };
        }
      })
      .filter((product) => product);

    {
      oneItem.productName.length > 0 &&
        oneItem.quantity > 0 &&
        oneItem.batchNumber.length > 0 &&
        setTotalItems([...totalItems, singleProduct[0]]);
    }
    setOneItem({
      productName: "",
      quantity: "",
      batchNumber: ""
    });
    document.getElementById("defValue").value = "DEFAULT";
  };
  
  const handleSellProduct = (event) => {
    event.preventDefault();
    console.log("entered in function")
    //const data = new FormData(event.currentTarget);
    //this is to sent to backend
    // console.log(obj)
    const salesdata = totalItems;
    console.log(totalItems)
    const a = axios.post("http://localhost:5000/checkout", {customer, salesdata})
      .then((res) => {
        console.log(res);
        //toast.error(res.response.data.message);
        swal({
          title: "ITEM SOLD",
          body: "",
          icon : "success",
          buttons :"Get Invoice"
        })
        navigate("invoice", {
              state: {totalItems, customer}
            })
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(a);
  };

  return (
    <div className="">
      <div className="text-center text-2xl text-gray-500 mb-4"> Sell Products</div> <hr />
      <div className="flex w-full justify-center mt-4">
        <div>
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Name"
          name="name"
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          className="  border-gray-300 text-sm p-1 w-60 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9"
        />
        </div>
        <div>

        
        
        <input
          type="text"
          autoComplete="off"
          placeholder="Company"
          name="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          className="  border-gray-300 text-sm p-1 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9"
        />
        </div>
        
        <div>
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="  border-gray-300 text-sm p-1 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9"
        />
        </div>
        <br />
      </div>

      <div className="container mx-auto flex m-6 mt-2 justify-center">
        <div>
        <select
          id="defValue"
          onChange={handleProduct}
          defaultValue="DEFAULT"
          name="productName"
          className="  border-gray-300 text-sm p-1 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9 w-44"
        >
          <option disabled value={"DEFAULT"}>
            Select Product
          </option>
          {products.map((product, index) => {
            return (
              <option key={index} value={product.pid}>
                {" "}
                {product.productName} ({product.price}){" "}
              </option>
            );
          })}
        </select>
        </div>
        <input
          type="text"
          required
          placeholder="Batch No"
          name="batchNumber"
          value={oneItem.batchNumber}
          onChange={handleProduct}
          className="  border-gray-300 text-sm p-1  border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9"
        />
        <br />
        
        <input
          type="text"
          required
          placeholder="Quantity"
          name="quantity"
          value={oneItem.quantity}
          onChange={handleProduct}
          className="  border-gray-300 text-sm p-1 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9 w-28"
        />
        <br />
        

        <div className="text-center">
          <button
            type="submit"
            onClick={handleAddProduct}
            className="border-1 px-5 py-1 mt-2 mb-10 rounded-md text-white" style ={{backgroundColor:'#42b72a'}}
          ><i className="fa fa-plus mr-1 "></i>
            Add
          </button>
        </div>
      </div>

      {isItemAdded && (
        <div>
          {totalItems.map((product, index) => {
            return (
              <div key={index}>
                <label className="flex">
                  <div>Name : &nbsp;</div>
                  <div key={product?.productName}> {product?.productName} </div>
                </label>
                <label className="flex">
                  <div>Quantity : &nbsp;</div>
                  <div key={product.quantity}> {product?.quantity} </div>
                </label>
                <label className="flex">
                  <div>Unit Price : &nbsp;</div>
                  <div key={product.price}> {product?.price} </div>
                </label>
                <br />
              </div>
            );
          })}
        </div>
      )}
      {/* {isItemAdded && <button onClick={() => {
              navigate("invoice");
            }} className='text-black bg-slate-300 rounded-2xl'
            target='_blank'
            >
                GENERATE INVOICE
            </button>} */}

      {/* {isItemAdded && <a target={"_blank"} href="http://localhost:3000/mainpage/sellproduct/invoice">GENERATE INVOICE</a>} */}
      {isItemAdded && (
        <button
          className="uppercase"
          onClick={
            handleSellProduct
            // navigate("invoice", {
            //   state: {totalItems, buyerDetail}
            // })
          }
        >
          Sell And Generate Invoice
        </button>
      )}
      {/* <Invoice /> */}
    </div>
  );
};

export default Sellproduct;
