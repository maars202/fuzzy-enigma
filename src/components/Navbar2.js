import React, {useEffect, useState} from 'react'
// all icons:
import {AiOutlineMenu } from "react-icons/ai"

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import Scroll from 'react-scroll'

const ScrollLink = Scroll.ScrollLink

export const Navbar2 = () => {

  const {activeMenu, setActiveMenu, theme, setTheme} = useStateContext();


  const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    }

    const MainIcon = ({title, customFunc, icon, color, dotColor}) => {
      return (
          <TooltipComponent content={title} 
          position='BottomCenter' className=''>
              <button type="button" onClick={customFunc}
              style={{color}} className="relative text-xl rounded-full p-3">
                  <span> </span>
                  <p className='italic font-icon text-3xl font-sans hover:font-bold text-white hover:dark:text-red-400 hover:text-[#01e472] hover:underline hover:underline-offset-8 hover:decoration-4'>{title}</p>
              </button>
          </TooltipComponent>
      )
  }


  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
      

  }, [isNavOpen])

  return (
    <div className='navbar'>
        <nav class=" border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gradient-to-r from-blue-300 dark:from-green-400 to-[#FF6464] dark:to-black bg-gradient-to-l">
        <div class="container flex flex-wrap justify-between items-center mx-auto">

        <div className={`${isNavOpen ? 'showMenuNav' : 'hideMenuNav'} md:hidden`}>
  <a href="#" className='mr-5 mt-0 dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md' onClick={() => {setIsNavOpen(false)}}>Close</a>

            
<div className={`${isNavOpen ? 'showMenuNav' : 'hideMenuNav'}` + " dark:bg-gray-700 bg-blue-100"}>
  <a href="#" className='mr-5 mt-0 dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md' onClick={() => {setIsNavOpen(false)}}>Close</a>

<div className='md:block rounded-full outline-1 hover:outline-4 dark:outline-white outline-black-500 border-2 dark:border-white border-black'>
      <a onClick={handleThemeSwitch} className='rounded-full inline-block px-8 py-3 border border-transparent text-lg text-black dark:text-white hover:opacity-75 hover:scale-110
            md:text-md '>{theme === "dark"? "dark ????" : "light ???????"}</a>
            {/* outline dark:outline-white outline-black outline-2 */}
    </div>

  <div class="w-full" id="navbar-default">
  
      <ul class="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center">
        <li>
          <a href="#" onClick={() => {setIsNavOpen(false)}} class="text-3xl font-normal rounded-lg flex items-center p-2 hover:text-gray-900 hover:bg-gray-100 group text-gray-700" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#About" onClick={() => {setIsNavOpen(false)}} class="text-3xl block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#projects" onClick={() => {setIsNavOpen(false)}} class="text-3xl block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#timeline" onClick={() => {setIsNavOpen(false)}} class="text-3xl block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Timeline</a>
        </li>
       
        <li>
          <a href="#contact" onClick={() => {setIsNavOpen(false)}} class="text-3xl block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
    
  </div>
    
  </div>

            <MainIcon title="Maars" customFunc={(activeMenu) => {
                setActiveMenu((prevActiveMenu) => 
                    !prevActiveMenu
                )}} color="blue" 
                icon={<AiOutlineMenu />} />



<button onClick={() => {setIsNavOpen(true)}} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>


    <div className='hidden md:block rounded-full mr-2 outline-1 hover:outline-4 dark:outline-white outline-black-500 border-2 dark:border-white border-black'>
      <a onClick={handleThemeSwitch} className='rounded-full inline-block px-8 py-2 border border-transparent text-lg text-black dark:text-white hover:opacity-75 hover:scale-110
            md:text-md '>{theme === "dark"? "dark ????" : "light ???????"}</a>
            {/* outline dark:outline-white outline-black outline-2 */}
    </div>


{/* <div className='flex flex-row justify-between'> */}


<div class="md:float-right hidden w-full md:block md:w-auto mr-2" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#About" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#projects" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all">Projects</a>
        </li>

        <li>
          <a href="#timeline" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all">Timeline</a>
        </li>
        
        <li>
          <a href="#contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>

   

    {/* </div> */}
            


        </div>
        </nav>
</div>
  )
}
