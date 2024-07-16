import React from 'react'

const Template = () => {
    return (
        <div className="shrink-0 w-full h-full">
            <div id="projects" className='px-40 py-20'>
                <h1>My projects</h1>
                <div className="bars">
                    <div className="w-full h-40 border-[#475b6c] border-b-4 flex items-center px-4">
                        <h1>react</h1>
                        <div className="w-40 h-10 bg-slate-700 ml-20"></div>
                        <p className='ml-20'>Ames Foundation</p>
                    </div>
                    <div className="w-full h-40 border-[#475b6c] border-b-4 flex items-center px-4">
                        <h1>api-integrated</h1>
                        <div className="w-40 h-10 bg-slate-700 ml-20"></div>
                        <p className='ml-20'>Ames Foundation</p>
                    </div>
                    <div className="w-full h-40 border-[#475b6c] border-b-4 flex items-center px-4">
                        <h1>backend</h1>
                        <div className="w-40 h-10 bg-slate-700 ml-20"></div>
                        <p className='ml-20'>Ames Foundation</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Template