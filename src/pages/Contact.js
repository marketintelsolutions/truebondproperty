import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section>
            <div className='' style={{ backgroundImage: `url(/images/contact.jpg)`, backgroundSize: 'cover', backgroundPosition: '10% 40%' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-2xl tracking-[5px] font-thin'>BE IN TOUCH</p>
                    <h1 className='text-[60px] font-bold'>Contact</h1>
                </div>
            </div>
            <div className='flex flex-wrap lg:px-0 px-6 gap-10 justify-between w-full max-w-[1000px] mx-auto py-40 text-[#2b2b2b]'>
                <h1 className='text-[26px] font-bold'>Our Office</h1>
                <p className='text-base font-roboto'>Plot 22, Akiogun New Market Road, <br />
                    Oniru Victoria Island, Lagos</p>
                <p className='text-base font-roboto'>
                    Tel: 09062979782
                    <br />
                    Fax: 09062979786
                </p>
                <p className='text-base font-roboto'> info@truebond.com</p>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7489422254266!2d3.452132680637935!3d6.426292876971863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf508f117bcad%3A0xb4bb382611a28ced!2s22%20Akiogun%20Rd%2C%20Maroko%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732228086997!5m2!1sen!2sng" width="600" height="450" style={{ border: 0, loading: "lazy", width: '100%' }}></iframe>
            </div>
            <div className='flex flex-col justify-center items-center py-32 gap-10'>
                <h2 className='text-lg font-extralight tracking-[5px]'>GET IN TOUCH</h2>
                <p className='max-w-[600px] text-center text-base font-roboto leading-[30px]'>Founded on the principles of professionalism, integrity, and transparency, we pride ourselves on delivering tailored management services that cater to the unique needs of property owners and tenants.</p>
            </div>
        </section>
    )
}

export default Contact