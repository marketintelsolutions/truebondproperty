import React from 'react'

const ServiceItem = ({ image, heading, text, index }) => {
    return (
        <div className={`flex justify-between w-full gap-20 ${index % 2 === 0 && 'flex-row-reverse'}`}>
            <img src={`/images/${image}.jpg`} alt={heading} className='w-full max-w-[50%] rounded-[10px]' />
            <div className='flex flex-col gap-10'>
                <h1 className='text-[45px] font-bold'>{heading}</h1>
                <p className='text-[25px] tracking-[0px] font-inter leading-[40px] font-light'>{text}</p>
            </div>
        </div>
    )
}

export default ServiceItem