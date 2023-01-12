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
                <aside className="sidebar-wrapper" style={sideBarStyle}>
                    <Sidebar />
                </aside>
                <div className="contnet">
                    {children}
                </div>
            </div>
        </>

    )
}
