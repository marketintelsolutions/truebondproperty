import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='relative flex justify-center h-lvh items-center flex-col ' >
            <div className='h-full w-full' >
                <video autoPlay muted loop width="100%" >
                    <source src="/banner.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='absolute top-0 left-0 h-full w-full flex justify-center gap-20 text-white  bg-[#0000009a] items-center flex-col  '>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='text-[40px] mb:text-[54px] md:text-[102px] text-center font-inter  font-extrabold'>New Properties</h1>
                    <p className=' text-[11px] mb:text-[18px] md:text-[28px] font-[200] tracking-[5px] uppercase'>Exclusively by Truebond</p>
                </div>
                <Link to={'/all-properties'} className='bg-primaryRed border border-primaryRed hover:bg-white hover:text-primaryRed text-center px-4 py-3 w-[180px] text-[20px] rounded-md'>Explore</Link>
            </div>
        </section>
    )
}

export default Banner