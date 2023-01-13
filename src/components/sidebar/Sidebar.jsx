import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '../../assets/dashboard.png'
import CarIcon from "../../assets/car.png";
import CartIcon from "../../assets/cart.png";
import CalenderIcon from "../../assets/calender.png"
import AssetsIcon from '../../assets/assets.png'
import CommentIcon from '../../assets/comment.png'

import './sidebar.css'

export const Sidebar = () => {
    return (
        <ul className="list-unstyled list">
            <li className="item">
                <Link to="">
                    <img src={DashboardIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Dashboard</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={AssetsIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Assets</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={CartIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Booking</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={CarIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Sell Cars</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={CartIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Buy Cars</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={AssetsIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Services</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={CalenderIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Calender</span>
                </Link>
            </li>
            <li className="item">
                <Link to="">
                    <img src={CommentIcon} className="item-icon" alt="item-icon" />
                    <span className="text">Messages</span>
                </Link>
            </li>
        </ul>
    )
}
