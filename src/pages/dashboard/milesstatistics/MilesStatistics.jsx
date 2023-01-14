import React, { useState } from 'react'
import { BarChart, Bar, Cell, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import statisticsData from '../../../data/statistics.json'

import "./milesstatistics.css"

export const MilesStatistics = () => {
    const [activeBar, setActiveBar] = useState(0)
    const [statisticsdata, setStatisticsData] = useState(statisticsData.data)

    const handleMouse = (_, index) => {
        setActiveBar(index)
    }
    return (
        <div className="miles-wrapper">
            <header className="miles-header">
                <h5 className="title">
                    <span style={{ fontWeight: 'bold' }}>Miles</span>
                    <span style={{ fontWeight: 'normal' }}>Staistics</span>
                </h5>
            </header>
            <div className="d-flex date-wrapper align-items-center">
                <div className="date">
                    <button className="btn-date active">Day</button>
                    <button className="btn-date">Week</button>
                    <button className="btn-date">Month</button>
                </div>
                <div className="info ms-auto">
                    256 Miles
                </div>
            </div>
            <div className="bar-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={statisticsdata}
                        barSize={30}
                        barGap={30}

                    >
                        <CartesianGrid horizontal={false} verticalPoints={[70, 130, 190, 255, 320, 383,]} />
                        <XAxis
                            dataKey="name"
                            tick={{ stroke: '#d2d2d2', strokeWidth: 0 }}
                            axisLine={false}
                            tickLine={false}
                            tickSize={10}
                        />
                        <Tooltip
                            contentStyle={{ background: '#282B32', width: 110, height: 70 }}
                            labelStyle={{ color: '#fff' }}
                            cursor={false}
                        />
                        <Bar dataKey="uv" fill="#F4F5F9" onMouseMove={handleMouse}>
                            {statisticsdata.map((entry, index) => (
                                <Cell
                                    cursor="pointer"
                                    fill={index === activeBar ? '#2884FF' : '#F4F5F9'} key={index} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
