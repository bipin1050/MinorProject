import axios from "axios";
import { useEffect, useState } from "react";

const Saleshistory = () => {

    const [soldProducts,setSoldProducts] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:5000/checkout")
        .then((res)=>{
            setSoldProducts(res.data)
        })
    },[soldProducts])


    return ( 
        <div>
            <tbody>
                {soldProducts && soldProducts.map((product, idx) => {
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
        </div>
     );
}
 
export default Saleshistory;