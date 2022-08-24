import React from 'react'
import {Skills} from "./Skills"
// import logo from "../data/product4.jpg"
import logo from "../data/dashboardImg3.jpeg"
// src/data/dashboardImg3.jpeg
// src/data/images (1).jpeg
export const Dashboard = () => {
  return (
    <div className='w-full dark:bg-[#262829] bg-white h-1/2'>

        <div className='flex flex-row'>
            <div className='flex flex-col w-2/3 p-20'>
              <div className='pac dark:text-white text-black text-5xl py-4'>Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.</div>
              <div className='text-2xl py-4 text-slate-500'>Web Developer, Blockchain Developer, <br></br>System Design and Algorithmic Design Enthusiast, <br></br> and a Biker</div>
              <div className='py-4'>
              <a href="#" className='mr-5  dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md'>Learn More</a>
              <a href="#" className='border-2 rounded-full inline-block px-8 py-3 dark:border-[#01e473] border-[#FF6464] text-base font-medium text-[#FF6464] dark:text-white hover:opacity-75 hover:animate-bounce
            md:text-md'>Connect</a>
              </div>
            </div>
              <div className=' w-1/2 h-full overflow-hidden rounded-l-full'>
              <img className='fill-slate-200' src={"https://www.cio.com/wp-content/uploads/2022/02/conceptual_trend_lines_data_tracking_monitoring_analytics_forecasting_future_whats_next_by_solarseven_gettyimages-1213574690_2400x1600-100877726-orig.jpg?quality=50&strip=all"}/>
            </div>
        </div>
        
        {/* <Skills /> */}
    </div>
  )
}
