import React from 'react'

const WhatLookingFor = () => {
    return (
        <div className='flex flex-col gap-10 py-10 justify-center items-center'>
            <h2 className='text-[18px] font-extralight tracking-[3px]'>
                WHAT ARE YOU LOOKING FOR?
            </h2>

            <div className='flex w-full max-w-max text-white text-[72px] font-bold'>
                <div className='w-full h-[447px]' style={{ backgroundImage: `url(/images/house.webp)`, backgroundSize: 'cover' }}>
                    <button className='h-full w-full bg-[#000000a0]'>Buy</button>
                </div>
                <div className='w-full h-[447px]' style={{ backgroundImage: `url(/images/chair.webp)`, backgroundSize: 'cover' }}>
                    <button className='h-full w-full bg-[#cb8181e6]'>Rent</button>
                </div>
            </div>
        </div>
    )
}

export default WhatLookingFor