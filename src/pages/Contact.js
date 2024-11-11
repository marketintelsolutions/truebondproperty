import React from 'react'

const Contact = () => {
    return (
        <section>
            <div className='' style={{ backgroundImage: `url(/images/bicycle.webp)`, backgroundSize: 'cover' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-lg tracking-[5px] font-thin'>BE IN TOUCH</p>
                    <h1 className='text-[40px] font-bold'>Contact</h1>
                </div>
            </div>
            <div className='flex justify-between w-full max-w-[1000px] mx-auto py-40 text-[#2b2b2b]'>
                <h1 className='text-[26px] font-bold'>Our Office</h1>
                <p className='text-base font-roboto'>500 Terry Francine Street
                    <br />
                    San Francisco, CA 94158</p>
                <p className='text-base font-roboto'>
                    Tel: 123-456-7890
                    <br />
                    Fax: 123-456-7890
                </p>
                <p className='text-base font-roboto'>info@mysite.com</p>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5291.949439359551!2d3.413942828719971!3d6.429309943435859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acdf16fd5d5%3A0x94a92add6d024f09!2sLSDPC%20Flats%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1731140942595!5m2!1sen!2sng" height="450" style={{ border: 0, loading: "lazy", width: '100%' }}></iframe>
            </div>
            <div className='flex flex-col justify-center items-center py-32 gap-10'>
                <h2 className='text-lg font-extralight tracking-[5px]'>GET IN TOUCH</h2>
                <p className='max-w-[600px] text-center text-base font-roboto leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe, maxime enim, fuga corporis obcaecati itaque mollitia est vitae debitis id atque sunt! Veniam doloribus officiis ea beatae, dolor ex.</p>
            </div>
        </section>
    )
}

export default Contact