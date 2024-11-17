import React, { useEffect } from 'react'
import PropertyCard from '../components/Landing/PropertyCard'

const Rent = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section className='pb-20'>
            <div className='' style={{ backgroundImage: `url(/images/bicycle.webp)`, backgroundSize: 'cover' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-lg tracking-[5px] font-thin'>OUR EXCLUSIVE PROPERTIES</p>
                    <h1 className='text-[40px] font-bold'>Rent</h1>
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

export default Rent