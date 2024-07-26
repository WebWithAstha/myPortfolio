import React from 'react'

import underline from '../assets/images/underline.png'

const Footer = () => {
    return (
        <div className='px-20 py-8'>
            <h1 className='text-[6vw]'>Drop by a hi!!</h1>
          <img className="arrow w-[10vw] h-max invert shrink-0 rotate-45 ml-[38vw]" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
          <div className="border border-purple-400 rounded-full w-max ml-auto overflow-hidden">
            <input className='outline-none w-[30vw] px-[2vw] py-4 text-[2vw] text-purple-400 bg-transparent' placeholder='Tell me something' type="text" />
            <button className='text-[2vw] uppercase px-10 py-4 text-center font-bold font-[bespoke] text-black bg-purple-400'>Send</button>
          </div>
          <div className="border rounded-full my-20"></div>

            <div className="top flex mt-10 items-end gap-6">
                
                <h1 className='text-[10vw] relative leading-[.76] text-center font-bold font-[bespoke] w-max'>Reach me</h1>
                <div className="">
                    <h2 className='text-[1.8vw] mb-2 uppercase leading-none'>Linkedin</h2>
                    <h2 className='text-[1.8vw] uppercase leading-none'>GitHub</h2>
                </div>
            </div>

        </div>
    )
}

export default Footer