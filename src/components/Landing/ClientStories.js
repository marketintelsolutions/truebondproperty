import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import ReviewsSlider from './ReviewsSlider'

const ClientStories = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 md:mt-20 relative'>
            <h2 className='text-2xl  font-thin tracking-[4px]'>CLIENTS STORIES</h2>

            <ReviewsSlider />
            <div className='h-lvh w-full sticky top-0 left-0' style={{ backgroundImage: `url(/images/house2.jpg)`, backgroundSize: 'cover' }}>

            </div>
            <div className='py-20  relative z-10 bg-[#e4ecf2] w-full flex justify-center items-center flex-col'>
                <h2 className='text-base md:text-lg font-thin tracking-[4px] text-center'>YOUR DREAM HOUSE IS ONE STEP AWAY!</h2>
                <div className='flex justify-center flex-wrap items-center gap-16 md:gap-20 lg:gap-40 mt-20'>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><IoCallOutline size={60} /></span>
                            <h2 className='text-[26px]'>Call Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px]'>24 Hours Available</p>
                            <p className='text-base font-extralight tracking-[2px]'>09062979782</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><CiLocationOn size={60} /></span>
                            <h2 className='text-[26px]'>Find Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px] '>Plot 22, Akiogun New Market Road,</p>
                            <p className='text-base font-extralight tracking-[2px]'>Oniru Victoria Island, Lagos</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><MdOutlineMail size={60} /></span>
                            <h2 className='text-[26px]'>Email Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px] '>Direct Email</p>
                            <p className='text-base font-extralight tracking-[2px]'>hello@truebondproperties.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientStories