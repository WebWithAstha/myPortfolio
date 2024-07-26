import React from 'react'

import img from '../../assets/images/profile2.jpg'
import Content from './Content'

const About = () => {
    return (
        <div className='w-full min-h-screen p-20 '>
        <div className='w-full flex gap-20'>
            <div className="img w-[30vw] relative h-full">
                <div className="img w-full relative h-full overflow-hidden rounded-3xl">
                    <img className='grayscale scale-150 object-top w-full h-full object-cover' src={img} alt="" />
                </div>
                <div className="img w-full h-full overflow-hidden rounded-3xl absolute translate-x-[10%] bottom-0 rotate-6">
                    <img className='scale-150 object-top w-full h-full object-cover' src={img} alt="" />
                </div>
            </div>
            <Content />
        </div>
        <div className="institutes mt-40">

            <div className="justify-center border-b border-t  py-4 rounded mb-2 flex gap-4 items-center">
                <h1 className='text-[1.5vw]'>College </h1>
                <p className='text-[2vw] font-[bespoke] text-purple-300'>Lnct Bhopal</p>
                <p>( 2022 - 2026 )</p>
            </div>
            <div className="justify-center border-b  py-4 rounded mb-2 flex gap-4 items-center">
                <h1 className='text-[1.5vw]'>Schooling </h1>
                <p className='text-[2vw] font-[bespoke] text-purple-300'>St paul sr. sec co-ed school, Bhopal</p>
                <p>( till 2022 )</p>
            </div>
            <div className="justify-center border-b  py-4 rounded mb-2 flex gap-4 items-center">
                <h1 className='text-[1.5vw]'>Skills Incubator </h1>
                <p className='text-[2vw] font-[bespoke] text-purple-300'>Sheriyans Coding School</p>
            </div>
            </div>
        </div>
    )
}

export default About