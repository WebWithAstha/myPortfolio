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
import ContactView from './ContactView'
import InfiniteText from './InfiniteText'
import Footer from './Footer'


const Home = () => {


  return (

    <div className='w-full  min-h-screen text-[#2c1c13] font-mono'>

        <Hero />

      <Skills />
      <Horizontal/>
      <InfiniteText/>
      <ContactView/>
      <Footer/>
      


    </div>
  )
}

export default Home