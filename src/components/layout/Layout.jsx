import React, { useEffect, useRef } from 'react'
import { Sidebar } from '../sidebar'
import { Header } from '../header'
import './layout.css'
export const Layout = ({ children }) => {

    const sideBarWrapper = useRef(null);
    const contentWrapper = useRef(null);

    useEffect(() => {
        const windowWidth = document.documentElement.scrollWidth;
        const sideBarWrapperWidth = sideBarWrapper.current.clientWidth
        const contentWidth = (windowWidth - sideBarWrapperWidth)
        contentWrapper.current.style.width = `${contentWidth}px`
    }, [])

    return (
        <>
            <Header />
            <div className="d-flex flex-wrap">
                <aside ref={sideBarWrapper} className="sidebar-wrapper">
                    <Sidebar />
                </aside>
                <div ref={contentWrapper} className="content">
                    {children}
                </div>
            </div>
        </>

    )
}
