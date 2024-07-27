import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../partials/Button'


const Btn = ({ btn }) => {
    return (
        <button className='flex group relative w-max items-center gap-4 overflow-hidden border justify-center rounded-full md:px-[2vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] border-purple-400 md:text-[1.4vw]'>{btn}
            <div className="btn-hover-content overflow-hidden absolute group-hover:top-0 bg-purple-400 z-[9] font-black transition-all duration-150 w-full h-full flex whitespace-nowrap top-full">
                <div className="btn-hover-text flex shrink-0 gap-4 justify-center rounded-full md:px-[1vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] md:text-[1.4vw]">
                    <h1>{btn}</h1>
                    <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
                </div>
                <div className="btn-hover-text flex shrink-0 gap-4 justify-center rounded-full md:px-[1vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] md:text-[1.4vw]">
                    <h1>{btn}</h1>
                    <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
                </div>
            </div>
            <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
        </button>
    )
}

const Content = () => {

    useGSAP(() => {
        gsap.to(".btn-hover-text", {
            x: "-100%",
            ease: "linear",
            repeat: -1,
            duration: 4
        })
    })




    return (
        <div className='md:flex-1 w-full md:pl-32 self-center md:mt-0 mt-6'>
            <img className="arrow md:w-[7vw] w-[15vw] md:block hidden h-max invert md:my-0 my-4 relative rotate-90 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 shrink-0 md:rotate-45 md:mb-10" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />

            <p className='md:text-[2vw] w-full text-[4.5vw] font-normal leading-[8vw] md:leading-[4vw]'>a <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>2nd-year</span> B.Tech CSE IoT student and a <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>Mern</span> stack enthusiast. I've created <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>stunning</span> projects and beautiful websites. I love tackling new <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>challenges</span> and contributing to dynamic, innovative <span className='md:text-[2.4vw] text-purple-200 cursor-pointer'>teams</span> .</p>
            <div className="flex w-ful md:items-center gap-4 md:gap-[2vw] mt-8 md:mt-8 md:flex-row flex-col">
                <Button title={"Know more"} />
                <Button title={"Contact"} />
            </div>
        </div>
    )
}

export default Content