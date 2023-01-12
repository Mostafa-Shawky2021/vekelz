import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
import SearchImg from '../../assets/search.png'
import NotificationIcon from '../../assets/notification.png'
import UserImage from '../../assets/user.png'

export const Header = () => {
    return (
        <header className="header d-flex">
            <div className="logo d-flex align-items-center">
                <img className="img" src={Logo} />
                <h3 className="company-name">Motiv.</h3>
            </div>
            <div className="search-box">
                <img src={SearchImg} className="icon-search" alt="search-icon" />
                <input type="text" className="search-input" placeholder='Search or type' />
            </div>
            <div className="user-action d-flex align-items-center ms-auto">
                <div className="notification-wrapper">
                    <img src={NotificationIcon} className="notification-icon" alt="notification-icon" />
                </div>
                <div className="user">
                    <img src={UserImage} className="user-image" alt="user-image" />
                </div>
            </div>
        </header>
    )
}
