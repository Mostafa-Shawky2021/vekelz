import React, { useState } from 'react'
import { XAxis, YAxis, ResponsiveContainer, AreaChart, CartesianGrid, Area } from 'recharts';
import statisticsData from '../../../data/statistics.json'
import "./carstatistics.css"

export const CarStatistics = () => {

    const [statisticsdata, setStatisticsData] = useState(statisticsData.data)


    return (
        <div className="cars-wrapper">
            <header className="cars-header">
                <h5 className="title">
                    <span style={{ fontWeight: 'bold' }}>Car</span>
                    <span style={{ fontWeight: 'normal' }}>Staistics</span>
                </h5>
            </header>
            <div className="d-flex date-wrapper align-items-center  ">
                <div className="info">
                    20 February 2022
                </div>
                <div className="date ms-auto">
                    <button className="btn-date active">Day</button>
                    <button className="btn-date">Week</button>
                    <button className="btn-date">Month</button>
                </div>

            </div>
            <div className="area-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={statisticsdata}

                    >
                        <XAxis dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            padding={{ left: -60 }}
                            tickSize={10}
                        />
                        <Area type="monotone" dataKey="uv" fill="#FF764C" stroke="transparent" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
