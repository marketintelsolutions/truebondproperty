import React from 'react'
import ServiceItem from '../components/Services/ServiceItem'
import { services } from '../utils/data'

const Services = () => {
    return (
        <section className=''>
            <div className='' style={{ backgroundImage: `url(/images/services.jpg)`, backgroundSize: 'cover', backgroundPosition: '10% 50%' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-2xl tracking-[5px] font-thin'>KNOW OUR SERVICES</p>
                    <h1 className='text-[60px] font-bold'>SERVICES</h1>
                </div>
            </div>

            <div className='w-full max-w-max mx-auto py-40 flex flex-col gap-40'>
                {
                    services.map((item, index) => <ServiceItem key={index} index={index} {...item} />)
                }
            </div>
        </section>
    )
}

export default Services