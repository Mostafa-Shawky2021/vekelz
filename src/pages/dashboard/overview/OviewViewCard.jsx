import React, { useRef, useLayoutEffect } from 'react'
import { Col } from 'react-bootstrap'
import ProgressBar from 'react-customizable-progressbar'
import './overviewcard.css';



export const OviewViewCard = ({
  icon,
  overviewText,
  textColor,
  strokeColor,
  percentage,
  percentageColor,
  backgroundBox,
  iconBackground
}) => {

  return (
    <Col xs={3}>
      <div className="overview-wrapper text-center" style={{ background: backgroundBox }} >
        <header className="overview-header">
          <div className="image-icon">
            <img src={`assets/${icon}`} className="overview-icon" alt="overview-icon" />
          </div>
          <p className="overview-name" style={{ color: textColor }}>{overviewText}</p>
        </header>
        <div className="progress" style={{ background: backgroundBox }}>
          <ProgressBar
            progress={percentage}
            radius={80}
            cut={120}
            rotate={-210}
            strokeWidth={12}
            strokeColor={strokeColor}
            trackStrokeWidth={12}
            trackStrokeColor="#e9e9e9">
            <div className="indicator">
              <div style={{ color: textColor }}>{percentage}%</div>
            </div>
          </ProgressBar>
        </div>
      </div>
    </Col>
  )
}
