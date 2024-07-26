import React, { useRef, useState } from 'react'
import Heading from './Heading'
import VerticalBar from './VerticalBar'
import ProjectTemplate from './ProjectTemplate'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Horizontal = () => {


  const projRef = useRef(null)
  const [headRef, setheadRef] = useState(null)

  useGSAP(() => {
    // gsap.to("body,.bar", {
    //   backgroundColor: "#89aec1",
    //   scrollTrigger: {
    //     scroller: "body",
    //     trigger: projRef.current,
    //     start: "top 10%",
    //   }
    // })

    let tl = gsap.timeline(
      {
        delay: 2,
        scrollTrigger: {
          scroller: "body",
          trigger: projRef.current,
          start: "top -1%",
          end: "top -300%",
          scrub: 2,
        },
      }
    )
    tl
      .to("#prohead1,#bar1,#temp1,#bar2,#temp2,#bar3,#temp3,#prohead2", {
        transform: "translateX(-56vw)",
      })
      .to("#temp1,#bar2,#temp2,#bar3,#temp3,#prohead2", {
        transform: "translateX(-157vw)",
      })
      .to("#temp1,#temp2,#bar3,#temp3,#prohead2", {
        transform: "translateX(-258vw)",
      })
      .to("#temp2,#temp3,#prohead2", {
        transform: "translateX(-363.6vw)",
      })
      .to("#temp3", {
        transform: "translateX(-400vw)",
      },"n")


    gsap.to('#img1 img', {
      scale: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: "#img1",
        start: 'top 30%',
        end: 'top 27%',
      }
    }
    )
  })


  return (

    <div ref={projRef} id='horizontal_parent' className='w-full h-[350vh] relative pl-20'>
      <div id='horizontal_content' className='w-full h-screen flex sticky gap-20 top-0 overflow-hidden overflow-x-hidden '>

        <Heading id={"prohead1"} reverse={false} />
        <VerticalBar id={"bar1"} left={0} title={"fullstack"} />
        <ProjectTemplate id={"temp1"} />
        <VerticalBar id={"bar2"} left={16.2} title={"backend"} />
        <ProjectTemplate id={"temp2"} />
        <VerticalBar id={"bar3"} left={32.4} title={"frontend"} />
        <ProjectTemplate id={"temp3"} />
        <Heading id={"prohead2"} reverse={true} />

      </div>
    </div>
  )
}

export default Horizontal