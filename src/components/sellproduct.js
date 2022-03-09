import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Sellproduct = (props) => {
  const products = props.products;

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
    // console.log(singleProduct[0]);

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

  // console.log(totalItems);
  // console.log(products);
  // console.log(oneItem);
  // console.log(totalItems);

  
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
    console.log(a);
  };

  return (
    <div>
      <div className="flex">
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
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />
        <input
          type="text"
          autoComplete="off"
          placeholder="company"
          name="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />
        {/* <input
          type="text"
          required
          autoComplete="off"
          placeholder="contact"
          name="contact"
          value={buyerContact}
          onChange={(e) => {
            setBuyerContact(e.target.value);
          }}
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br /> */}
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="address"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />
      </div>

      <div className="container mx-auto flex py-20">
        <select
          id="defValue"
          onChange={handleProduct}
          defaultValue="DEFAULT"
          name="productName"
          className="h-9 w-full rounded-lg bg-zinc-100 border-black justify-start"
        >
          <option disabled value={"DEFAULT"}>
            --SELECT PRODUCT--
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
        <input
          type="text"
          required
          placeholder="Batch No"
          name="batchNumber"
          value={oneItem.batchNumber}
          onChange={handleProduct}
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />
        <input
          type="text"
          required
          placeholder="Quantity"
          name="quantity"
          value={oneItem.quantity}
          onChange={handleProduct}
          className="h-9 w-full bg-zinc-100 rounded-lg"
        />
        <br />
        <br />

        <div className="text-center">
          <button
            type="submit"
            onClick={handleAddProduct}
            className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black"
          >
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







// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// import Invoice from "./invoice";

// const Sellproduct = (props) => {
//   const products = props.products;

//   const navigate = useNavigate();

//   const [totalItems, setTotalItems] = useState([]);

//   const isItemAdded = totalItems.length > 0;

//   var today = new Date(),
//   const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//   const [oneItem, setOneItem] = useState({
//     productName: "",
//     batchNo: "",
//     units: "",
//   });
  
//   "productName":"Laptop",
//             "quantity":50,
//             "batchNumber":1111,
//             "price":1000,
//             "salesDate":"2008-12-01"

//   const [buyerName, setBuyerName] = useState("");
//   const [buyerCompany, setBuyerCompany] = useState("");
//   // const [buyerContact, setBuyerContact] = useState("");
//   const [buyerAddress, setBuyerAddress] = useState("");
//   const customer = {
//     buyerName,
//     buyerCompany,
//     buyerAddress
//   }

//   const handleProduct = (e) => {
//     setOneItem((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleAddProduct = (e) => {
//     const singleProduct = products
//       .map((product) => {
//         if (product.pid === Number(oneItem.productName)) {
//           return {
//             productName: product.productName,
//             price: product.price,
//             units: Number(oneItem.units),
//           };
//         }
//       })
//       .filter((product) => product);
//     // console.log(singleProduct[0]);

//     {
//       oneItem.productName.length > 0 &&
//         oneItem.units > 0 &&
//         oneItem.batchNo.length > 0 &&
//         setTotalItems([...totalItems, singleProduct[0]]);
//     }
//     setOneItem({
//       productName: "",
//       batchNo: "",
//       units: "",
//     });
//     document.getElementById("defValue").value = "DEFAULT";
//   };

//   // console.log(totalItems);
//   // console.log(products);
//   // console.log(oneItem);
//   // console.log(totalItems);

  
//   const handleSellProduct = (event) => {
//     event.preventDefault();
//     console.log("entered in function")
//     //const data = new FormData(event.currentTarget);
//     //this is to sent to backend
//     // console.log(obj)
//     const a = axios.post("http://localhost:5000/checkout", {customer, salesdata})
//       .then((res) => {
//         console.log(res);
//         //toast.error(res.response.data.message);
//         navigate("invoice", {
//               state: {totalItems, customer}
//             })
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log(a);
//   };

//   return (
//     <div>
//       <div className="flex">
//         <input
//           type="text"
//           required
//           autoComplete="off"
//           placeholder="Name"
//           name="name"
//           value={buyerName}
//           onChange={(e) => {
//             setBuyerName(e.target.value);
//           }}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           autoComplete="off"
//           placeholder="company"
//           name="company"
//           value={buyerCompany}
//           onChange={(e) => {
//             setBuyerCompany(e.target.value);
//           }}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br />
//         {/* <input
//           type="text"
//           required
//           autoComplete="off"
//           placeholder="contact"
//           name="contact"
//           value={buyerContact}
//           onChange={(e) => {
//             setBuyerContact(e.target.value);
//           }}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br /> */}
//         <input
//           type="text"
//           required
//           autoComplete="off"
//           placeholder="address"
//           name="address"
//           value={buyerAddress}
//           onChange={(e) => {
//             setBuyerAddress(e.target.value);
//           }}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br />
//       </div>

//       <div className="container mx-auto flex py-20">
//         <select
//           id="defValue"
//           onChange={handleProduct}
//           defaultValue="DEFAULT"
//           name="productName"
//           className="h-9 w-full rounded-lg bg-zinc-100 border-black justify-start"
//         >
//           <option disabled value={"DEFAULT"}>
//             --SELECT PRODUCT--
//           </option>
//           {products.map((product, index) => {
//             return (
//               <option key={index} value={product.pid}>
//                 {" "}
//                 {product.productName} ({product.price}){" "}
//               </option>
//             );
//           })}
//         </select>
//         <input
//           type="text"
//           required
//           placeholder="Batch No"
//           name="batchNo"
//           value={oneItem.batchNo}
//           onChange={handleProduct}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           required
//           placeholder="units"
//           name="units"
//           value={oneItem.units}
//           onChange={handleProduct}
//           className="h-9 w-full bg-zinc-100 rounded-lg"
//         />
//         <br />
//         <br />

//         <div className="text-center">
//           <button
//             type="submit"
//             onClick={handleAddProduct}
//             className="border-4 px-10 py-2 mb-10 rounded-2xl bg-green-700 hover:bg-stone-50 hover:text-black"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {isItemAdded && (
//         <div>
//           {totalItems.map((product, index) => {
//             return (
//               <div key={index}>
//                 <label className="flex">
//                   <div>Name : &nbsp;</div>
//                   <div key={product?.productName}> {product?.productName} </div>
//                 </label>
//                 <label className="flex">
//                   <div>units : &nbsp;</div>
//                   <div key={product.units}> {product?.units} </div>
//                 </label>
//                 <label className="flex">
//                   <div>Unit Price : &nbsp;</div>
//                   <div key={product.price}> {product?.price} </div>
//                 </label>
//                 <br />
//               </div>
//             );
//           })}
//         </div>
//       )}
//       {/* {isItemAdded && <button onClick={() => {
//               navigate("invoice");
//             }} className='text-black bg-slate-300 rounded-2xl'
//             target='_blank'
//             >
//                 GENERATE INVOICE
//             </button>} */}

//       {/* {isItemAdded && <a target={"_blank"} href="http://localhost:3000/mainpage/sellproduct/invoice">GENERATE INVOICE</a>} */}
//       {isItemAdded && (
//         <button
//           className="uppercase"
//           onClick={
//             handleSellProduct
//             // navigate("invoice", {
//             //   state: {totalItems, buyerDetail}
//             // })
//           }
//         >
//           Sell And Generate Invoice
//         </button>
//       )}
//       {/* <Invoice /> */}
//     </div>
//   );
// };

// export default Sellproduct;
