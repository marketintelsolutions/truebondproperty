import React from 'react'

const Contact = () => {
    return (
        <div className='bg-[#1d2d42] text-white py-20'>
            <div className='w-full mx-auto max-w-[1100px] flex flex-wrap gap-20 md:px-0 px-10 justify-between'>
                <div>
                    <h2 className='text-lg font-thin tracking-[4px]'>
                        FIND YOUR <br /> NEXT HOME</h2>
                    <p className='max-w-[400px] text-base mt-20 leading-[35px] font-extralight tracking-[2px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex incidunt dolor illum facilis, sint suscipit recusandae labore ipsa nulla. Fuga sint repellendus laudantium pariatur commodi nesciunt quaerat, ullam velit. Qui corporis praesentium cupiditate in quos? Dolores expedita reiciendis praesentium ducimus?</p>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-lg font-thin tracking-[4px]'> CONTACT US</h2>
                    <form className='mt-20 flex flex-col gap-10'>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-3 w-full border-b'>
                                <label htmlFor="firstName">First Name *</label>
                                <input name='firstName' type="text" className='bg-transparent  focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-3 w-full border-b'>
                                <label htmlFor="lastName">Last Name *</label>
                                <input name='lastName' type="text" className='bg-transparent  focus:outline-none' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full border-b'>
                            <label htmlFor="email">Email *</label>
                            <input name='email' type="text" className='bg-transparent  focus:outline-none' />
                        </div>
                        <div>
                            <label htmlFor="interest">Interested in</label>
                            <div className='flex flex-wrap w-full gap-8 md:gap-14 lg:gap-24 mt-10'>
                                <div className='flex items-center gap-4'>
                                    <input type="radio" name="interest" id="interest" />
                                    <span htmlFor="interest" className='text-base font-extralight tracking-[2px]'>Buy</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <input type="radio" name="interest" id="interest" />
                                    <span htmlFor="interest" className='text-base font-extralight tracking-[2px]'>Rent</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <input type="radio" name="interest" id="interest" />
                                    <span htmlFor="interest" className='text-base font-extralight tracking-[2px]'>Other</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full border-b'>
                            <label htmlFor="message">Message </label>
                            <textarea name='message' type="text" className='bg-transparent h-[100px] resize-none focus:outline-none' />
                        </div>
                        <button type='button' className='bg-primaryRed px-5 py-3 w-[170px] text-[19px] mt-4 text-white'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact