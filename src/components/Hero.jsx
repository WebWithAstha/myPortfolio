import React from 'react'
import cloud from '../assets/images/gifs/cloud.gif'
import chick from '../assets/images/gifs/chick.gif'
import brush from '../assets/images/gifs/brush.gif'
import wind from '../assets/images/gifs/4.png'

const Hero = () => {
  return (
    <div className="content shrink-0 relative w-full flex flex-col items-center justify-center ">
        <p className='text-7xl font-[Chillax] relative lg:w-[77%]'>
        <img className='w-80 absolute right-[0%] top-0 -translate-y-[84%] z-0' src={cloud} alt="" />
          <span className='relative z-[9]'>
          I'm a 
          </span>
          <span className='font-black relative z-[0] mx-2'> MERN
          <img className='absolute w-96 z-[-1] left-0  top-0 translate-y-[70%]' src={brush} alt="" />
          </span> 
          <span className='relative ml-4'>
           Developer dedicated to bringing your vision to life.
          </span>
        </p>
        <button className='self-start ml-[15rem] mt-4'>Get resume</button>
        
      </div>
  )
}

export default Hero