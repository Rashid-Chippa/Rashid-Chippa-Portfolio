import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-col-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="flip-right">Get IN Touch</h2>
                <p className='text-slate-300 text-[18px] pt-2' data-aos="flip-right">
                    Drop me a line , give me a call, or send me a message by submitting a form. 
                </p>
                <div className='flex gap-3 items-center' data-aos="flip-right">
                    <AiOutlineMail size={30}/> xyz@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="flip-right">
                    <BsTelephone  size={30}/> +920012334332312
                </div>
            </div>
            <div className='space-y-8' >
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' 
                    className='h-[40px] bg-transparent border-accent'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Email' 
                    className='h-[40px] bg-transparent border-accent'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="flip-right">
                    <label htmlFor="msg">Massage</label>
                    <textarea  
                    className= " bg-transparent border-accent"
                    id='msg' rows={8}></textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="flip-right">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact