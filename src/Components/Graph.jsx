import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import '../Styles/Graph.css'

const Graph = (props) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: "Level of thickness",
                    data: [90, 34, 56, 67, 89],
                    backgroundColor: 'rgba(75,192,255,0.7)',
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
            <h1>Graph : {props.data.title}</h1>
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
                                    display: true
                                }
                            }
                        ]
                    }
                }} />
            </div>
        </div>
    )

}

export default Graph;
