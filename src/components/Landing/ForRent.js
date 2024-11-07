import React from 'react'
import PropertyCard from './PropertyCard'

const ForRent = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col border-t border-[rgba(43,43,43,0.1)] pt-20 max-w-max mx-auto'>
            <h2 className='text-[18px] font-extralight tracking-[3px]'>
                NEW PROPERTIES
            </h2>
            <h1 className='mt-5 text-[40px] font-bold'>For Rent</h1>
            <div className='mt-10 grid grid-cols-3 gap-20'>
                {
                    Array.from({ length: 3 }, (_, index) => <PropertyCard key={index} />)
                }
            </div>
            <button className='bg-primaryRed px-5 py-3 w-[170px] text-[19px] mt-24 text-white'>View More</button>

        </div>
    )
}

export default ForRent