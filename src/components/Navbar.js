import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className='flex  gap-8   items-center bg-primaryBlue text-white'>
            <div className='flex px-4 items-center gap-3 h-full pt-6 pb-2 border-b-4 border-primaryRed'>
                <span><MdHomeWork size={30} /></span>
                <h1 className='text-[19px]'>Truebond</h1>
                <p className='text-[14px] font-light tracking-[2px]'>PROPERTIES</p>
            </div>
            <div className='flex items-center gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                <span><FaFacebookF size={16} /></span>
                <span><FaTwitter size={16} /></span>
                <span><FaInstagram size={16} /></span>
                <span><FaLinkedinIn size={16} /></span>
            </div>
        </nav>
    )
}

export default Navbar