import React, { useEffect } from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { FcLeft } from 'react-icons/fc'
import { TiArrowLeftThick } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const BlogItem = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className=''>
            <div className='' style={{ backgroundImage: `url(/images/bicycle.webp)`, backgroundSize: 'cover' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-lg tracking-[5px] font-thin'>STAY UPDATED</p>
                    <h1 className='text-[40px] font-bold'>BLOG HEADING</h1>
                </div>
            </div>
            <div className='pt-10 pb-40 w-full max-w-max mx-auto'>
                <Link to={'/blog'} className='w-fit flex gap-2 py-2 px-4 bg-primaryBlue text-white rounded-[6px] items-center'> <span><TiArrowLeftThick color='white' size={20} /></span>  Back</Link>

                <div>
                    <h1 className='text-[45px] max-w-[900px] mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id omnis quia repudiandae necessitatibus assumenda </h1>

                    <img src="/images/aboutside.jpg" alt="chair" className='w-full mt-10 max-h-[600px] object-cover' />

                    <p className='text-xl font-light tracking-[2px] text-justify leading-[40px] mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio iusto, molestias delectus nam quia maiores veniam harum obcaecati! Ex nisi odit voluptatum velit accusantium quae labore rem dolore itaque amet, ut est reprehenderit aperiam.

                        <br /><br />
                        Eveniet, consectetur, quod laudantium velit impedit rem magni veritatis dolorum atque, iste ea! Dolore voluptates unde porro molestiae ducimus et ex neque magni voluptatem tempora dicta quaerat eaque quibusdam itaque impedit veniam labore, reprehenderit nulla. Minus architecto eaque excepturi dolore aperiam voluptatem provident libero qui voluptas. Tempore incidunt libero impedit perferendis
                        <br /><br /> sed exercitationem nobis eaque assumenda pariatur recusandae. Debitis nisi error magnam necessitatibus laboriosam fugiat?</p>
                </div>
            </div>
        </section>
    )
}

export default BlogItem