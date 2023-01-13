import React from 'react'
import { Col } from 'react-bootstrap'
import UserIcon from "../../../assets/usericon.png"
import TransmissionIcon from "../../../assets/transmission.png"
import HeartIcon from "../../../assets/heart.png"

import './card.css'

export const Card = ({ name, type, image, seatCount, transmission, price }) => {
    return (
        <Col md={4}>
            <div className="box">
                <p className="car-name">{name}</p>
                <p className="car-type">{type}</p>
                <img src={`assets/${image}`} className="img-fluid car-image" alt="car-image" />
                <div className="d-flex align-items-center car-info">
                    <div className="seat-count">
                        <img src={UserIcon} className="icon" alt="seat-count-icon" />
                        <span className="count text">{seatCount}</span>
                    </div>
                    <div className="transimition-status">
                        <img src={TransmissionIcon} className="icon" alt="seat-count-icon" />
                        <span className="tansmition-status text">{transmission}</span>
                    </div>
                    <div className="price ms-auto">
                        <div className="price">
                            <span style={{ fontWeight: 'bold', color: "#242731;" }}>
                                ${price}
                            </span>
                            <span style={{ color: "#72767C" }}>
                                /d
                            </span>
                        </div>
                    </div>
                    <div className="favourite">
                        <img src={HeartIcon} className="icon" alt="favourite icon" />
                    </div>
                </div>
            </div>
        </Col>
    )
}
