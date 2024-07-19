import React from 'react'

import underline from '../assets/images/underline.png'

const Footer = () => {
    return (
        <div className='px-40'>
            <div className="top flex justify-center items-center flex-col py-20">
                <p className='text-2xl'>Have any project? 
                Looking for an edge over the competition?</p>
                <h1 className='text-[10vw] relative leading-none text-center font-bold'>Get In Touch
                    <img className='w-full absolute bottom-0 translate-y-[65%] scale-110' src={underline} alt="" />
                </h1>
            </div>

        </div>
    )
}

export default Footer