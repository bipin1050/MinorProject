import axios from 'axios';
import { useState, useEffect } from "react"
import CanvasJSReact from '../canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = ({values, selectedProduct}) => {
    const [dataPoints1 , setDataPoints1] = useState(null);
    const [dataPoints2 , setDataPoints2] = useState(null);
    const tempData1 = [];
    const tempData2 = [];
    const [isData, setIsData] = useState(false);

    // console.log(selectedProduct)
    useEffect(()=>{
        axios.get("http://localhost:5000/dashboard")
        .then((res)=>{
            for (var i = 0; i < res.data.length; i++) {
                tempData1.push({
                    x: new Date(res.data[i].salesDate.substr(0,10)),
                    y: Number(res.data[i].price)
                });
            }
            setIsData(true)
            setDataPoints1(tempData1)
        })
    },[values])
    
    useEffect(()=>{
        axios.post("http://localhost:5000/dashboard/product", {productName : selectedProduct} )
        .then((res)=>{
            for (var i = 0; i < res.data.length; i++) {
                tempData2.push({
                    x: new Date(res.data[i].salesDate.substr(0,10)),
                    y: Number(res.data[i].price)
                });
            }
            setIsData(true)
            setDataPoints2(tempData2)
            // console.log(dataPoints2)
        })
    },[values,selectedProduct])
    
    const options = {
    "option1":
    {
        animationEnabled: true,
        title:{
            text: "Sales - Last 30 Days"
        },
        axisX: {
            valueFormatString: "D MMM"
        },
        axisY: {
            title: "Amount (in Rs)",
            prefix: "Rs "
        },
        data: [{
            yValueFormatString: "Rs #,###",
            xValueFormatString: "MMM DD",
            type: "spline",
            dataPoints: dataPoints1
        }]
    },
    "option2":
    {
        animationEnabled: true,
        title:{
            text: "Monthly Sales - 2021"
        },
        axisX: {
            valueFormatString: "D MMM"
        },
        axisY: {
            title: "Sales (in Rs)",
            prefix: "Rs "
        },
        data: [{
            yValueFormatString: "Rs #,###",
            xValueFormatString: "MMM DD",
            type: "spline",
            dataPoints: dataPoints2
        }]
    }
}
    
    
    
    return (
    <div>
        {isData && <CanvasJSChart options = {options[values]}
            /* onRef={ref => this.chart = ref} */
        />}
    </div>
    );
}

export default Chart;