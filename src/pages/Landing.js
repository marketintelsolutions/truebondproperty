import React, { useEffect } from 'react'
import Banner from '../components/Landing/Banner'
import WhatLookingFor from '../components/Landing/WhatLookingFor'
import ForSale from '../components/Landing/ForSale'
import ForRent from '../components/Landing/ForRent'
import ClientStories from '../components/Landing/ClientStories'
import Contact from '../components/Landing/Contact'

const Landing = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <main className='pb-0'>
            <Banner />
            <WhatLookingFor />
            <ForSale />
            <ForRent />
            <ClientStories />

        </main>
    )
}

export default Landing