import React from 'react'

import underline from '../assets/images/underline.png'

const Footer = () => {
    return (
        <div className='md:px-20 px-8 md:py-8'>
            <h1 className='text-[12vw] md:w-full w-[80%] md:text-[6vw]'>Drop by a hi!!</h1>
          <img className="arrow md:w-[10vw] w-[15vw] h-max mb-8 md:mb-0 invert shrink-0 rotate-45 ml-0 md:ml-[38vw]" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
          <div className="border border-purple-400 rounded-full justify-between md:w-max ml-auto overflow-hidden">
            <input className='outline-none md:w-[30vw] w-[70%] md:px-[2vw] px-4 py-4 md:text-[2vw] text-[5vw] text-purple-400 bg-transparent' placeholder='Tell me something' type="text" />
            <button className='md:text-[2vw] text-[5vw] w-[30%] uppercase md:px-10 py-4 text-center font-bold font-[bespoke] text-black bg-purple-400'>Send</button>
          </div>
          <div className="border rounded-full my-10 md:my-20"></div>

            <div className="top flex mt-10 items-end gap-6">
                
                <h1 className='text-[10vw] relative leading-[.76] text-center font-bold font-[bespoke] w-max'>Reach me</h1>
                <div className="flex flex-row gap-4 md:flex-col ">
                    <h2 className='md:text-[1.8vw] text-[3vw] md:mb-2 uppercase leading-none'>Linkedin</h2>
                    <h2 className='md:text-[1.8vw] text-[3vw] uppercase leading-none'>GitHub</h2>
                </div>
            </div>

        </div>
    )
}

export default Footer