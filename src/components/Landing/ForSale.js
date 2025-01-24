import React from 'react'
import PropertyCard from './PropertyCard'
import { Link } from 'react-router-dom'
import { properties } from '../../utils/data'

const ForSale = () => {


    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <h2 className='text-[18px] md:text-[28px] font-extralight tracking-[3px]'>
                NEW PROPERTIES
            </h2>
            <h1 className='mt-5 text-[30px] md:text-[60px] font-bold'>For Sale</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {properties.slice(0, 3).map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
            <Link to={'/buy'} className='bg-primaryRed border border-primaryRed hover:bg-black hover:text-primaryRed text-center px-4 py-4 rounded-full w-[190px] text-[20px] mt-24 text-white'>View More</Link>

        </div>
    )
}

export default ForSale