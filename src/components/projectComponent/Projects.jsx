import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'











const ProjectBar = ({title,about})=>{
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
    useGSAP(()=>{
        gsap.to("#p-abt p",{
            x:"-100%",
            ease:"linear",
            repeat:-1,
            duration:4
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
       <button className='flex mx-8 md:mx-20 items-center gap-4 border mt-4 justify-center rounded-full md:px-[2vw] px-[6vw] py-[2vw] md:py-[.6vw] text-[5vw] border-purple-400 md:text-[1.4vw]'>View all projects
                    <img className="arrow w-[6vw] md:w-[2vw] h-max invert inline-block shrink-0 -rotate-45" src="   https://cdn-icons-png.flaticon.com/512/17426/17426390.png " alt="" />
                </button>
    </div>
    </>
  )
}

export default Projects