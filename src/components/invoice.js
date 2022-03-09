import { createRef } from "react";
import { useLocation } from "react-router-dom";
import Pdf from "react-to-pdf";


const Invoice = () => {

const { pathname, state} = useLocation()

const ref = createRef()

  return (
    <div>
    <div className="p-5 max-w-2xl mx-auto" ref={ref}>
      <div className="flex justify-center items-center">
          <p className="font-semibold text-xl">Invoice</p>
      </div>

      <div className="flex justify-between mt-8">
        <div>
          <h3>Eco Haya</h3>
          <p>#944/945, 4th Cross, 9th Main,</p>
          <p>Vijaya Bank Layout,</p>
          <p>Bannerghatta Road,</p>
          <p>Bangalore - 560076</p>
        </div>
        <div className="text-right">
          <p>Invoice # : {}</p>
          <p>Invoice Date : {}</p>
          <p>Due Date : {}</p>
        </div>
      </div>

      <div className="mt-12">
        <div>
          Bill To: <strong>{state.customer.customerName}</strong>
        </div>
        <div>Company: <strong>{state.customer.company}</strong>{!state.customer.company.length && <i>NONE</i>}</div>
        <div>Address: <strong>{state.customer.address}</strong></div>
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
          {
            state.totalItems && state.totalItems?.map((product, index) => (
            <tr key={index}>
              <td className="p-2">{product.productName}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.quantity}</td>
              <td className="p-2">{product.price * product.quantity}</td>
              <td>
              </td>
            </tr>
            ))
          }
        </tbody>
        </table>

      </div>

      <div className="flex justify-end">
        <div>
          <p>Gross Total :</p>
        </div>
      </div>

      <div className="mt-12 text-center">notes</div>

      <div className="mt-12 text-center">Happiness Lies in Customer</div>
    </div>
    <Pdf targetRef={ref} filename="invoice.pdf" >
        {({ toPdf }) => <button onClick={toPdf} className="border-4 border-gray-700 rounded-lg">Download Invoice</button>}
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




// import { Laptop } from "@mui/icons-material";
// import { Table } from "@mui/material";
// import jsPDF from "jspdf";
// import { createRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Pdf from "react-to-pdf";


// const Invoice = () => {
// const product = {
//     productName: "Laptop",
//     price: 120000,
//     quantity: 1
// }
// const { pathname, state} = useLocation()

// const ref = createRef()

// const test = () =>{
//   var doc = new jsPDF();
// var elementHTML = document.getElementById("test");
// console.log(elementHTML)
// doc.html(elementHTML,{
//       callback: function(doc) {
//         console.log("in callback");
//         doc.save();
//       }})
// }

//   return (
//     <div>
//       <div id="elementH"></div>
//     <div id="test" className="p-5 max-w-2xl mx-auto" ref={ref}>
//       <div className="flex justify-center items-center">
//           <p className="font-semibold text-xl">Invoice</p>
//       </div>

//       <div className="flex justify-between mt-8">
//         <div>
//           <h3>Eco Haya</h3>
//           <p>#944/945, 4th Cross, 9th Main,</p>
//           <p>Vijaya Bank Layout,</p>
//           <p>Bannerghatta Road,</p>
//           <p>Bangalore - 560076</p>
//         </div>
//         <div className="text-right">
//           <p>Invoice # : {}</p>
//           <p>Invoice Date : {}</p>
//           <p>Due Date : {}</p>
//         </div>
//       </div>

//       <div className="mt-12">
//         <div>
//           Bill To: <strong>Strides Shasun Ltd</strong>
//         </div>
//         <div>Bannerghatt Road,</div>
//         <div>Bangalore - 560076</div>
//       </div>

//       <div className="mt-12">
//         <table className="w-full divide-y divide-gray-200 border border-gray-200">
//         <thead>
//           <tr className="bg-blue-500 text-white">
//             <th className="p-2 text-left">Name</th>
//             <th className="p-2 text-left">Unit Price</th>
//             <th className="p-2 text-left">Quantity</th>
//             <th className="p-2 text-left">Price</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {
//             state && state?.map((product, index) => (
//             <tr key={index}>
//               <td className="p-2">{product.productName}</td>
//               <td className="p-2">{product.price}</td>
//               <td className="p-2">{product.units}</td>
//               <td className="p-2">{product.price * product.units}</td>
//               <td>
//               </td>
//             </tr>
//             ))
//           }
//         </tbody>
//         </table>

//       </div>

//       <div className="flex justify-end">
//         <div>
//           <p>Gross Total :</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center">notes</div>

//       <div className="mt-12 text-center">Happiness Lies in Customer</div>
//     </div>
//     <Pdf targetRef={ref} filename="invoice.pdf" >
//         {({ toPdf }) => <button onClick={toPdf}>Download Invoice</button>}
//       </Pdf>
//       {/* <Document>
//     <Page size="A4">
//       <View>
//         <Text>Section #1</Text>
//       </View>
//       <View>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document> */}



//       <button onClick={test}>test</button>
//     </div>




//   );
// };

// export default Invoice;
