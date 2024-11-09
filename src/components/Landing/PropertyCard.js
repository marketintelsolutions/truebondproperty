import React from 'react'
import { BsSquare } from 'react-icons/bs'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { RiMenu3Fill } from 'react-icons/ri'

const PropertyCard = () => {
    return (
        <div className='shadow-[0_4px_20px_2px_rgba(43,43,43,0.05)] w-full mx-auto max-w-[348px]'>
            <div className='relative'>
                <img src='/images/house.webp' className='w-full h-[208px] object-cover ' />
                <span className='inline-flex px-8 py-1 bg-primaryRed tracking-[3px] absolute bottom-0 left-0 text-white'>BUY</span>
            </div>
            <div className='bg-white px-10 py-10 flex flex-col gap-3'>
                <h2 className='text-[24px]'>17082 Perry Street</h2>
                <p className='text-[14px] font-thin'>San Francisco, CA, USA</p>
                <p className='text-[18px] font-light'>$850,000</p>
                <div className='mt-10 pt-8 border-t border-[rgba(43,43,43,0.1)] flex w-full justify-between'>
                    <div className='flex flex-col gap-2'>
                        <span><LuBedDouble color='#000001' size={22} /></span>
                        <p className='text-sm font-extralight tracking-[1px]'>Beds</p>
                        <h3 className='text-lg'>4</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span><LuBath color='#000001' size={22} /></span>
                        <p className='text-sm font-extralight tracking-[1px]'>Baths</p>
                        <h3 className='text-lg'>2</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span><RiMenu3Fill color='#000001' size={22} /></span>
                        <p className='text-sm font-extralight tracking-[1px]'>Levels</p>
                        <h3 className='text-lg'>3</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span><BsSquare color='#000001' size={22} /></span>
                        <p className='text-sm font-extralight tracking-[1px]'>Sqft</p>
                        <h3 className='text-lg'>1234</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyCard