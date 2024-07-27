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

    return (
        <div ref={skillRef} className='shrink-0 relative w-full md:pt-32 pt-16 md:pb-40 pb-10 h-max md:min-h-screen py-0 flex  lg:px-20 px-8 flex-col'>
            <h1 className='md:text-[7vw] text-[12vw] md:mb-28 mb-8 font-[Chillax] leading-tight md:w-[80%] '>What I Bring to the Table?
            </h1>
            <Trial/>
        </div>
    )
}

export default Skills