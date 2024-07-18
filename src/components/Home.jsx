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


const Home = () => {


  return (
    
    <div className='w-full overflow-x-hidden min-h-screen text-[#1A535C] font-mono'>
   
      <div className="md:py-20 md:pt-60 pt-32 flex items-center">
      <Hero/>
      </div>
      <Skills/>
      {/* <Trial/> */}
      <Projects/>
      <div id='horizontal_parent' className='w-full min-h-screen h-screen overflow-x-hidden relative flex'>
        <VerticalBar id={"bar1"} title={"fullstack"} />
        <VerticalBar id={"bar1"} title={"backend"} />
        <VerticalBar id={"bar1"} title={"frontend"} />
        <Heading id={"prohead"} reverse={true} />
    </div>
      {/* <Horizontal/> */}


    </div>
  )
}

export default Home