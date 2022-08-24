import React from 'react'
// import {Pie, Doughnut, Bar} from 'react-chartjs-2';
import Chart from "../components/Chart"
import logo from "../data/avatar2.jpg"

export const AboutMe = () => {
  return (
    // #262829, #313536
    <div className='w-full dark:bg-[#313536] bg-[#EDF7FA]'>

    <div className='w-full flex flex-row'>
        <div className='flex flex-col w-2/5 p-10'>
        <img className='shadow-inner rounded-xl shadow-blue-200/40' src={logo}/>
          </div>
        
          <div className=' w-3/5 p-10 flex flex-col'>
          <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center py-6 mt-20'>ABOUT ME</p>
          <p className='dark:text-white text-black text-7xl items-center py-6'>Web Developer</p>
          <div className='text-3xl text-slate-500 py-6 leading-relaxed mr-4'>PHP, ASP, Ruby, Python, etc. Medium skill in database/server work, medium skill in JavaScript, light skill in HTML. 

      This is very different from a Front End Developer as there is little working with the design and heavier on programming concepts and concerns, like security and structure.</div>
                
          </div>
    </div>
    
    {/* <Skills /> */}
</div>
  )
}
