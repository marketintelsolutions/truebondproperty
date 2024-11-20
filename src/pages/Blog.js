import React, { useEffect } from 'react'
import BlogItem from '../components/Blog/BlogItem'

const Blog = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>
            <div className='' style={{ backgroundImage: `url(/images/blog.jpg)`, backgroundSize: 'cover', backgroundPosition: '10% 40%' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-2xl tracking-[5px] font-thin'>STAY UPDATED</p>
                    <h1 className='text-[60px] font-bold'>BLOG</h1>
                </div>
            </div>
            <div className='w-full max-w-[1150px] mx-auto grid grid-cols-3 justify-center gap-10 py-40'>
                {
                    Array.from({ length: 6 }, (_, index) => (
                        <BlogItem id={index + 1} />
                    ))
                }
            </div>
        </div>
    )
}

export default Blog