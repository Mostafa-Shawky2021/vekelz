import React from 'react'

export const MilesStatistics = () => {
    return (
        <div className="miles-wrapper">
            <header className="miles-header">
                <h3 className="title">
                    <span style={{ fontWeight: 'bold' }}>Miles</span>
                    <span>Staistics</span>
                </h3>
                <div className="date d-flex">
                    <button className="btn-date">Day</button>
                    <button className="btn-date">Week</button>
                    <button className="btn-date">Month</button>
                </div>
            </header>
        </div>
    )
}
