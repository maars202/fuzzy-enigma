import React from 'react'
// import {Pie, Doughnut, Bar} from 'react-chartjs-2';
import Chart from "../components/Chart"
import {Form} from "../components/Form"

export const ContactDetails = () => {
  return (
    <div className='grid dark:bg-[#262829] bg-white min-h-590 justify-items-center pb-20'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center'>JUST A PING AWAY</p>
      </div>
        <div className='place-items-center grid py-5 mb-20'>
        <p className='dark:text-white text-black text-5xl items-center'>Contact</p>
        </div>

  <Form />

  <a href="#" className='mr-5  dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md'>Contact</a>

    </div>
  )
}
