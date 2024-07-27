import React from 'react'
import Hero from './hero/Hero'
import Horizontal from './projectComponent/Horizontal'
import Skills from './skills/Skills'
import Footer from './Footer'
import MovingText from './MovingText'
import About from './about/About'
import Animation from './animations/Animation'
import IntroProject from './projectComponent/IntroProject'
import Projects from './projectComponent/Projects'


const Home = () => {


  return (

    <div className='w-full  min-h-screen  font-mono'>

        <Hero />
        <MovingText/>
        <About/>

      <Skills />
      <IntroProject/>
      <Projects/>
      <Animation/>
      <Footer/>
      


    </div>
  )
}

export default Home