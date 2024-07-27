import { motion } from 'framer-motion'
import React from 'react'

const Button = ({title}) => {
  return (
    <motion.button
    whileHover="hovered"
    initial="initial"
    className='md:py-6 py-4 w-full pt-4 border flex justify-center  rounded-full relative overflow-hidden'>
    <button className='overflow-hidden md:h-[1.4vw] text-center uppercase font-medium relative'>
        <h1
            
            className='flex md:px-[2vw] px-[6vw] leading-[1]  text-center text-[4vw] border-purple-400 md:text-[1.4vw]'>
            {title.split('').map((l,i)=>(
                <motion.span
                variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                }}
                transition={{
                    // delay: .009*i,
                    duration:.1,
                    // staggerChildren: .5,
                    stagger:1,
                }}
                className='inline-block' key={i}>{l}</motion.span>
            ))}
        </h1>


        <h1
          
            className='flex absolute top-0 left-0 md:px-[2vw] px-[6vw] leading-[1] text-[4vw] border-purple-400 md:text-[1.4vw]'>
            {title.split('').map((l,i)=>(
                <motion.span
                variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                }}
                transition ={{
                    // delay: .009*i,
                    duration:.1,
                    // staggerChildren: .5,
                    stagger:1,
                    // dura
                }}
                className='inline-block' key={i}>{l}</motion.span>
            ))}
        </h1>
    </button>
    </motion.button >

  )
}

export default Button