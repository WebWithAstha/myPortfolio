import React, { useRef } from 'react'
import knife from '../../assets/images/gifs/knife.gif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { color, motion } from 'framer-motion'
import Trial from './Trial'

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
        <div ref={skillRef} className='shrink-0 relative w-full md:pt-32 pt-20 pb-40 min-h-screen py-0 flex flex-col'>
            <h1 className='md:text-[7vw] text-6xl md:mb-32 mb-10 font-[Chillax] lg:px-20 px-10 '>What I Bring to the Table?
            </h1>
            <Trial/>
        </div>
    )
}

export default Skills