import Chart from "react-apexcharts";
import {ChartProps} from "../../interfaces";

type Range = {
    min: number,
    max: number
}
const  generateData = (count: number, yrange: Range) => {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x: x, y: y });
        i++;
    }
    return series;
}
const HeatMapChart = (props: ChartProps) => {
    const { height } = props
    const state = {
        options : {
            dataLabels: {
                enabled: false
            },
            colors: ["#008FFB"],
            title: {
                text: 'HeatMap Chart (Single color)'
            },
        },
        series: [
            {
                name: 'Metric1',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric2',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric3',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric4',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric5',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric6',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric7',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric8',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            },
            {
                name: 'Metric9',
                data: generateData(18, {
                    min: 0,
                    max: 90
                })
            }
        ],
    };

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="heatmap"
            height={height}
        />
    )
}


export default HeatMapChart;