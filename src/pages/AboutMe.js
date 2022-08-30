import React from 'react'
import logo from "../data/personalPic.jpg"

export const AboutMe = () => {
  return (
    <div className='w-full dark:bg-[#313536] bg-[#EDF7FA]'>
      

    <div className='w-full flex flex-row flex-wrap p-1 md:p-0'>
          <div className='flex flex-col md:w-2/5 p-10'>
          
            <img className='shadow-inner rounded-xl shadow-blue-200/40 opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')"src={logo}/>
          </div>
        
          <div className='md:w-3/5 md:p-10 flex flex-col'>
          
          <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center py-6 mt-20 opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')">ABOUT ME</p>
          <p className='dark:text-white text-black text-7xl items-center py-6 opacity-0 translate-y-full duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100', 'translate-y-0')">Full Stack Developer</p>
          <div className='text-xl md:text-3xl text-slate-500 py-6 leading-relaxed mr-4 opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')">Passionate about full stack development and avant-garde technologies such as Blockchain and Embedded Systems. Currently a penultimate student pursuing Information Systems at Singapore Management University. 
          <br></br>
          <br></br>
          Worked with Java, Python, Rust, Go, PHP, etc. Mainly used React wih Tailswind styling for web projects. 
          Explored building decentralised applications on Ethereum and Solana blockchains, with Rust used in the latter. Other backend experiences included creating APIs in Java (Springboot), Python (flask), Rust (Diesel), Go, usage of Docker.</div>
                
          </div>
    </div>
    
</div>
  )
}
