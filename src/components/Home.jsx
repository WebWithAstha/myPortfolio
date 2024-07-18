import React from 'react'
import Hero from './Hero'
import Horizontal from './Horizontal'
import Skills from './Skills'
import Projects from './projectComponent/Projects'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Trial from './projectComponent/Trial'
import VerticalBar from './projectComponent/VerticalBar'
import Heading from './projectComponent/Heading'
import P from './P'


const Home = () => {


  return (

    <div className='w-full  min-h-screen text-[#1A535C] font-mono'>

      <div className="md:py-20 overflow-x-hidden md:pt-60 pt-32 flex items-center">
        <Hero />
      </div>
      <Skills />
      {/* <Projects /> */}
      <Horizontal/>
      <div className="w-full h-screen"></div>

      <div id='horizontal_parent' className='w-full hidden min-h-screen h-screen overflow-x-hidden relative flex'>
        <VerticalBar id={"bar1"} left={"0"} title={"fullstack"} />
        <VerticalBar id={"bar1"} left={"10%"} title={"backend"} />
        <VerticalBar id={"bar1"} left={"20%"} title={"frontend"} />
        <Heading id={"prohead"} reverse={true} />

      </div>


    </div>
  )
}

export default Home