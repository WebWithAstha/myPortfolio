import React, { useRef } from 'react'
import hero from '../assets/images/hero.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cloud from './Cloud'
import Hover from './animations/Hover'


const Hero = () => {

  const heroParentRef = useRef(null)

  // useGSAP(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       scroller: "body",
  //       trigger: heroParentRef.current,
  //       start: "top 0%",
  //       end: "top -100%",
  //       // snap: true,
  //       scrub: 1,
  //       markers: true
  //     }
  //   })
  //   tl
  //     // .to(heroParentRef.current,{
  //     //   y:"50%"
  //     // })
  //     // .to(heroParentRef.current,{
  //     //   y:"100%"
  //     // },"tog")
  //     .to("#heroText h1:nth-child(1),.desc p,.move-dwn", {
  //       scale: 0.7,
  //       opacity: 0,
  //       duration: 1,
  //       y: -200,
  //       rotate: -10,
  //       ease: 'power3.inOut'
  //     }, "tog")
  //   // .to(heroParentRef.current,{
  //   //   // y:"+=200%"
  //   // })
  // })


  return (
    <div ref={heroParentRef} className="content shrink-0 pt-20 relative w-full md:h-screen overflow-hidden md:pt-32 md:py-20 flex flex-col md:px-40 px-8">
      <div className="overflow-hidden shrink-0">
        <h1 className='move-dwn text-[17vw] mb-4 leading-[.8] md:-mb-4 whitespace-nowrap font-black uppercase font-[bonny]'>Astha Lodhi</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-8 md:gap-20 md:mt-16">
        <div className="flex justify-between gap-4 flex-col">
          <div className="desc">
            <div className="h-[2rem] overflow-hidden">
              <p className='md:w-[30vw] text-xl md:text-2xl font-normal'>a 2nd-year B.Tech CSE IoT student and a</p>
            </div>
            <div className="h-[2rem] overflow-hidden">
              <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'><span className='font-[bonny] text-2xl inline-block font-black'>Mern</span>  stack enthusiast. I've created stunning</p>
            </div>
            <div className="h-[2rem] overflow-hidden">
              <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>projects and beautiful websites. I love</p>
            </div>
            <div className="h-[2rem] overflow-hidden">
              <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>tackling new challenges and contributing</p>
            </div>
            <div className="h-[2rem] overflow-hidden">
              <p className='md:w-[30vw] text-xl md:text-2xl font-normal overflow-hidden'>to dynamic, innovative teams.</p>
            </div>
          </div>
          <div className="h-14 overflow-hidden">
            <h1 id='getBtn' className='move-dwn relative shadow-inner md:mt-6 shadow-[#1a535c] bg-[#2c1c13] text-white px-10 py-3 rounded-full text-center md:w-max font-bold text-2xl'>Get In Touch</h1>
          </div>
        </div>
        <div className="md:w-72 h-72 overflow-hidden rounded-t-lg rounded-bl-lg">
          <img id='heroImg' className='move-dwn w-full h-full object-cover' src={hero} alt="" />
        </div>
        <div className="self-end w-max ml-auto ">
          <div className="h-12 overflow-hidden">
            <h1 className='move-dwn ml-auto -mt-1.5 md:mt-0 text-right text-6xl'>Get</h1>
          </div>
          <div className="h-16 overflow-hidden">
            <h1 className='move-dwn self-end ml-auto uppercase font-black text-6xl'>Resume</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero