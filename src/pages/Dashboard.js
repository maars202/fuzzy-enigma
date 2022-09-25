import React from 'react'
export const Dashboard = () => {
  return (
    <div className='w-full dark:bg-[#262829] bg-white'>

        <div className='flex flex-row'>
              <div class="flex flex-col md:w-2/3 w-full p-20 bg-cover bg-hero-pattern2 md:bg-none overflow-hidden" >
                <div className='text-bold nablo dark:text-white text-white md:text-5xl md:text-black text-2xl py-4 opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')" >
          {/* "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away." */}
          Maaruni Pandithurai
          </div>
                <div className='md:text-2xl py-4 dark:text-[#01e473] text-gray-400 text-sm translate-y-full duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100', 'translate-y-0')">Web Developer, Blockchain Developer, <br></br>System and Algorithmic <br></br> Design Enthusiast, <br></br> and a Cyclist</div>
                <div className='py-4'>
                <a href="#About" className='mb-2 md:mb-0 mr-20 dark:bg-[#01e473] bg-[#FF6464] 
                rounded-full inline-block px-8 py-3 border border-transparent text-base 
                font-medium text-white hover:opacity-75
              md:text-md opacity-0 duration-[3000ms]' 
              x-intersect="$el.classList.add('opacity-100', 'm')">Learn More</a>
              {/* animate-bounce delay-150 duration-300 */}
                <a href="https://www.linkedin.com/in/maaruni/" className='border-2 rounded-full inline-block px-8 py-3 dark:border-[#01e473] border-[#FF6464] text-base font-medium text-[#FF6464] dark:text-white hover:opacity-75 hover:animate-bounce
              md:text-md'>Connect</a>
                </div>
              </div>
              <div className='md:w-1/3 w-0 rounded-l-full overflow-hidden bg-slate-500'>
                <img className='bg-slate-200 min-h-full' src={"https://www.cio.com/wp-content/uploads/2022/02/conceptual_trend_lines_data_tracking_monitoring_analytics_forecasting_future_whats_next_by_solarseven_gettyimages-1213574690_2400x1600-100877726-orig.jpg?quality=50&strip=all"}/>
              </div>
        </div>
        
    </div>
  )
}
