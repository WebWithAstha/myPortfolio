import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import React from 'react'
import Hover from '../animations/Hover'
import Button from '../partials/Button'











const ProjectBar = ({ title, about }) => {
    return (
        <h1 className='text-[6vw] cursor-pointer group w-full md:text-center px-8 md:px-20 relative mb-1 py-2 font-[bespoke] font-black uppercase'>{title}
            <div id='p-abt' className="w-full pointer-events-none group-hover:h-full h-0 absolute overflow-hidden group-hover:top-0 transition-all duration-150 left-0 top-full flex bg-purple-400">
                <p className='whitespace-nowrap px-4 shrink-0'>{about}</p>
                <p className='whitespace-nowrap px-4 shrink-0'>{about}</p>
            </div>
        </h1>
    )
}


const Projects = () => {
    useGSAP(() => {
        gsap.to("#p-abt p", {
            x: "-100%",
            ease: "linear",
            repeat: -1,
            duration: 7
        })
    })

    return (
        <>
            <div className="">

                <div className='w-full flex flex-col justify-center items-center h-max'>
                    <ProjectBar title={"movie app"} about={"Api Intergated fullstack project"} />
                    <ProjectBar title={"internshala"} about={"Mern stack project"} />
                    <ProjectBar title={"ames foundation"} about={"Api Intergated fullstack project"} />
                    <ProjectBar title={"tech quiz"} about={"Api Intergated fullstack project"} />
                </div>
                <div className="px-8 mt-8 md:mt-20">
                <Button title={"View all projects"}/>
                </div>
            </div>
        </>
    )
}

export default Projects