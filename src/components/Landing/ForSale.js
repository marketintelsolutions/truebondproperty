import React from 'react'
import PropertyCard from './PropertyCard'

const ForSale = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <h2 className='text-[18px] font-extralight tracking-[3px]'>
                NEW PROPERTIES
            </h2>
            <h1 className='mt-5 text-[40px] font-bold'>For Sale</h1>
            <div className='mt-10 grid grid-cols-3 gap-20'>
                {
                    Array.from({ length: 3 }, (_, index) => <PropertyCard key={index} />)
                }
            </div>
            <button className='bg-primaryRed px-5 py-3 w-[170px] text-[19px] mt-24 text-white'>View More</button>

        </div>
    )
}

export default ForSale