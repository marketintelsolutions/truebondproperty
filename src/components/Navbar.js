import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
// import { } from 'react-router'

const navigationLinks = [
    // { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    {
        label: 'Properties',
        isDropdown: true,
        dropdownItems: [
            { path: '/all-properties', label: 'All' },
            { path: '/buy', label: 'Buy' },
            { path: '/rent', label: 'Rent' }
        ]
    },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

    const { pathname } = useLocation()

    console.log('path', pathname);
    return (
        <nav className='flex relative gap-8 justify-between  items-center bg-primaryBlue text-white'>
            <div className='flex items-center gap-8 md:w-auto w-full justify-between'>
                <Link to={'/'} className='flex px-4 items-center gap-3 h-full pt-8 pb-3 border-b-4 border-primaryRed'>
                    <span><MdHomeWork size={30} /></span>
                    <h1 className='text-[22px]'>Truebond</h1>
                    <p className='text-[18px] font-light tracking-[2px]'>PROPERTIES</p>
                </Link>
                <div className='mb:flex zr:hidden  items-center gap-4 h-full pt-8 pb-3  border-b-4 border-transparent '>
                    <span><FaFacebookF size={16} /></span>
                    <span><FaTwitter size={16} /></span>
                    <span><FaInstagram size={16} /></span>
                    <span><FaLinkedinIn size={16} /></span>
                </div>
            </div>
            <div className={`md:relative absolute top-[100%] left-0 md:flex-row flex-col md:w-auto w-full bg-primaryBlue md:pt-8 pb-5 pt-0  items-center gap-5 pr-10 ${isMenu ? 'flex' : 'md:flex zr:hidden'}`}>
                {navigationLinks.map((item, index) => {
                    if (item.isDropdown) {
                        return (
                            <div
                                key={index}
                                className='relative  px-4 text-xl'
                                onClick={() => setIsDropdown(!isDropdown)}
                                onMouseEnter={() => setIsDropdown(true)}
                            >
                                {item.label}
                                {isDropdown && (
                                    <div
                                        onMouseLeave={() => setIsDropdown(false)}
                                        className='flex flex-col gap-2 absolute top-[150%] py-2 left-0 bg-primaryBlue w-full px-4'
                                    >
                                        {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                            <Link
                                                key={dropIndex}
                                                to={dropdownItem.path}
                                                className={`hover:text-primaryRed ${pathname === dropdownItem.path ? 'text-primaryRed' : 'text-white'} text-xl`}
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className={`px-2 text-xl ${pathname === item.path ? 'text-primaryRed' : 'text-white'}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
            <span className={`pl-2 pr-6 pt-8 pb-2 cursor-pointer zr:inline-flex md:hidden`} onClick={() => setIsMenu(!isMenu)}><IoMenu size={30} /></span>
        </nav>
    )
}

export default Navbar