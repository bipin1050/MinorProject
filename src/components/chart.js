import axios from 'axios';
import { useState, useEffect } from "react"
import CanvasJSReact from '../canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints1 = [];
var dataPoints2 = [];

const Chart = () => {
    // const [salesDetail, setSalesDetail] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/dashboard")
        .then((res)=>{
            // setSalesDetail(res.data)
            for (var i = 0; i < res.data.length; i++) {
            dataPoints1.push({
                x: new Date(res.data[i].salesDate),
                y: res.data[i].price
            });
        }
        })
    }, [])
    
    console.log(dataPoints1)
    // console.log(option)
    const option1 = {
        animationEnabled: true,
        title:{
            text: "Monthly Sales - 2021"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in Rs)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: dataPoints1
        }]
    }
    // axios.get('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    // .then((data) => {
    //     // console.log(data)
        // for (var i = 0; i < data.data.length; i++) {
        //     dataPoints1.push({
        //         x: new Date(data.data[i].x),
        //         y: data.data[i].y
        //     });
        // }
    // });

    
    
    return (
    <div>
        <CanvasJSChart options = {option1}
            /* onRef={ref => this.chart = ref} */
        />
    </div>
    );
}

export default Chart;