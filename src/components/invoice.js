import { createRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Pdf from "react-to-pdf";


const Invoice = () => {
  let grossTotal = 0;
  const [advance, setAdvance] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [toggleDiscount, setToggleDiscount] = useState(true);
  const handlediscount = () =>{
    if (toggleDiscount == true) {
      setToggleDiscount(false);
    }
    else {
      setToggleDiscount(true);
    }
  }

  let date= new Date();
  if (date.getMonth() + 1 <= 9) {
      if (date.getDate() <= 9) {
          date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
      }
      else {
          date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
      }
  }

  const { pathname, state} = useLocation()
  const ref = createRef()

  return (
    <div>
    <div className="p-5 mx-auto" style={{maxWidth : "8.1in"}} ref={ref}>
      <div className="flex justify-center items-center">
          <p className="font-semibold text-xl">Invoice</p>
      </div>

      <div className="flex justify-center items-center mt-8">
          <h3>Company Name</h3>
      </div>
      <div className="flex justify-center items-center">
          <p>Address</p>
      </div>
      <div className="flex justify-center items-center">
          <p>Pan no.</p>
      </div>
      <div className="flex justify-center items-center">
          <p>Tel :&nbsp;</p>
      </div>

      <div className="flex justify-between mt-12">
        <div>
          <p>Bill To: <strong>{state.customer.customerName}</strong></p>
          <p>Company: <strong>{state.customer.company}</strong>{!state.customer.company.length && <i>NONE</i>}</p>
          <p>Address: <strong>{state.customer.address}</strong></p>
        </div>
        <div className="text-right">
          <p>Invoice # : {}</p>
          <p>Invoice Date : {date}</p>
        </div>
      </div>

      <div className="mt-12">
        <table className="w-full divide-y divide-gray-200 border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Unit Price</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {state.totalItems && state.totalItems?.map((product, index) => {
              grossTotal = grossTotal + product.price * product.quantity
              return (
                <tr key={index}>
                  <td className="p-2">{product.productName}</td>
                  <td className="p-2">{product.price}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">{product.price * product.quantity}</td>
                </tr>)
            })}
          </tbody>
        </table>

      </div>

      <div className="flex justify-end">
        <div>
          <label className="flex justify-end">
            Gross Total :&nbsp;
          </label>
          <label className="flex justify-end">
            Advance :&nbsp;
          </label>
          <div>
            Discount(
              {toggleDiscount && <span onClick={handlediscount} className="hover:cursor-pointer">%</span>}
              {!toggleDiscount && <span onClick={handlediscount} className="hover:cursor-pointer">Rs</span>}
            ) :&nbsp;
          </div>
          <label className="flex justify-end">
            Net Total :&nbsp;
          </label>
        </div>
        <div>
          <div>{grossTotal}</div>
          <div>
            <input className="w-32" onChange={(e) => setAdvance(e.target.value)} placeholder="0"/>
          </div>
          <div>
            <input className="w-32" onChange={(e) => setDiscount(e.target.value)} placeholder="0"/>
          </div>
          <div>
            {toggleDiscount && grossTotal - grossTotal * discount/100 - advance}
            {!toggleDiscount && grossTotal -  discount - advance}
          </div>
        </div>
      </div>
      

      <div className="mt-12 text-center">Happiness Lies in Customer</div>
    </div>
    <Pdf targetRef={ref} filename="invoice.pdf" >
        {({ toPdf }) => <button onClick={toPdf} className="border-4 border-gray-700 rounded-lg alig">Download Invoice</button>}
      </Pdf>
      {/* <Document>
    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document> */}
    </div>
  );
};

export default Invoice;