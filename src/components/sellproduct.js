import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Sellproduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/checkout")
      .then((res) => {
        setProducts(res.data)
      })
  }, []);

  const navigate = useNavigate();

  const [totalItems, setTotalItems] = useState([]);

  const isItemAdded = totalItems.length > 0;

  let billno;

  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const [oneItem, setOneItem] = useState({
    productName: "",
    quantity: "",
    batchNumber: ""
  });

  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
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
    document.getElementById("batchdef").value = "default";
  };

  const handleSellProduct = (event) => {
    event.preventDefault();
    if (customerName == '' || address == '') {
      alert('Fill customer detail first')
      return;
    }
    let confirm = window.confirm("Are you sure want to delete?");
    if (!confirm) { return }
    //const data = new FormData(event.currentTarget);
    //this is to sent to backend
    // console.log(obj)
    const salesdata = totalItems;
    console.log(totalItems)
    const a = axios.post("http://localhost:5000/checkout", { customer, salesdata })
      .then((res) => {
        console.log(res);
        //toast.error(res.response.data.message);
        swal({
          title: "ITEM SOLD",
          body: "",
          icon: "success",
          buttons: "Get Invoice"
        })
        // billno = res.body.billno;
        navigate("invoice", {
          state: { totalItems, customer }
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
            placeholder="Name*"
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
            placeholder="Address*"
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
                  {product.productName} ({product.price})
                </option>
              );
            })}
          </select>
        </div>

        <select
          id="batchdef"
          defaultValue={"default"}
          onChange={handleProduct}
          name="batchNumber"
          className="  border-gray-300 text-sm p-1 border-2 m-2 focus:outline-none focus:border-blue-500 rounded-md text-gray-500 h-9 w-44"
        >
          <option value="default" disabled >
            Batch No.
          </option>
          {products.map((product, index) => {
            if (product.productId === Number(oneItem.productName)) {
              return (
                <option key={index} value={product.batchNumber} className="text-sm text-gray-400">
                  {product.batchNumber}
                </option>
              );
            }
          })}
        </select>

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
            className="button-green mt-3 ml-1"
          ><i className="fa fa-plus mr-1 "></i>
            Add
          </button>
        </div>
      </div>
      <div className=" flex justify-center">
        <table className="w-full  border-2 shadow">
          {isItemAdded &&
            <thead>
              <tr className=" text-white" style={{ backgroundColor: '#5c94ed' }}>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Unit Price</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>}
          {isItemAdded && (
            <tbody>

              {totalItems.map((product, index) => {
                return (
                  <>
                    {/* <label className="flex">
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
                <br /> */}

                    <tr key={index}>
                      <td className="pl-2" key={product?.productName}>{product?.productName}</td>
                      <td className="p-2" key={product?.quantity}>{product?.quantity}</td>
                      <td className="p-2" key={product.price}>{product?.price}</td>
                    </tr>
                  </>
                );
              })}
              
            </tbody>
          )}
                </table>
                </div>
          {isItemAdded &&
            <>
              <div className="flex flex-row-rev justify-end">

                <div>Sub Total</div> <br />
                <div>VAT 13%</div> <br/>
                <div>Grand Total</div><br/>
              </div>
            </>
          }

      {/* {isItemAdded && <button onClick={() => {
              navigate("invoice");
            }} className='text-black bg-slate-300 rounded-2xl'
            target='_blank'
            >
                GENERATE INVOICE
            </button>} */}

      {/* {isItemAdded && <a target={"_blank"} href="http://localhost:3000/mainpage/sellproduct/invoice">GENERATE INVOICE</a>} */}
      {isItemAdded && (
        <div className="flex flex-row-reverse w-full">

          <button
            className="button-green mt-6"
            onClick={
              handleSellProduct
              // navigate("invoice", {
              //   state: {totalItems, buyerDetail}
              // })
            }
          >
            Sell / Invoice
          </button>
        </div>
      )}
      {/* <Invoice /> */}
    </div>
  );
};

export default Sellproduct;
