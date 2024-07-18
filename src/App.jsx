import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
    <Nav/>
    <Home/>
    </>
  )
}

export default App