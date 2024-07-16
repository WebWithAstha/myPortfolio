import React from 'react'
import Hero from './Hero'
import Horizontal from './Horizontal'
import Skills from './Skills'
import Projects from './Projects'

const Home = () => {
  return (
    
    <div className='w-full h-screen bg-[#d8ebf4] text-[#1A535C] px-20 font-mono pb-40'>
   
      <div className="h-screen flex items-center">
      <Hero/>
      </div>
      <Skills/>
      <Projects/>


    </div>
  )
}

export default Home