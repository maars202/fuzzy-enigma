import React from 'react'

export const CoolNikeCard = ({img, title, description, github, websitelink, githubPresent}) => {
  console.log("websitelink:", websitelink)
  return (

        <div class="flex justify-center items-center p-4">
           <div className='outline outline-offset-4  dark:outline-green-400 outline-[#FF6464] outline-4 rounded-md p-4'> 
  <div aria-details="card" class="relative flex flex-col w-[300px] hover:h-[700px] transition-all duration-1000 ease-in-out h-[190px] overflow-hidden bg-white shadow-2xl">
    <div aria-details="image" class="md:shrink-0 relative max-w-[300px] scale-55 max-h-[300px] h-full bg-white flex justify-center items-center">

      <img class=" md:max-h-xs md:w-auto h-auto max-w-xs transition duration-300 ease-out hover:scale-110" src={img} />
    </div>
    <div aria-details="details" class="bg-[#f7c9c9] dark:bg-yellow-200 relative min-w-sm max-h-[400px] flex p-5 flex-col justify-center transition delay-300 ease-in-out">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
      <h4 class="text-sm font-medium mt-2">Project details</h4>
      <p class="text-md font-normal text-left h-[202px]">{description}</p>

      <div class="flex justify-between items-center mt-4">

        {/* <a class="mr-2 dark:text-orange-500 text-blue-500 underline underline-offset-4 hover:font-extrabold" href={github}>Github Repo</a> */}
        {githubPresent == true 
        ? <a href={github} class={"hover:cursor-pointer px-4 mr-2 py-2 bg-blue-300 dark:bg-orange-200 rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"}>Github Repo</a> 
        : (<div></div>)}

        {/* {websitelink.length != 0 ? <a href={websitelink} class="hover:cursor-pointer px-4 py-2 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more!</a> : <></>} */}
        <a href={websitelink.length != 0 ? websitelink : github} class="hover:cursor-pointer px-4 py-2 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Website</a>
        
        
      </div>
    </div>
  </div>

  </div>
</div>

    
  )
}
