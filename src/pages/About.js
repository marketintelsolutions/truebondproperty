import React from 'react'
import TeamMember from '../components/About/TeamMember'

const About = () => {
    return (
        <section>
            <div className='' style={{ backgroundImage: `url(/images/bicycle.webp)`, backgroundSize: 'cover' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-lg tracking-[5px] font-thin'>LEARN ABOUT US</p>
                    <h1 className='text-[40px] font-bold'>ABOUT</h1>
                </div>
            </div>
            <div className='flex gap-20 justify-center items-center pt-20 pb-40 flex-wrap max-w-[1300px] mx-auto'>
                {
                    Array.from({ length: 6 }, (_, index) => (
                        <TeamMember key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default About