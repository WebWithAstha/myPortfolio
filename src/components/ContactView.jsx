import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ContactView = () => {
    const parentRef = useRef(null)

    // useGSAP(() => {
    //     gsap.to("body", {
    //         backgroundColor: "#d9f99d",
    //         scrollTrigger: {
    //             scroller: "body",
    //             trigger: parentRef.current,
    //             start: "top 10%",
    //         }
    //     })
    // })

    return (
        <div ref={parentRef} className="w-full h-screen flex gap-20 py-20 px-40">
            <div className="w-[50vw] h-[80vh]">
                {/* <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1673792686413-2ea78990fb75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <img className='w-full h-full object-cover' src="https://avatars.githubusercontent.com/u/137085397?s=400&u=93452b7aec432098a7388bbeba9ec5c60314322e&v=4" alt="" />
            </div>
            <div className="">
                <h1 className='text-[10vw] leading-none'>Mern</h1>
                <h1 className='text-[8vw] leading-none -mt-2'>Developer</h1>
                <p className='w-[80%] mt-6 text-xl leading-snug'>Driven by a passion for design and development, I lead projects from concept to launch, ensuring a smooth process that positively impacts both the digital landscape and your business.</p>
                    <h1 className='mt-6 mb-4 text-2xl font-black tracking-wider'>Education</h1>
                <div className="flex mt-2 gap-4 items-center">
                    <h1 className='font-[bonny] text-xl font-black tracking-wider'>College</h1>
                    ~
                    <p> 2nd-year B.Tech CSE student, specializing in IoT.</p>
                </div>
                <div className="flex mt-2 gap-4 items-center">
                    <h1 className='font-[bonny] text-xl font-black tracking-wider'>Schooling</h1>
                    ~
                    <p> Lnct Bhopal, Mp</p>
                </div>
            </div>
        </div>

    )
}

export default ContactView