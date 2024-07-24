import React, { useRef } from 'react'
import knife from '../assets/images/gifs/knife.gif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { color, motion } from 'framer-motion'
import Trial from './projectComponent/Trial'

// motion

const visible ={
    scale:2,
    color:"red"
}


const Skills = () => {
    const skillRef = useRef(null)

    // useGSAP(() => {
    //     gsap.to("body", {
    //         backgroundColor: "#d9f99d",
    //         scrollTrigger: {
    //             scroller: "body",
    //             trigger: skillRef.current,
    //             start: "top 1%",
    //             end: "top 0%",
    //         }

    //     })
    // })



    return (
        <div ref={skillRef} className='shrink-0 bg-[#e8e8e3] relative w-full md:pt-32 pt-20 pb-40 min-h-screen py-0 flex flex-col'>
            <h1 className='md:text-9xl text-6xl md:mb-32 mb-10 font-[Chillax] lg:px-40 px-10 '>What
                <span className='relative z-[0] mx-2 font-[Bonny]'> skills</span> <br /> do I bring to the table?
                <img className='md:h-24 translate-y-2 h-16 -scale-x-100 inline-block mix-blend-darken' src={knife} alt="" />
            </h1>
            <Trial/>
        </div>
    )
}

export default Skills