import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Landing/Contact'
import { WhatsAppWidget } from "react-whatsapp-widget";


const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Contact />
            <Footer />
            <WhatsAppWidget
                // CompanyIcon='/logo.svg'
                companyName="Truebond Property"
                message="Hello, how can we help you today?"
                phoneNumber="+2348030030000"
            />
        </>
    )
}

export default MainLayout