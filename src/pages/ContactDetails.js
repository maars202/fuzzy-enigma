import React, { useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser';
export const ContactDetails = () => {

  const form = useRef();


  const sendEmail = async(e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm("service_s22eq14", "template_1ar5q4a", form.current, "Cz55Jg65l961cPNcN")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='grid dark:bg-[#262829] bg-white min-h-590 justify-items-center pb-20'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center'>JUST A PING AWAY</p>
      </div>
      <div className='place-items-center grid py-5 mb-20'>
      <p className='dark:text-white text-black text-5xl items-center'>Contact</p>
      </div>

     
      <form className='w-4/5 md:w-96' ref={form} onSubmit={sendEmail}>
          <label class="block">
            <span class="block font-medium text-[#ABAEB0] text-xl mb-2">Your Name</span>
            <input name="user_name" class="peer ..." className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your name'/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>

          <label class="block">
            <span class="block font-medium text-[#ABAEB0] text-xl mb-2">Your Email</span>
            <input name="user_email" type="email" class="peer ..." className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your email'/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>

          <label class="block">
            <span class="block font-medium text-[#ABAEB0] text-xl mb-2">Your Message</span>
            <textarea name="message" type="email" class="peer ..." cols="40" rows="5" className='w-full bg-inherit outline outline-offset-1 dark:text-white dark:outline-green-400 outline-[#FF6464] outline-2 rounded-md p-4' placeholder='Enter your message'/>
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
          <div className='grid items-center justify-center'>
          <input type="submit" value="Send" className=" dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75 md:text-md" />
          </div>
    </form>





    </div>
  )
}
