import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-primaryBlue pt-20 pb-0 text-white'>
            <div className='w-full max-w-max mx-auto flex flex-wrap gap-10 px-6 lg:px-0 justify-between'>
                <div className='h-[200px] flex flex-col justify-between'>
                    <div className='flex items-center gap-3 '>
                        <h1 className='text-[29px] text-primaryRed'>Truebond</h1>
                        <p className='text-[24px] font-light tracking-[2px]'>PROPERTIES</p>
                    </div>
                    <p className='text-sm font-extralight'>
                        © 2024 Truebond
                    </p>
                </div>
                <div className='flex flex-wrap gap-10 md:gap-24 lg:gap-40 w-[40%]'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-base  font-roboto'>Home</p>
                        <p className='text-base  font-roboto'>About Us</p>
                        <p className='text-base  font-roboto'>Properties</p>
                        <p className='text-base  font-roboto'>Blog</p>
                        <p className='text-base  font-roboto'>Contact</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h3 className=' text-base font-light mb-5'>CONTACT US</h3>
                        <p className='text-base font-roboto'>Lot 22, Akiogun New Market Road,

                            <br />
                            Oniru Victoria Island, Lagos
                            <br />
                            hello@truebondproperties.com</p>
                        <div className='flex items-center text-primaryRed gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                            <span><FaFacebookF size={16} /></span>
                            <span><FaTwitter size={16} /></span>
                            <span><FaInstagram size={16} /></span>
                            <span><FaLinkedinIn size={16} /></span>
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer