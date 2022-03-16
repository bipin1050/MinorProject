import axios from 'axios';
import { useState, useEffect } from "react"
import CanvasJSReact from '../canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = ({option}) => {
    const [dataPoints, setDataPoints] = useState();
    const [dataPoints1 , setDataPoints1] = useState();
    const [dataPoints2 , setDataPoints2] = useState();
    const tempData = [];
    const [isData, setIsData] = useState(false);

    console.log(option)
    // console.log(selectedProduct)
    const selectedProduct = "Laptop"


    useEffect(()=>{
        axios.get("http://localhost:5000/dashboard")
        .then((res)=>{
            // setSalesDetail(res.data)
            for (var i = 0; i < res.data.length; i++) {
                tempData.push({
                    x: new Date(res.data[i].salesDate.substr(0,10)),
                    y: Number(res.data[i].price)
                });
            }
            setIsData(true)
            setDataPoints1(tempData)
        })
    },[])
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/dashboard/${selectedProduct}`)
        .then((res)=>{
            // setSalesDetail(res.data)
            for (var i = 0; i < res.data.length; i++) {
                tempData.push({
                    x: new Date(res.data[i].salesDate.substr(0,10)),
                    y: Number(res.data[i].price)
                });
            }
            setIsData(true)
            setDataPoints2(tempData)
        })
    },[])
    
    if(option==="option1"){
        setDataPoints(dataPoints1)
    }
    else if(option==="option2"){
        setDataPoints(dataPoints2)
    }


    // axios.get('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    // .then((data) => {
    //     // console.log(data)
    //     for (var i = 0; i < data.data.length; i++) {
    //         dataPoints1.push({
    //             x: new Date(data.data[i].x),
    //             y: data.data[i].y
    //         });
    //     }
    // });

    // console.log(option)
    const options = {
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
            dataPoints: dataPoints
        }]
    }
    
    
    
    return (
    <div>
        {isData && <CanvasJSChart options = {options}
            /* onRef={ref => this.chart = ref} */
        />}
    </div>
    );
}

export default Chart;