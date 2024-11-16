import React from 'react'
import PropertyCard from './PropertyCard'
import { Link } from 'react-router-dom'

const ForSale = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <h2 className='text-[14px] md:text-[18px] font-extralight tracking-[3px]'>
                NEW PROPERTIES
            </h2>
            <h1 className='mt-5 text-[30px] md:text-[40px] font-bold'>For Sale</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    Array.from({ length: 3 }, (_, index) => <PropertyCard key={index} />)
                }
            </div>
            <Link to={'/buy'} className='bg-primaryRed text-center px-5 py-3 w-[170px] text-[19px] mt-24 text-white'>View More</Link>

        </div>
    )
}

export default ForSale