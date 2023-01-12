import React from 'react'
import { Link } from 'react-router-dom'
import ListIcon from '../../assets/assets.png'
import './sidebar.css'

export const Sidebar = () => {
    return (
        <ul className="list-unstyled list">
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Dashboard</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Assets</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Booking</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Sell Cars</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Buy Cars</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Services</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Calender</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={ListIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Messages</span>
                </Link>
            </li>
        </ul>
    )
}
