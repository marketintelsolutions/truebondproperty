import React, { useState } from 'react';
import { BsSquare } from 'react-icons/bs'
import { LuBath, LuBedDouble } from 'react-icons/lu'
import { RiMenu3Fill } from 'react-icons/ri'
import GalleryModal from '../GalleryModal';

const PropertyCard = ({ property }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample property data - replace with actual data
    const propertyData = property || {
        images: [
            '/images/house.webp',
            '/images/house.webp',
            '/images/house.webp',
            '/images/house.webp'
        ],
        address: '17082 Perry Street',
        location: 'San Francisco, CA, USA',
        price: '$850,000',
        beds: 4,
        baths: 2,
        levels: 3,
        sqft: 1234,
        type: 'BUY'
    };

    return (
        <>
            <div
                className='shadow-[0_4px_20px_2px_rgba(43,43,43,0.05)] w-full mx-auto max-w-[348px] cursor-pointer transform transition-transform hover:scale-[1.02]'
                onClick={() => setIsModalOpen(true)}
            >
                <div className='relative'>
                    <img
                        src={propertyData.images[0]}
                        className='w-full h-[208px] object-cover'
                        alt={propertyData.address}
                    />
                    <span className='inline-flex px-8 py-1 bg-primaryRed tracking-[3px] absolute bottom-0 left-0 text-white'>
                        {propertyData.type}
                    </span>
                </div>
                <div className='bg-white px-10 py-10 flex flex-col gap-3'>
                    <h2 className='text-[28px]'>{propertyData.address}</h2>
                    <p className='text-[18px] font-thin'>{propertyData.location}</p>
                    <p className='text-[20px] font-light'>{propertyData.price}</p>
                    <div className='mt-10 pt-8 border-t border-[rgba(43,43,43,0.1)] flex w-full justify-between'>
                        <div className='flex flex-col gap-2'>
                            <span><LuBedDouble color='#000001' size={22} /></span>
                            <p className='text-sm font-extralight tracking-[1px]'>Beds</p>
                            <h3 className='text-lg'>{propertyData.beds}</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span><LuBath color='#000001' size={22} /></span>
                            <p className='text-sm font-extralight tracking-[1px]'>Baths</p>
                            <h3 className='text-lg'>{propertyData.baths}</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span><RiMenu3Fill color='#000001' size={22} /></span>
                            <p className='text-sm font-extralight tracking-[1px]'>Levels</p>
                            <h3 className='text-lg'>{propertyData.levels}</h3>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span><BsSquare color='#000001' size={22} /></span>
                            <p className='text-sm font-extralight tracking-[1px]'>Sqft</p>
                            <h3 className='text-lg'>{propertyData.sqft}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <GalleryModal
                images={propertyData.images}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default PropertyCard