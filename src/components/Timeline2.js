import React from 'react'


const Li = ({title, time, description, latest}) => {
    return (
        <li class="mb-10 ml-6">            
            <span class="flex absolute -left-5 justify-center items-center w-9 h-9 bg-blue-200 rounded-full ring-4 ring-white dark:ring-green-600 dark:bg-black">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 class="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">{title} {latest ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-red-200 text-red-800 dark:bg-green-200 dark:text-green-800 ml-3">Latest</span> : <span></span>}</h3>
            <time class="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
            <p class="w-1/2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
            {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
        </li>
    )
}
export const Timeline2 = () => {
  return (
    <div className=' flex mt-5'>

        <div className='w-1/2'></div>
    <ol class="relative border-gray-200 dark:border-green-400 border-l-4">
    <Li latest={true} title={"Software Developer Intern"} time={"At Trinax Private Limited from May 2022 - August 2022"} description={"Worked on creating a Springboot Java API application for automated sending of weekly reports of queried data in a password protected zip folder using cron job. Researched for NFT integration in Unity and Phaser games. Improved the Laravel backend API of a CMS platform for generating and displaying reports."} />  
    <Li latest={false} title={"Singapore Blockchain Innovation Challenge 2021 - 3rd place Winner"} time={"Dec 2021"} description={"Collaborated with 2 other members to come up with a MVP website using React framework, pinata and solidity smart contracts for users to rent bikes as NFTs and act as a more sustainable and decentralised bike sharing solution. Awarded $2000 for placing 3rd overall."} />                  
    <Li latest={false} title={"Teaching Assistant for Computational Thinking Module"} description={"Handled administrative matters, including keeping track of class participation by students, sending announcements, and attending to students’ queries on crafting better algorithmic solutions for computational problems."} 
    time={"At Singapore Management University, from Aug 2021 - Nov 2021"} />                  
    <Li latest={false} title={"Part-time Web Developer Intern"} description={"Worked in a team to develop a Non Fungible Token (NFT) mobile application for art collectibles using solidity, React Native framework and AWS."} 
    time={"At OIO Holdings Limited from Aug 2021 - Sep 2021"} />                     
    </ol>
    </div>
  )
}
