import axios from 'axios';
import CanvasJSReact from '../canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints1 = [];
var dataPoints2 = [];

const Chart = ({option}) => {
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
    axios.get('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then((data) => {
        // console.log(data)
        for (var i = 0; i < data.data.length; i++) {
            dataPoints1.push({
                x: new Date(data.data[i].x),
                y: data.data[i].y
            });
        }
    });
    const option2 = {
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
            type: "line",
            dataPoints: dataPoints2
        }]
    }
    axios.get('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then((data) => {
        // console.log(data)
        for (var i = 0; i < data.data.length; i++) {
            dataPoints2.push({
                x: new Date(data.data[i].x),
                y: data.data[i].y
            });
        }
    });
    return (
    <div>
        <CanvasJSChart options = {option1}
            /* onRef={ref => this.chart = ref} */
        />
    </div>
    );
}

export default Chart;