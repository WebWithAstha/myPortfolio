import React from 'react'

import img from '../../assets/images/profile2.jpg'
import Content from './Content'
import Education from './Education'

const About = () => {
    return (
        <div className='w-full min-h-screen md:p-20 p-0 px-8 '>
        <div className='w-full flex md:flex-row flex-col md:items-center gap-6 md:gap-20'>
            <div className="img md:w-[30vw] w-[70vw] relative h-full">
                <div className="img w-full relative h-full overflow-hidden rounded-3xl">
                    <img className='grayscale scale-150 object-top w-full h-full object-cover' src={img} alt="" />
                </div>
                <div className="img w-full h-full overflow-hidden rounded-3xl absolute translate-x-[10%] bottom-0 rotate-6">
                    <img className='scale-150 object-top w-full h-full object-cover' src={img} alt="" />
                </div>
            </div>
            <Content />
        </div>
        </div>
    )
}

export default About