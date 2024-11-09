import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Landing/Contact'

const MainLayout = ({ children }) => {
    return (
        <div><Navbar />{children}<Contact /><Footer /></div>
    )
}

export default MainLayout