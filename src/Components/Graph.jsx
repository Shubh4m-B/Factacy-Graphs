import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import '../Styles/Graph.css'

const Graph = (props) => {
    const [chartData, setChartData] = useState({})

    const { title, stats } = props.data

    const labels = []
    const chartDataSet = []

    for (let i = 0; i < 4; i++) {
        labels.push(stats[0].countryValueList[i].country)
        chartDataSet.push(stats[0].countryValueList[i].value)
    }
    const chart = () => {
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: `${title}-2015`,
                    data: chartDataSet,
                    backgroundColor: [
                        'rgba(75,192,255,0.7)',
                        'rgba(255,100,20,0.7)',
                        'rgba(20,200,98,0.7)',
                        'rgba(200,192,67,0.7)'
                    ],
                    fill: true,
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="Graph">
            <h1>{title}</h1>
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
                                    // borderColor: 'rgba(200,200,200,0.7)',
                                    // color: 'rgba(200,200,200,0.7)',
                                    // tickColor: 'rgba(200,200,200,0.7)'
                                }
                            }
                        ],
                    }
                }} />
            </div>
        </div>
    )

}

export default Graph;
