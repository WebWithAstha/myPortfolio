import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const VerticalBar = ({id,title,img,left}) => {
    
    const parentRef = useRef(null)
    const imgRef = useRef(null)

    const [x, setx] = useState(null)
    const [y, sety] = useState(null)
    // const [leftv, setleftv] = useState(left)



    return (
        <div ref={parentRef} onMouseMove={e=>handleMove(e)} id={id} style={{
            left:`${left && left}%`
        }} className="h-screen bar sticky z-10 w-56 bg-[#e8e8e3] shrink-0 flex flex-col gap-16 items-center justify-start overflow-hidden">
            <motion.div
            ref={imgRef}
            animate={{x:20}}
            className="absolute hidden w-[90%] aspect-square cursor-pointer">
                <img className='w-full h-full object-cover' src={img} alt="" />
            </motion.div>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[9vw]'>{title}</h1>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[9vw]'>{title}</h1>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[9vw]'>{title}</h1>
        </div>
        
    )
}

export default VerticalBar