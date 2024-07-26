import React, { useRef } from 'react'
import hero from '../../assets/images/profile.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hover from '../animations/Hover'
import HeroName from './HeroName'


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
      <HeroName />
      <div className="flex md:flex-row flex-col gap-8 md:gap-20 md:mt-16">
        <div className="flex justify-center items-center gap-20 w-full">
          <div className="self-end w-max">
            <div className="h-14 overflow-hidden">
              <h1 className='move-dwn ml-auto -mt-1.5 font-[bespoke] md:mt-0 text-right text-6xl'>Get</h1>
            </div>
            <div className="h-16 overflow-hidden">
              <h1 className='move-dwn self-end ml-auto uppercase font-black text-6xl'>Resume</h1>
            </div>
          </div>
          <img className="arrow w-[10vw] h-max invert -scale-x-100 shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
          <div className="md:w-72 h-72 shrink-0 overflow-hidden rounded-t-lg rounded-bl-lg">
            <img id='heroImg' className='move-dwn w-full absolute h-[50vh] object-[0_27%] object-cover grayscale' src={hero} alt="" />
            <img id='heroImg' className='move-dwn w-full h-full object-cover relative' src={hero} alt="" />
          </div>
          <div className="self-end w-max hidden">
            <img className="arrow w-[10vw] h-max invert shrink-0 rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
            <div className="h-14 overflow-hidden">
              <h1 className='move-dwn ml-auto -mt-1.5 font-[bespoke] md:mt-0 text-right text-6xl'>Say</h1>
            </div>
            <div className="h-16 overflow-hidden">
              <h1 className='move-dwn self-end ml-auto uppercase font-black text-6xl'>Namaste</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero