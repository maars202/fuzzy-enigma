import React, { useEffect, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
export const ContactDetails = () => {
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const form = useRef();


  const sendEmail = async(e) => {
    setLoading(true);
    e.preventDefault();
    console.log(form.current)

    await emailjs.sendForm("service_s22eq14", "template_1ar5q4a", form.current, "Cz55Jg65l961cPNcN")
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setValid(true)
      }, (error) => {
        setLoading(false);
          console.log(error.text);
          setInvalid(true);

      });

      await new Promise(r => setTimeout(r, 4000));


      form.current.reset();
      setInvalid(false);
      setValid(false);
  };

  return (
    <div className='grid dark:bg-[#262829] bg-white min-h-590 justify-items-center pb-20'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')">JUST A PING AWAY</p>
      </div>
      <div className='place-items-center grid py-5 mb-20'>
      <p className='dark:text-white text-black text-5xl items-center opacity-0 translate-y-full duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100', 'translate-y-0')">Contact</p>
      </div>

     
      <form className='w-4/5 md:w-96 opacity-0 duration-[3000ms]' 
        x-intersect="$el.classList.add('opacity-100')" ref={form} onSubmit={sendEmail} >
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
            <div className=' grid items-center'>
              
          <input type="submit" value="Send " className="w-30 dark:bg-[#01e473] bg-[#FF6464] rounded-full inline-block px-8 py-3 border border-transparent text-base font-medium text-white hover:opacity-75 md:text-md" />
         
          
          </div>
          <div className=''>

          <div role="status" className={`mt-2 grid justify-center ${loading ? "visible" : "invisible"}`}>
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
          <div className={`p-4 grid justify-center font-extrabold text-green-400 ${valid ? "visible" : "invisible"}`}>Sent! 👌</div>
          <div className={`pt-4 grid justify-center font-extrabold text-[#FF6464] ${invalid ? "visible" : "invisible"}`}>Error occurred, please try again! ❌</div>
          </div>
          </div>
    </form>





    </div>
  )
}
