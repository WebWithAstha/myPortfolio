import React from 'react'
import chick from '../assets/images/gifs/chick.gif'
import knife from '../assets/images/gifs/knife.gif'


const Skills = () => {
    const skill1 = ["React", "Framer Motion", "Tailwind Css", "Css", "Html", "Javascript", "Next.js"]
    const skill3 = [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "Nodemailer",
        "Figma"
    ];
    const skill2 = [
        "VS Code",
        "Postman",
        "Git",
        "GitHub",
        "Redux Toolkit",
        "Context API",
        "props drilling",
        "RESTful APIs",
        "AJAX",
        "React Routing",
        "Infinite Scrolling"
    ];

    const stateMan = ["Redux Toolkit", "Context API"]
    return (
        <div className='shrink-0 w-full h-screen py-0 flex lg:px-40 flex-col'>
            <div className="text-6xl lg:mr-20 mb-20">
                <h1 className=''>What skills <br /> do I bring to the table?
                    <img className='h-24 translate-y-2 -scale-x-100 inline-block ' src={knife} alt="" />
                </h1>
            </div>
            <div className="cont flex flex-col">
                <div className="h-[60vh] flex flex-col justify-between ">
                    <div className="w-full h-full flex-col flex gap-10">
                        <div className="w-[40rem]">
                            <div className="flex text-[#d8ebf4] font-semibold  flex-wrap">
                                {skill1.map((tech, index) => (
                                    <div key={index} className="px-8 py-3 mb-[1px] bg-[#1a535c]/[.5] text-2xl">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex-col flex items-center gap-10 mt-4">
                        <div className="w-[40rem]">
                            <div className="flex text-[#d8ebf4] font-semibold  flex-wrap">
                                {skill2.map((tech, index) => (
                                    <div key={index} className="px-8 py-3 mb-[1px] bg-[#1a535c]/[.5] text-2xl">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex-col flex items-end gap-10 mt-4">
                        <div className="w-[40rem]">
                            <div className="flex text-[#d8ebf4] font-semibold  flex-wrap">
                                {skill3.map((tech, index) => (
                                    <div key={index} className="px-8 py-3 mb-[1px] bg-[#1a535c]/[.5] text-2xl">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills