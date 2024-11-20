import React from 'react'
import PropertyCard from './PropertyCard'
import { Link } from 'react-router-dom'

const ForRent = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col border-t border-[rgba(43,43,43,0.1)] pt-20 max-w-max mx-auto'>
            <h2 className=' text-[18px] md:text-[28px] font-extralight tracking-[3px]'>
                NEW PROPERTIES
            </h2>
            <h1 className='mt-5 text-[30px] md:text-[60px] font-bold'>For Rent</h1>
            <div className='mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    Array.from({ length: 3 }, (_, index) => <PropertyCard key={index} />)
                }
            </div>
            <Link to={'/rent'} className='bg-primaryRed border border-primaryRed hover:bg-white hover:text-primaryRed text-center px-5 py-3 w-[190px] text-[25px] mt-24 text-white'>View More</Link>

        </div>
    )
}

export default ForRent