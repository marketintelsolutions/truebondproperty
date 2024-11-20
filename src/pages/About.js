import React, { useEffect } from 'react'
import TeamMember from '../components/About/TeamMember'

const About = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <section>
            <div className='' style={{ backgroundImage: `url(/images/about.jpg)`, backgroundSize: 'cover', backgroundPosition: '10% 50%' }}>
                <div className='h-full w-full flex flex-col justify-center items-center gap-5 py-20 bg-[#00000051] text-white'>
                    <p className='text-2xl tracking-[5px] font-thin'>LEARN ABOUT US</p>
                    <h1 className='text-[60px] font-bold'>ABOUT</h1>
                </div>
            </div>
            <div className='w-full max-w-max mx-auto py-20'>
                <p className='text-xl leading-[40px] tracking-[1px] text-justify'>
                    Truebond Property and Leisure is committed to creating world-class properties and unforgettable leisure experiences. We blend quality design with strategic locations to develop properties that offer both lifestyle value and financial growth. With a professional team and a customer-first approach, we strive to meet the evolving needs of property buyers, investors, and leisure enthusiasts alike.
                </p>
            </div>
            <div className="border-t-2  border-gray-200 pt-10">
                <div className=" w-full max-w-max mx-auto px-0 border-l-[1px] grid grid-cols-2 border-gray-200">
                    <div className="flex flex-col gap-8" data-aos="fade-left">
                        <h2 className="pl-20 tracking-wide text-primaryRed font-bold text-xl">OUR MISSION</h2>

                        <h1 className="pl-20 border-l-2 border-primaryRed text-primaryBlue tracking-wider text-2xl max-w-[500px]">
                            Redefining property investment and leisure with quality, integrity, and innovation.
                        </h1>

                        <ul className="pl-20 flex flex-col gap-4 font-thin text-black tracking-[2px]">
                            <li>- Real estate development</li>
                            <li>- Property management</li>
                            <li>
                                - Bespoke leisure solutions
                            </li>
                        </ul>
                        <h2 className="pl-20 tracking-wide mt-10 text-primaryRed font-bold text-xl">OUR VISION</h2>
                        <h1 className="pl-20 border-l-2 border-primaryRed text-primaryBlue tracking-wider text-2xl max-w-[500px]">
                            To be a leading provider in high-value real estate and leisure solutions across key markets.
                        </h1>
                        <h2 className="pl-20 tracking-wide mt-10 text-primaryRed font-bold text-xl">OUR CORE VALUES</h2>

                        <ul className="pl-20 border-l-2 border-primaryRed flex flex-col gap-4 font-light text-black tracking-[2px]">
                            <li>- Integrity</li>
                            <li>- Quality</li>
                            <li>- Innovation</li>
                            <li>
                                - Customer Focus
                            </li>
                        </ul>

                    </div>
                    <div className="flex justify-end pr-20" data-aos="fade-right">
                        <img
                            src="/images/aboutside.jpg"
                            alt="about"
                            className="rounded-[15px] h-[600px] w-[500px]"
                        />
                    </div>
                </div>
            </div>

            <h1 className='text-[40px] font-bold text-center mt-40'>MEET OUR TEAM</h1>

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