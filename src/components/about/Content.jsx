import React from 'react'

const Content = () => {
    return (
        <div className='flex-1 md:pl-32 self-center md:mt-0 mt-4'>

            <img className="arrow md:w-[7vw] w-[15vw] md:block hidden h-max invert md:my-0 my-4 relative rotate-90 left-1/2 -translate-x-1/2 md:-translate-x-0 shrink-0 md:rotate-45 md:mb-10" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />


            <p className='md:text-[2vw] text-[6vw] font-normal leading-[8vw] md:leading-[4vw]'>a <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>2nd-year</span> B.Tech CSE IoT student and a <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>Mern</span> stack enthusiast. I've created <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>stunning</span> projects and beautiful websites. I love tackling new <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>challenges</span> and contributing to dynamic, innovative <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>teams</span> .</p>
            <div className="flex w-ful md:items-center gap-4 md:gap-[2vw] mt-6 md:mt-8 md:flex-row flex-col">
                <button className='flex md:mx-20 items-center gap-4 border justify-center rounded-full md:px-[2vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] border-purple-400 md:text-[1.4vw]'>Know more
                    <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
                </button>
                <button className='flex md:mx-20 items-center gap-4 border justify-center rounded-full md:px-[2vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] border-purple-400 md:text-[1.4vw]'>Contact
                    <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
                </button>
            </div>
        </div>
    )
}

export default Content