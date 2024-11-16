import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='flex justify-center h-lvh items-center flex-col ' style={{ backgroundImage: `url(/images/house.webp)`, backgroundSize: 'cover' }}>
            <div className='h-full w-full flex justify-center gap-20 text-white  bg-[#00000068] items-center flex-col  '>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='text-[40px] mb:text-[54px] md:text-[72px] text-center  font-extrabold'>New Properties</h1>
                    <p className=' text-[11px] mb:text-[15px] md:text-[18px] font-[200] tracking-[5px] uppercase'>Exclusively by Truebond</p>
                </div>
                <Link to={'/all-properties'} className='bg-primaryRed text-center px-5 py-3 w-[170px] text-[19px]'>Explore</Link>
            </div>
        </section>
    )
}

export default Banner