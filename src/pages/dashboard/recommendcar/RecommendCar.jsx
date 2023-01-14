import React from 'react'
import { Col } from 'react-bootstrap'
import './recommendedcar.css'
export const RecommendedCar = ({
    recommendPercentage,
    carName,
    boxBackground,
    image }) => {
    console.log(boxBackground)
    return (
        <Col xs={4}>
            <div className="recommended-car" style={{ background: boxBackground }}>
                <img src="assets/recommendedicon.png" className="icon" alt="recomicon" />
                <span className="percentage">{recommendPercentage}% Recommended</span>
                <div className="car-image">
                    <img src={`assets/${image}`} className="car-image" alt="car-image-recommended" />
                </div>
                <p className="car-name">{carName}</p>
                <div className="car-info d-flex align-items-center">
                    <img src="assets/transmission.png" className="icon" alt="car-image-recommended" />
                    <span>132k</span>
                    <img src="assets/gear.png" className="icon" alt="car-image-recommended" />
                    <img src="assets/energyrecommend.png" className="icon" alt="car-image-recommended" />
                    <span className="ms-auto">28$/h</span>
                </div>
            </div>
        </Col>

    )
}
