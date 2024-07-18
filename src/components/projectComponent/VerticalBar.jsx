import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const VerticalBar = ({id,title,img}) => {
    
    const parentRef = useRef(null)
    const imgRef = useRef(null)

    const [x, setx] = useState(null)
    const [y, sety] = useState(null)
    
    
    
    // const handleMove = (e)=>{
    //     console.log(e.clientY)
    //     setx(e.clientX)
    //     sety(e.clientY)
    // }

    // useGSAP(()=>{
    //     // gsap.to(imgRef.current,{
    //     //     x:x,
    //     //     y:y,
    //     //     // duration:0.5,
    //     //     ease:"elastic.inOut"
    //     // })
    //     imgRef.current.style.left = x+'px'
    //     imgRef.current.style.top = y+'px'
    // },[x,y])



    return (
        <div ref={parentRef} onMouseMove={e=>handleMove(e)} id={id} className="h-screen bg-purple-300/[0] border-r-2 w-56 shrink-0 flex flex-col gap-16 items-center justify-start relative overflow-hidden">
            <motion.div
            ref={imgRef}
            animate={{x:20}}
            className="absolute hidden w-[90%] aspect-square cursor-pointer">
                <img className='w-full h-full object-cover' src={img} alt="" />
            </motion.div>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[10vw]'>{title}</h1>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[10vw]'>{title}</h1>
            <div className="h-[20vh] w-1 shrink-0 bg-[#1a535c]"></div>
            <h1 className='font-[Bonny] h-[33vw] shrink-0 flex items-center text-nowrap  rotate-[270deg] leading-none text-[10vw]'>{title}</h1>
        </div>
        
    )
}

export default VerticalBar