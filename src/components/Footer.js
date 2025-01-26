import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-primaryBlue pt-20 pb-0 text-white'>
            <div className='w-full max-w-max mx-auto flex flex-wrap gap-10 px-6 lg:px-0 justify-between'>
                <div className='h-[200px] flex flex-col items-center  justify-center'>
                    <div className='flex justify-center  items-center gap-3 '>
                        <h1 className='text-[39px] text-primaryRed'>Truebond</h1>
                        <p className='text-[34px] font-light tracking-[2px]'>PROPERTIES</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap gap-10 md:gap-14 lg:gap-24 w-[65%]'>
                    <div className='flex flex-col gap-5'>
                        <h3 className=' text-base  w-max font-bold'>USEFUL LINKS</h3>
                        <Link to={'/'} className='text-base  font-roboto'>Home</Link>
                        <Link to={'/about-us'} className='text-base  font-roboto'>About Us</Link>
                        <Link to={'/all-properties'} className='text-base  font-roboto'>Properties</Link>
                        <p className='text-base  font-roboto'>Blog</p>
                        <Link to={'/contact'} className='text-base  font-roboto'>Contact</Link>
                    </div>
                    <div className='flex flex-col  gap-5'>
                        <h3 className=' text-base  font-bold'>SERVICES</h3>
                        <Link to={'/services'} className='text-base  font-roboto'>Residential Property Management</Link>
                        <Link to={'/services'} className='text-base  font-roboto'>Commercial Real Estate Management</Link>
                        <Link to={'/services'} className='text-base  font-roboto'>Property Maintenance & Tenant Relations</Link>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h3 className=' text-base  mb-5 font-bold'>CONTACT US</h3>
                        <p className='text-base font-roboto'>Lot 22, Akiogun New Market Road,

                            <br />
                            Oniru Victoria Island, Lagos
                            <br />
                            info@mysite.com</p>
                        <div className='flex items-center text-primaryRed gap-4 h-full pt-6 pb-2  border-b-4 border-transparent '>
                            <span><FaFacebookF size={16} /></span>
                            <span><FaTwitter size={16} /></span>
                            <span><FaInstagram size={16} /></span>
                            <span><FaLinkedinIn size={16} /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 border-t mt-10 w-full max-w-max mx-auto'>
                <p className='text-sm font-extralight px-6'>
                    © {new Date().getFullYear()} Truebond Properties
                </p>
            </div>

        </footer>
    )
}

export default Footer