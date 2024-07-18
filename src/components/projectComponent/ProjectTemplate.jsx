import React from 'react'

import todo from '../../assets/images/projects/todo.png'
import garden from '../../assets/images/projects/garden.png'
const ProjectTemplate = ({id}) => {
    // console.log(id)
  return (
        <div id={id} className="flex h-full py-10 shrink-0">
                <div className="w-[40vw] self-end ml-20 gap-2 shrink-0 grid items-end grid-cols-1">
                    <div className="h-max items-end w-full pb-10">
                        <h1 className='text-6xl'>Todo List</h1>
                    </div>
                    <div className="h-[60vh] w-full">
                        <img className='w-full h-full object-cover' src={todo} alt="" />
                    </div>
                </div>
                <div className="w-[40vw] self-start ml-20 gap-2 shrink-0 grid items-end grid-cols-1">
                    <div className="h-max items-end w-full pb-10">
                        <h1 className='text-6xl'>Garden Guide</h1>
                    </div>
                    <div className="h-[60vh] w-full">
                        <img className='w-full h-full object-cover' src={garden} alt="" />
                    </div>
                </div>
            </div>
  )
}

export default ProjectTemplate