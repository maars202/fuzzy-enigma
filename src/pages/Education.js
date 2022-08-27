import React from 'react'
import { Timeline2 } from '../components/Timeline2'

export const Education = () => {
  return (
    <div className='flex flex-col dark:bg-[#313536] bg-[#EDF7FA] justify-between'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center'>Timeline</p>
      </div>
        <div className='place-items-center grid py-5 mb-20'>
        <p className='dark:text-white text-black text-5xl items-center'>Past Work Experience</p>
        </div>
      
    <div className='flex flex-row'>
      <div className='w-1/2' ></div>
      <Timeline2 />
    </div>

    </div>
  )
}
