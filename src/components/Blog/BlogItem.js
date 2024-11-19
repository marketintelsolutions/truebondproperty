import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ id }) => {
    return (
        <div className='h-[400px] flex items-end ' style={{ backgroundImage: 'url(/images/aboutside.jpg)', backgroundSize: 'cover' }}>
            <div className='bg-[#00000063] py-10 px-6 text-white flex flex-col gap-5 hover:bg-[#ffffffa0] hover:text-primaryBlue hover:[&>span]:bg-red-500 [&>span]:bg-white'>
                <span className='inline-flex h-1 w-[150px] rounded-full'></span>
                <h1 className='text-[22px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, mollitia</h1>
                <Link to={`/blog/${id}`} className='w-fit font-extralight'>Read more</Link>
            </div>
        </div>
    )
}

export default BlogItem