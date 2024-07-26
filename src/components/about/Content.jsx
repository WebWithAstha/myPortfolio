import React from 'react'

const Content = () => {
    return (
        <div className='flex-1 pl-32 self-center'>

          <img className="arrow w-[7vw] h-max invert  shrink-0 rotate-45 mb-10" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />


            <p className='text-[2vw] font-normal leading-[4vw] text-center'>a <span className='text-[3vw] text-purple-400 cursor-pointer'>2nd-year</span> B.Tech CSE IoT student and a <span className='text-[3vw] text-purple-400 cursor-pointer'>Mern</span> stack enthusiast. I've created <span className='text-[3vw] text-purple-400 cursor-pointer'>stunning</span> projects and beautiful websites. I love tackling new <span className='text-[3vw] text-purple-400 cursor-pointer'>challenges</span> and contributing to dynamic, innovative <span className='text-[3vw] text-purple-400 cursor-pointer'>teams</span> .</p>
            
            
            <div className="desc hidden">
                <div className="h-[2rem] overflow-hidden ">
                    <p className='md:w-[30vw] text-xl md:text-2xl font-normal'>a 2nd-year B.Tech CSE IoT student and a</p>
                </div>
                <div className="h-[2rem] overflow-hidden">
                    <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'><span className='font-[bonny] text-2xl inline-block font-black'>Mern</span>  stack enthusiast. I've created stunning</p>
                </div>
                <div className="h-[2rem] overflow-hidden">
                    <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>projects and beautiful websites. I love</p>
                </div>
                <div className="h-[2rem] overflow-hidden">
                    <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>tackling new challenges and contributing</p>
                </div>
                <div className="h-[2rem] overflow-hidden">
                    <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>to dynamic, innovative teams.</p>
                </div>
            </div>
        </div>
    )
}

export default Content