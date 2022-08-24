import React from 'react'
// all icons:
import {AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from "../data/avatar.jpg"
// import { Cart, Chat, Notification, UserProfile } from "./"
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) => {
    

    return (
        <TooltipComponent content={title} 
        position='BottomCenter' className=''>
            <button type="button" onClick={customFunc}
            style={{color}} className="relative text-xl rounded-full p-3">
                <p className='text-2xl font-sans hover:font-bold text-white hover:text-[#01e472] hover:underline hover:underline-offset-8 hover:decoration-4'>{title}</p>
            </button>
        </TooltipComponent>
    )
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
export const Navbar = () => {

    const {activeMenu, setActiveMenu, theme, setTheme} = useStateContext();


    const handleclick = (buttonName) => {
        console.log(buttonName, " clicked!");
    }

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      }


  return (
    // bg-[#121212]
    // dark:bg-[#313536]
    <div className='flex justify-between md:p-10 relative p-10 dark:bg-[#313536] bg-gradient-to-r from-blue-300 to-[#FF6464]'>
        
        <MainIcon title="Maars" customFunc={(activeMenu) => {
                setActiveMenu((prevActiveMenu) => 
                    !prevActiveMenu
                )}} color="blue" 
                icon={<AiOutlineMenu />} />


        <div className='flex justify-between w-5/6'>
        <div className='flex justify-between w-5/6'>
            <NavButton 
            title="Home" 
            customFunc={() => handleclick("cart")} 
            color="blue" 
                icon={<FiShoppingCart />} />

            {/* <NavButton 
            title="About" 
            dotColor="#03C9D07"
            customFunc={() => handleclick("chat")} 
            color="blue" 
            icon={<BsChatLeft />} />

            <NavButton 
            title="Skills" 
            dotColor="#03C9D07"
            customFunc={() => handleclick("notification")} 
            color="blue" 
            icon={<RiNotification3Line />} />

            <NavButton 
            title="Clients" 
            dotColor="#03C9D07"
            customFunc={() => handleclick("notification")} 
            color="blue" 
            icon={<RiNotification3Line />} />

            <NavButton 
            title="Blog" 
            dotColor="#03C9D07"
            customFunc={() => handleclick("notification")} 
            color="blue" 
            icon={<RiNotification3Line />} /> */}






        

            </div>


             {/* <a href="#" className='bg-gradient-to-r from-[#31ccec] to-[#9c27b0] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md'>Connect</a> */}
            <a href="#" onClick={handleThemeSwitch} className='rounded-full inline-block px-8 py-3 border border-transparent font-medium text-2xl text-white hover:opacity-75
            md:text-md outline outline-offset-4 outline-white outline-4  p-4'>{theme === "dark"? "dark 🌓" : "light 🌤️"}</a>



            
        </div>
        
    </div>
  )
}

export default Navbar;