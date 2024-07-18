import React from 'react'
import cloud from '../assets/images/gifs/cloud.gif'
import chick from '../assets/images/gifs/chick.gif'
import brush from '../assets/images/gifs/brush.gif'
import wind from '../assets/images/gifs/4.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Hero = () => {

  // gsap.registerPlugin(ScrollTrigger)
  
useGSAP(()=>{
  gsap.to('p',{
    rotate:-1,
    scrollTrigger:{
      trigger:'p',
      scroller:"body",
      start:"top 20%",
      end:"top 0%",
      scrub:true,
      // markers:true,
      
    }
  })
},[])

  return (
    <div className="content shrink-0 relative w-full overflow-hidden  flex flex-col md:px-40 px-10 justify-center">
        <p className='md:text-8xl text-6xl font-[Chillax] relative md:w-[80%]'>
        <img className='md:w-[35rem] w-32 absolute md:left-[78%] left-[50%] md:top-0 bottom-0 translate-y-[40%] md:-translate-y-[20%] z-0 mix-blend-darken' src={cloud} alt="" />
          <span className='relative z-[9] '>
          I'm a 
          </span>
          <span className=' relative inline-block z-[0] ml-4 my-2 md:my-0 font-[Bonny] text-9xl font-semibold'> mern
          {/* <img className='absolute w-96 z-[-1] left-0  top-0 translate-y-[70%]' src={brush} alt="" /> */}
          </span> 
          <span className='relative md:ml-4 '>
           Developer !! turning your vision into <br /> reality.
          </span>
        </p>
        <button className='self-start mt-4'>Get resume</button>
        
      </div>
  )
}

export default Hero