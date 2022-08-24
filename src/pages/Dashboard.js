import React from 'react'
import {Skills} from "./Skills"
import logo from "../data/product4.jpg"

export const Dashboard = () => {
  return (
    <div className='w-full dark:bg-[#262829] bg-white h-1/2'>

        <div className='flex flex-row'>
            <div className='flex flex-col w-2/3 p-20'>
              <div className='pac dark:text-white text-black text-7xl py-4'>I have lots of things to prove to myself. One is I can live my life fearlessly</div>
              <div className='text-2xl py-4 text-slate-500'>Web Developer, Problem Solver, and a Hiker</div>
              <div className='py-4'>
              <a href="#" className='mr-5  dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md'>Learn More</a>
              <a href="#" className='border-2 rounded-full inline-block px-8 py-3 dark:border-[#01e473] border-[#FF6464] text-base font-medium text-[#FF6464] dark:text-white hover:opacity-75 hover:animate-bounce
            md:text-md'>Connect</a>
              </div>
            </div>
              <div className=' w-1/2 h-full overflow-hidden rounded-l-full'>
              <img className='' src={logo}/>
            </div>
        </div>
        
        {/* <Skills /> */}
    </div>
  )
}
