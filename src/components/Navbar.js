import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { } from 'react-router'

const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    return (
        <nav className='flex  gap-8 justify-between  items-center bg-primaryBlue text-white'>
            <div className='flex items-center gap-8'>
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
            </div>
            <div className='flex items-center gap-5 pr-10'>
                <Link to={'/'} className='px-2'>Home</Link>
                <Link to={'/about-us'} className='px-2'>About Us</Link>
                <div className='relative px-4' onClick={() => setIsDropdown(!isDropdown)} onMouseEnter={() => setIsDropdown(true)} >
                    Properties
                    {isDropdown && <div onMouseLeave={() => setIsDropdown(false)} className='flex flex-col gap-2 absolute top-[150%] py-2 left-0 bg-primaryBlue w-full px-4'>
                        <Link to={'/all-properties'} className='hover:text-primaryRed'>All</Link>
                        <Link to={'/buy'} className='hover:text-primaryRed'>Buy</Link>
                        <Link to={'/rent'} className='hover:text-primaryRed' >Rent</Link>
                    </div>}
                </div>
                <Link to={'/blog'} className='px-2'>Blog</Link>
                <Link to={'/contact'} className='px-2'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar