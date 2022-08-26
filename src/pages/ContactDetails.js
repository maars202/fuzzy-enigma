import React, { useEffect, useRef} from 'react'
// import {Pie, Doughnut, Bar} from 'react-chartjs-2';
import Chart from "../components/Chart"
import {Form} from "../components/Form"
// import emailjs from "emailjs"
// import emailjs from 'emailjs-com';  
import emailjs from '@emailjs/browser';
export const ContactDetails = () => {



//   const getBotUpdates = () =>{
//     const token = "5549462072:AAGBB0yDjwQL9D3Tgk4NGc9f7hfVex0pqYU"
//   fetch(
//     "https://api.telegram.org/bot5549462072:AAGBB0yDjwQL9D3Tgk4NGc9f7hfVex0pqYU/getUpdates"
//   ).then((response) => response.json());
// }
// const getUserTelegramId = async (uniqueString) => {
//   const { result } = await getBotUpdates();

//   const messageUpdates = result.filter(
//     ({ message }) => message?.text !== undefined
//   );

//   const userUpdate = messageUpdates.find(
//     ({ message }) => message.text === `/start ${uniqueString}`
//   );

//   return userUpdate.message.from.id;
// };
const form = useRef();

// const handleSubmit = async (e) => {
  
//   // const e = {"target": "hiiiiii"};
//   // console.log("sending: " , e)
//   // const apiKey = {
//   //   "TEMPLATE_ID": ,
//   //   "USER_ID": "Cz55Jg65l961cPNcN"
//   // e.preventDefault(); // Prevents default refresh by the browser
//   // await emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
//   // .then((result) => {
//   // alert("Message Sent, We will get back to you shortly", result.text);
//   // },
//   // (error) => {
//   // alert("An error occurred, Please try again", error.text);
//   // });


//   emailjs.sendForm("service_s22eq14", "template_4038dp1", form.current, "Cz55Jg65l961cPNcN")
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
// };


async function button1_click() {
  // Change all values to your own
  let params = {
      user_id: 'YOUR_PUBLIC_KEY',
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      // template_params: {
      //   'YOUR_PARAM1_NAME': 'YOUR_PARAM1_VALUE',
      //   'YOUR_PARAM2_NAME': 'YOUR_PARAM2_VALUE'
      // }
  };

  let headers = {
      'Content-type': 'application/json'
  };

  let options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('Your mail is sent!');
        } else {
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log('Oops... ' + error);
    });
}




const sendEmail = async(e) => {
  e.preventDefault();
  console.log(form.current)

  // await button1_click()
  // "template_4038dp1"
  emailjs.sendForm("service_s22eq14", "template_1ar5q4a", form.current, "Cz55Jg65l961cPNcN")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};




// useEffect(async () => {
//   // await getBotUpdates()
//   // await handleSubmit()
// }, [])




  return (
    <div className='grid dark:bg-[#262829] bg-white min-h-590 justify-items-center pb-20'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center'>JUST A PING AWAY</p>
      </div>
        <div className='place-items-center grid py-5 mb-20'>
        <p className='dark:text-white text-black text-5xl items-center'>Contact</p>
        </div>

    {/* <Form /> */}

     
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
