import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'

const ClientStories = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 relative'>
            <h2 className='text-lg font-thin tracking-[4px]'>CLIENTS STORIES</h2>
            <div className='relative z-10 flex flex-col gap-4 bg-primaryBlue justify-center items-center w-full max-w-max mx-auto py-20 mt-5 translate-y-[90px]'>
                <p className='text-white max-w-[40%] text-center text-base font-extralight tracking-[1px] leading-[35px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique quibusdam enim excepturi mollitia quaerat eum, ipsa vel quae alias a repellendus sapiente culpa beatae natus, quia voluptate. Nulla, amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus doloribus facere voluptate, </p>
                <h3 className='text-[19px] text-primaryRed'>Jay Flake, NG</h3>
            </div>
            <div className='h-lvh w-full sticky top-0 left-0' style={{ backgroundImage: `url(/images/house.webp)`, backgroundSize: 'cover' }}>

            </div>
            <div className='py-20  relative z-10 bg-[#e4ecf2] w-full flex justify-center items-center flex-col'>
                <h2 className='text-lg font-thin tracking-[4px]'>YOUR DREAM HOUSE IS ONE STEP AWAY!</h2>
                <div className='flex justify-center items-center gap-40 mt-20'>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><IoCallOutline size={60} /></span>
                            <h2 className='text-[26px]'>Call Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px]'>Free Calls</p>
                            <p className='text-base font-extralight tracking-[2px]'>1-800-000-000</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><CiLocationOn size={60} /></span>
                            <h2 className='text-[26px]'>Find Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px] '>500 Terry Francine St.</p>
                            <p className='text-base font-extralight tracking-[2px]'>San Francisco, CA 94158</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 text-center'>
                        <div className='flex flex-col gap-4 items-center'>
                            <span className='text-primaryRed'><MdOutlineMail size={60} /></span>
                            <h2 className='text-[26px]'>Email Us</h2>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base font-extralight tracking-[2px] '>Direct Email</p>
                            <p className='text-base font-extralight tracking-[2px]'>info@truebond.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientStories