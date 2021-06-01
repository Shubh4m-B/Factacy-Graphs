import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = (props) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        let labels = []
        let chartDataSet = []

        for (let i = 0; i < 4; i++) {
            labels.push(props.stats[props.dataYear - 2015].countryValueList[i].country)
            chartDataSet.push(props.stats[props.dataYear - 2015].countryValueList[i].value)
        }
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: `${props.title}-${props.dataYear}`,
                    data: chartDataSet,
                    backgroundColor: [
                        props.color
                    ],
                    fill: true,
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [props.dataYear])

    return (
        <div>
            <div className="Graph-chart">
                <Bar data={chartData} options={{
                    responsive: true,
                    title: {
                        text: "Some title",
                        display: true
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                }
                            }
                        ],
                    }
                }} />
            </div>
        </div>
    )

}

export default Chart;