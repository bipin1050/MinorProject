import axios from "axios";
import { useEffect, useState } from "react";

const Saleshistory = () => {

    const [soldProducts,setSoldProducts] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:5000/checkout/salesDetail")
        .then((res)=>{
            setSoldProducts(res.data)
        })
    },[])

    return ( 
        <div>
            <tbody>
                <tr>
                    <td className="p-2">Bill No.</td>
                        <td className="p-2">Buyers</td>
                        <td className="p-2">Address</td>
                        <td className="p-2">Company</td>
                        <td className="p-2">Product Name</td>
                        <td className="p-2">Price</td>
                        <td className="p-2">Quantity</td>
                        <td className="p-2">Sales Date</td>
                </tr>
                {soldProducts && soldProducts.map((product, idx) => {
                    let date= new Date(product.salesDate);
                    if (date.getMonth() + 1 <= 9) {
                        if (date.getDate() <= 9) {
                            date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
                        }
                        else {
                            date = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
                        }
                    }
                    return (
                    <tr key={idx}>
                        {console.log(idx)}
                        <td className="p-2">{product.billnumber}</td>
                        <td className="p-2">{product.name}</td>
                        <td className="p-2">{product.address}</td>
                        <td className="p-2">{product.company}</td>
                        <td className="p-2">{product.productName}</td>
                        <td className="p-2">{product.price}</td>
                        <td className="p-2">{product.quantity}</td>
                        <td className="p-2">{date}</td>
                    </tr>)
                })}
            </tbody>
        </div>
     );
}
 
export default Saleshistory;