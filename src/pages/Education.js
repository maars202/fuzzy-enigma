import React from 'react'
import { Timeline2 } from '../components/Timeline2'

export const Education = () => {
  return (
    <div className='flex flex-col dark:bg-[#313536] bg-[#EDF7FA] justify-between'>
      <div className='place-items-center grid py-5 mt-5'>
        {/* <h1 className='text-3xl font-bold underline opacity-0 duration-[5000ms]'
          x-intersect="$el.classList.add('opacity-100')">dfakjslkfda</h1> */}
        {/* <p className=' dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center opacity-0 duration-[5000ms]'
        x-intersect="$el.classList.add('opacity-100')">Timeline</p> */}
      </div>
       
        <div className='place-items-center grid py-5 mb-20'>
        {/* animate-in slide-in-from-left delay-700 duration-500 */}
        <p className="dark:text-white text-black text-5xl items-center opacity-0
        translate-y-full duration-[3000ms]"
        x-intersect="$el.classList.add('opacity-100', 'translate-y-0')" >Past Work Experience</p>
        </div>
       
      
        {/* animate-in slide-in-from-left delay-700 duration-500 */}
    <div className='flex flex-row'>
      <div className='w-1/2' ></div>
      <Timeline2/>
    </div>

    </div>
  )
}
