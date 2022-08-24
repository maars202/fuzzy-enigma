import React from 'react'

export const Form = () => {
  return (
    
        <form className='w-2/5 '>
  <label class="block">
    <span class="block text-sm font-medium text-[#ABAEB0] text-xl mb-2">Your Name</span>
    <input type="email" class="peer ..." className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your name'/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
  <label class="block">
    <span class="block font-medium text-[#ABAEB0] text-xl mb-2">Your Email</span>
    <input type="email" class="peer ..." className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your email'/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>

  <label class="block">
    <span class="block font-medium text-[#ABAEB0] text-xl mb-2">Your Message</span>
    <textarea type="email" class="peer ..." cols="40" rows="5" className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your message'/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>

</form>

  )
}
