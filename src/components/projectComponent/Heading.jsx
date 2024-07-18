import React from 'react'
import arrow from '../../assets/images/arrow.png'

const Heading = ({id,reverse}) => {
  
  return (
    <div id={id} className={`${reverse?'text-right':''} justify-center w-[50vw] shrink-0 h-full flex flex-col`}>
        <h1 className='text-9xl mt-20'>Projects</h1>
        <img className={`${reverse?"-scale-x-100 translate-x-[50%]":' self-end -translate-x-[50%]'} w-80 h-max mix-blend-darken`} src={arrow} alt="" />
    </div>
  )
}

export default Heading