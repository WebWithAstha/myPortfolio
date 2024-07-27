import React, { useRef } from 'react'
import hero from '../../assets/images/profile.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hover from '../animations/Hover'
import HeroName from './HeroName'


const Hero = () => {

  const heroParentRef = useRef(null)

  return (
    <div ref={heroParentRef} className="content shrink-0 pt-20 relative w-full md:min-h-screen overflow-hidden md:pt-32 md:py-20 flex flex-col md:px-20 px-8">
      <HeroName />
        <h1 className='text-[4vw] md:mt-10'>Hola friend.</h1>
      <div className="flex justify-center md:flex-row flex-col md:items-center gap-2 mb-2 md:mb-0 w-full md:mt-0">
        <div className="md:self-end md:w-[40%]">
        <img className="arrow md:w-[10vw] w-[30vw] ml-auto md:mr-[10vw] h-max invert -scale-x-100 shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
          <div className=" flex flex-col md:mb-0 mb-4 md:items-end justify-start w-max">
              <h1 className='move-dwn ml-auto md:mr-0  font-[bespoke] md:mt-0 md:text-right md:text-6xl'>Get</h1>
              <a href="https://drive.google.com/file/d/1rj3PjNjo3ZqeR66l6XvzMydmoz7uAfTQ/view?usp=sharing" download="Astha_Lodhi_Resume">
              <h1 className='move-dwn md:self-end md:ml-auto uppercase font-black text-5xl md:text-6xl'>Resume</h1>
              </a>
          </div>
        </div>
        <div className="md:w-72 md:block hidden w-full h-[40vh] shrink-0 overflow-hidden rounded-t-lg rounded-bl-lg">
          <img id='heroImg' className='move-dwn w-full absolute h-[50vh] object-[0_27%] object-cover grayscale' src={hero} alt="" />
          <img id='heroImg' className='move-dwn w-full h-full object-cover relative' src={hero} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero