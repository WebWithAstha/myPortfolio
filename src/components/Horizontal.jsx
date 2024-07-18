import React, { useRef, useState } from 'react'
import Heading from './projectComponent/Heading'
import VerticalBar from './projectComponent/VerticalBar'
import ProjectTemplate from './projectComponent/ProjectTemplate'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Horizontal = () => {


  const projRef = useRef(null)
  const [headRef, setheadRef] = useState(null)

    useGSAP(()=>{
        gsap.to("body",{
          backgroundColor:"#fef9c3",
          scrollTrigger:{
            scroller:"body",
            trigger:projRef.current,
            start:"top 10%",
            end:"top 11%",
          }
        })
        
      })


  return (
    <div ref={projRef} id='horizontal_parent' className='w-full min-h-screen h-screen overflow-x-hidden relative flex'>
        <Heading id={"prohead"} />
        <VerticalBar id={"bar1"} title={"fullstack"} />
        <VerticalBar id={"bar1"} title={"backend"} />
        <VerticalBar id={"bar1"} title={"frontend"} />
    </div>
  )
}

export default Horizontal