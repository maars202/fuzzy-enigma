import React from 'react'
import logo from "../data/product4.jpg"

export const Skills = () => {
  return (
    <div className='flex flex-row bg-white dark:bg-[#262829] min-h-590'>
      
        <div className='w-full flex flex-row'>
            <div className=' w-3/5 p-10 flex flex-col'>
            <div className='place-items-center grid py-10 mt-20'>
          <p className='dark:text-white text-black text-5xl items-center'>I am a Web developer. 
          And I execl at what I do.</p>
          </div>
            <div className='text-3xl text-slate-500 py-6 leading-relaxed mr-4 text-right'>PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in JavaScript, light skill in HTML. 
            This is very different from a Front End Developer as there is little working with the design and heavier on programming concepts and concerns, like security and structure.</div>
            </div>
            <div className='flex flex-col w-2/5 p-10'>
          <img className='shadow-inner rounded-xl shadow-blue-200/40' src={logo}/>
            </div>
        </div>

    </div>
  )
}
