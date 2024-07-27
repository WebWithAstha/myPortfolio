import React from 'react'


const Institute = ({type,title,more})=>{
    return(
        <div className=" border-b border-t py-8 rounded mb-2 flex gap-20">
        <h1 className='text-[5vw] leading-[1] self-center w-[24vw]'>{type}</h1>
        <h1 className='text-[5vw] leading-[1] self-center '>~</h1>
        <p className='text-[3vw] font-[bespoke] leading-[1] self-center text-purple-300 w-[30vw]'>{title} </p>
        <div className="">
            {
                more.map((item,i)=>(
                    <p key={i}>{item}</p>
                ))
            }
       
        </div>
    </div>
    )
}

const Education = () => {
  return (
    <div className="institutes mt-40">

        <Institute type={"college"} title={"Lnct College"} more={[
             "( 2022 - 2026 )",
             "Pursuing Btech with cse - iot",
             "currently in 4sem 2nd year",
             "Pursuing Btech with cse - iot",
             "currently in 4sem 2nd year",
        ]}
        />
        <Institute type={"School"} title={"St paul sr. sec co-ed school, Bhopal"} more={[
             "( 2022 - 2026 )"
        ]}
        />
        <Institute type={"Skills Incubator"} title={"Sheriyans Coding School"} more={[
             "( 2022 - 2026 )"
        ]}
        />

    </div>
  )
}

export default Education