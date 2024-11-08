import React from 'react'

const Banner = () => {
    return (
        <section className='flex justify-center h-lvh items-center flex-col ' style={{ backgroundImage: `url(/images/house.webp)`, backgroundSize: 'cover' }}>
            <div className='h-full w-full flex justify-center gap-20 text-white  bg-[#00000068] items-center flex-col  '>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className=' text-[72px] font-extrabold'>New Properties</h1>
                    <p className='text-[18px] font-[200] tracking-[5px] uppercase'>Exclusively by Truebond</p>
                </div>
                <button className='bg-primaryRed px-5 py-3 w-[170px] text-[19px]'>Explore</button>
            </div>
        </section>
    )
}

export default Banner