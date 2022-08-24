import React from 'react'

export const CoolNikeCard = ({img, title, description, github, }) => {
  return (
    <div>
        <div class="flex justify-center items-center">
           <div className='outline outline-offset-4 outline-green-400 outline-4 rounded-md p-4'> 
  <div aria-details="card" class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-96 overflow-hidden bg-white shadow-2xl ">
    <div aria-details="image" class="relative min-w-xm w-[300px] scale-55 h-full bg-white flex justify-center items-center">
      {/* <img class="h-96 max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5" src={img} /> */}
      <img class="h-auto max-w-xs transition duration-300 ease-out hover:scale-110" src={img} />
    </div>
    <div aria-details="details" class="bg-yellow-200 relative min-w-sm h-full flex p-5 flex-col justify-center transition delay-700 ease-in-out">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
      <h4 class="text-sm font-medium mt-2">Project details</h4>
      <p class="text-md font-normal text-left">{description}</p>
      {/* <ul class="flex justify-around my-4">
        <li class="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">36</li>
        <li class="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">38</li>
        <li class="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">40</li>
        <li class="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">42</li>
        <li class="border-2 p-2 rounded-md font-semibold border-black hover:bg-yellow-300 cursor-pointer">44</li>
      </ul> */}
      <div class="flex justify-between items-center mt-4">
        {/* <h2 class=""><sup class="text-2xl font-semibold">$</sup><span class="text-4xl font-extrabold">199</span><small class="font-semibold">.99</small></h2> */}
        <a class="mr-2 text-orange-500 underline underline-offset-4 hover:font-extrabold" href={github}>Github Repo</a>
        {/* <a href="#" className='bg-gradient-to-r from-[#31ccec] to-[#9c27b0] rounded-full inline-block px-3 p-3 mr-1 border border-transparent text-base font-medium text-white hover:opacity-75
            md:text-md'>Github Repo</a> */}
        <a href="#" class="px-4 py-2 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Find out more!</a>
      </div>
    </div>
  </div>

  </div>
</div>
</div>
    
  )
}
