import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import P from './P'

const Horizontal = () => {
  return (
    <div className='w-full h-screen overflow-x-auto flex'>
        <Hero/>
        <Skills/>
        <Projects/>
        <P/>
        <Hero/>
        </div>
  )
}

export default Horizontal