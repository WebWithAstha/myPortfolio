import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const InfiniteText = () => {
    useGSAP(() =>{

    })
    return (
        <div className='w-full overflow-hidden mt-40 mb-20'>
        <div className='w-full flex overflow-hidden bg-[#2c1c13] text-[#bdbcae]'>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
            <h1 className='font-[bonny] whitespace-nowrap text-7xl pl-10 py-4'>More About Me</h1>
        </div>
        </div>
    )
}

export default InfiniteText