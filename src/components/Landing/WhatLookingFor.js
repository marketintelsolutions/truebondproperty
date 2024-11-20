import React from 'react'
import { Link } from 'react-router-dom'

const WhatLookingFor = () => {
    return (
        <div className='flex flex-col gap-10 py-10 justify-center items-center'>
            <h2 className='text-[18px] md:text-[28px] font-extralight tracking-[3px]'>
                WHAT ARE YOU LOOKING FOR?
            </h2>

            <div className='flex w-full max-w-max text-white text-[40px] mb:text-[60px] md:text-[92px] font-bold'>
                <div className='w-full h-[250px] mb:h-[300px] md:h-[447px] hover:text-primaryRed' style={{ backgroundImage: `url(/images/house.webp)`, backgroundSize: 'cover' }}>
                    <Link to={'/buy'} className='inline-flex justify-center items-center h-full w-full bg-[#000000c0]'>Buy</Link>
                </div>
                <div className='w-full h-[250px] mb:h-[300px] md:h-[447px] hover:text-primaryRed' style={{ backgroundImage: `url(/images/chair.webp)`, backgroundSize: 'cover' }}>
                    <Link to='rent' className='inline-flex justify-center items-center h-full w-full bg-[#cb8181ad]'>Rent</Link>
                </div>
            </div>
        </div>
    )
}

export default WhatLookingFor