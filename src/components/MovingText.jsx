import { useGSAP } from '@gsap/react'
import { useScroll } from 'framer-motion'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'





const MovingText = () => {


    const textParentRef = useRef(null)

    const [currentScroll, setcurrentScroll] = useState(0)
    const [scrollDirection, setscrollDirection] = useState(0) 

    window.addEventListener("scroll",(dets)=>{
        if(currentScroll>scrollY){
            setscrollDirection(1)
        }else{
            setscrollDirection(0)
        }
        setcurrentScroll(scrollY)
    })

   

    useGSAP(()=>{
        gsap.to('#who-text h1',{
            x:`${scrollDirection === 0 ? "-100%":"100%"}`,
            ease:"linear",
            duration:4,
            repeat:-1
        })
    },[scrollDirection])



  return (
    <div id='who-text' ref={textParentRef} className='flex overflow-hidden justify-center my-8 md:my-20'>
        <h1 className='md:text-[6vw] text-[12vw] -translate-x-full whitespace-nowrap px-3 md:px-6 text-center py-4 shrink-0 w-[calc(100% / 5)]'>who i am?</h1>
        <h1 className='md:text-[6vw] text-[12vw] -translate-x-full whitespace-nowrap px-3 md:px-6 text-center py-4 shrink-0 w-[calc(100% / 5)]'>who i am?</h1>
        <h1 className='md:text-[6vw] text-[12vw] -translate-x-full whitespace-nowrap px-3 md:px-6 text-center py-4 shrink-0 w-[calc(100% / 5)]'>who i am?</h1>
        <h1 className='md:text-[6vw] text-[12vw] -translate-x-full whitespace-nowrap px-3 md:px-6 text-center py-4 shrink-0 w-[calc(100% / 5)]'>who i am?</h1>
        <h1 className='md:text-[6vw] text-[12vw] -translate-x-full whitespace-nowrap px-3 md:px-6 text-center py-4 shrink-0 w-[calc(100% / 5)]'>who i am?</h1>
    </div>
  )
}

export default MovingText