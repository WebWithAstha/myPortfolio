import React, { useEffect, useState } from 'react'
import Hero from './hero/Hero'
import Horizontal from './projectComponent/Horizontal'
import Skills from './skills/Skills'
import Footer from './Footer'
import MovingText from './MovingText'
import About from './about/About'
import Animation from './animations/Animation'
import IntroProject from './projectComponent/IntroProject'
import Projects from './projectComponent/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'






const LoadingPage = () => {
  return (
    <div id='loadingPage' className="w-full h-screen bg-black z-[9999] fixed top-0 left-0 flex justify-center items-center">
      <div id='loadingOvelay' className="w-full h-full absolute left-0 top-[100%] bg-purple-600"></div>
      <div className="h-[3vw] overflow-hidden relative">
        <h1 id='loadh1' className='text-4xl inline-block translate-y-full'>Stand By....</h1>
      </div>
    </div>
  )
}


const Home = () => {




 


  const [moveX, setMoveX] = useState(0)
  const [moveY, setMoveY] = useState(0)
  const [moveMouse, setmoveMouse] = useState(true)


  const handleMouseMove = (e) => {

    if (moveMouse) {
      setMoveX(e.clientX)
      setMoveY(e.clientY)
    }

  }

  useEffect(() => {

    let tm = gsap.timeline()

    tm
   .to("#loadh1",{
      transform:"translateY(0)",
      duration:1
    })
   .to("#loadh1",{
      transform:"translateY(-100%)",
    })

   .to("#loadingPage",{
    delay:.2,
      y:"-60%"
    })
   .to("#loadingOverlay",{
      y:"-100%"
    },"same")
   .to("#loadingPage",{
      y:"-=160%"
    },"same")
   .to("#loadingOverlay",{
      y:"-=100%",
      display:"none"
    })

  }, [])


  useGSAP(() => {
    gsap.to("#cursor", {
      x: moveX,
      y: moveY,
    })





  }, [moveX, moveY])






  return (

    <div onMouseMove={e => (handleMouseMove(e))} className='w-full relative min-h-screen  font-mono'>
      <LoadingPage />

      <div id="cursor" className='w-[50px] h-[50px] pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-purple-600 z-[999]'></div>


      <Hero />
      <MovingText />
      <About />

      <Skills />
      <IntroProject />
      <Projects />
      <Animation />
      <Footer />



    </div>
  )
}

export default Home