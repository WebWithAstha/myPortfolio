import React from 'react'
import table from '../assets/images/8-removebg-preview.png'
import laptop2 from '../assets/images/2-removebg-preview.png'
import chick from '../assets/images/gifs/chick.gif'


const Projects = () => {
    return (
        <div className="w-full h-screen shrink-0 flex px-20 items-center">
            <div className="flex h-max">
                <img className='h-[70vh] -translate-y-10 -scale-x-100 inline-block ' src={chick} alt="" />
                <h1 className='self-end font-black text-[7rem] -translate-x-1/2'>Projects</h1>
            </div>
            
        </div>
    )
}

export default Projects