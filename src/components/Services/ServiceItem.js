import React from 'react'

const ServiceItem = ({ image, heading, text, index }) => {
    return (
        <div className={`flex flex-wrap lg:flex-nowrap justify-between w-full lg:px-0 px-6 gap-12 md:gap-16 lg:gap-20 ${index % 2 === 0 && 'flex-row-reverse'}`}>
            <img src={`/images/${image}.jpg`} alt={heading} className='w-full lg:max-w-[50%] rounded-[10px]' />
            <div className='flex flex-col gap-4 md:gap-8 lg:gap-10'>
                <h1 className='text-[35px] md:text-[40px] lg:text-[45px] font-bold'>{heading}</h1>
                <p className='text-[17px] md:text-[20px] lg:text-[25px] tracking-[0px] font-inter leading-[30px] lg:leading-[40px] font-light'>{text}</p>
            </div>
        </div>
    )
}

export default ServiceItem