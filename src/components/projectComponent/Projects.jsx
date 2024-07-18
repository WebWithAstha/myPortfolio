import React from 'react'
import todo from '../../assets/images/projects/todo.png'
import garden from '../../assets/images/projects/garden.png'
import Heading from './Heading'
import VerticalBar from './VerticalBar'


const Projects = () => {
    return (
        <>
        <div className="w-full h-screen shrink-0 flex lg:px-40  items-center">
        <Heading id={"prohead"} reverse={false} />
        <VerticalBar id={"bar1"} title={"fullstack"} img={"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <VerticalBar id={"bar1"} title={"backend"} img={"https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <VerticalBar id={"bar1"} title={"frontend"} img={"https://plus.unsplash.com/premium_photo-1664194583917-e2ca85efc15e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        
        </div>
        
        </>

    )
}

export default Projects