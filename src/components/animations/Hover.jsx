import { useGSAP } from '@gsap/react'
import { motion, stagger } from 'framer-motion'
import gsap from 'gsap'
import React from 'react'




const Hover = () => {

 

  const name="Astha Lodhi"

  motion
  return (
      <motion.div
      id='heroText'
        initial="initial"
        whileHover="hovered"
        className="div relative overflow-hidden cursor-pointer">
        <h1
         
          className='text-[17vw] leading-[.8] -mb-4 whitespace-nowrap font-black uppercase font-[bonny]'>
          {name.split('').map((l,i)=>(
            <motion.span 
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              delay:.02*i,
              duration:.2
            }}
            className='inline-block font-[bonny]' key={i}>{l}</motion.span >
          ))}
        </h1>
        <h1
          className='absolute top-0 text-[17vw] leading-[.8] -mb-4 whitespace-nowrap font-black uppercase font-[bonny]'>
          {name.split('').map((l,i)=>(
            <motion.span 
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              delay:.02*i,
              duration:.2
            }}
            className='inline-block font-[bonny]' key={i}>{l}</motion.span >
          ))}
        </h1>
      </motion.div>
  )
}

export default Hover