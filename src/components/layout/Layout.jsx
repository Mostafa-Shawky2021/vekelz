import React from 'react'
import { Sidebar } from '../sidebar'
import { Header } from '../header'
export const Layout = ({ children }) => {
    const sideBarStyle = {
        width: '248px',

    }
    return (
        <>
            <Header />
            <div className="d-flex">
                <div className="sidebar-wrapper" style={sideBarStyle}>
                    <Sidebar />
                </div>
                <div className="contnet">
                    {children}
                </div>
            </div>
        </>

    )
}
