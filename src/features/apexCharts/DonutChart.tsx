import Chart from 'react-apexcharts'
import {ChartProps} from "../../interfaces";

const DonutChart = (props: ChartProps) => {
    const { height } = props
    const state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }
    return(
        <div style={{padding: '7px 0'}}>
            <Chart options={state.options} series={state.series} type="donut" height={height} />
        </div>
    )
}

export default DonutChart;