import React from 'react'
import cloud from '../assets/images/gifs/cloud.gif'
import chick from '../assets/images/gifs/chick.gif'
import brush from '../assets/images/gifs/brush.gif'
import hero from '../assets/images/hero.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cloud from './Cloud'


const Hero = () => {

  // gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to('p', {
      rotate: -1,
      scrollTrigger: {
        trigger: 'p',
        scroller: "body",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
      }
    })
  }, [])

  return (
    <div className="content shrink-0 relative w-full overflow-hidden md:pt-32 md:py-20 flex flex-col md:px-40 px-10">
      <h1 className='text-[18vw] whitespace-nowrap uppercase leading-none font-[bonny]'>Astha Lodhi</h1>
      <div className="flex gap-20">
      <div className="mt-6">
      <p className='w-[30vw] text-xl font-normal mb-2'>a 2nd-year B.Tech CSE IoT student and a <span className='font-[bonny] text-2xl mx-2 inline-block font-black'>Mern</span>  stack enthusiast. I've created stunning projects and beautiful websites. I love tackling new challenges and contributing to dynamic, innovative teams.</p>

      <h1 className='relative shadow-inner mt-4 shadow-[#1a535c] px-10 py-3 rounded-full w-max font-black text-2xl'>Get In Touch</h1>
      </div>
      <div className="w-72 h-80 bg-[#acc57c] pt-2 rounded-t-lg rounded-bl-lg">
        <img className='w-full h-full object-cover object-[10px_-50px]' src={hero} alt="" />
        {/* <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1692340973646-f017e0433371?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      </div>
      <div className="self-end w-max ml-auto ">
    <h1 className='ml-auto text-right text-6xl'>Get</h1>
      <h1 className='self-end ml-auto uppercase font-black text-6xl mb-10'>Resume</h1>
      </div>

      </div>
      {/* <h1 className='text-[10vw] leading-none'>Creative</h1> */}
      {/* <h1 className='text-[10vw] leading-none text-nowrap'><span className=' font-[bonny]'>MERN</span> <span>Developer</span></h1> */}
      <p className='md:text-8xl hidden text-6xl font-[Chillax] relative md:w-[80%]'>
        {/* <Cloud/> */}
        <span className='relative z-[9] '>
          I'm a
        </span>
        <span className=' relative inline-block z-[0] ml-4 my-2 md:my-0 font-[Bonny] text-9xl font-semibold'> mern
        </span>
        <span className='relative md:ml-4 '>
          Developer !! turning your vision <br /> into reality.
        </span>
      </p>  
      {/* <button className='self-start mt-4'>Get resume</button> */}

    </div>
  )
}

export default Hero