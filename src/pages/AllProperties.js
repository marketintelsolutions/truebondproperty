import React, { useEffect } from 'react'
import PropertyCard from '../components/Landing/PropertyCard'

const AllProperties = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='pb-20'>
            <div className='' style={{ backgroundImage: `url(/images/house2.jpg)`, backgroundSize: 'cover', backgroundPosition: '10% 50%' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-2xl tracking-[5px] font-thin'>OUR EXCLUSIVE PROPERTIES</p>
                    <h1 className='text-[60px] font-bold'>Properties</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 w-full max-w-max mx-auto mt-20'>
                {

                    Array.from({ length: 9 }, (_, index) => <PropertyCard key={index} />)
                }
            </div>
        </section>
    )
}

export default AllProperties