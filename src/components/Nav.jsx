import React from 'react'
import logo from '../assets/images/profile.jpg'

const Nav = () => {
  return (
    <nav className='top-6 left-0 px-6 fixed gap-2 flex z-[999] justify-between w-full text-white items-center'>
      <div className="logo flex items-center gap-2">

        <div className=" rounded-full border-8 shadow-inner border-purple-400 w-12  h-12 overflow-hidden ">
          <img className='w-full h-full object-cover' src={logo} alt="" />
        </div>
        <h4 className='text-lg leading-none mt-1'>Astha Lodhi</h4>
      </div>
      <div className="menu group cursor-pointer">
        <div className="w-8 h-1 rounded-full transition-all duration-150 group-hover:-rotate-45 group-hover:translate-y-2 bg-purple-400 mb-2"></div>
        <div className="w-8 h-1 rounded-full transition-all duration-150 group-hover:rotate-45 bg-purple-400"></div>
      </div>

    </nav>
  )
}

export default Nav