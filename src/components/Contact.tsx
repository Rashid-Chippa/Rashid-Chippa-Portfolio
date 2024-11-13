import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import'../app/styles/contact.css';
const Contact = () => {
  return (
    <div id="contact" className='contact-container'>
        <div className='contact-grid md:grid-col-2 '>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="flip-right">Get IN Touch</h2>
                <p className='-contact-text' data-aos="flip-right">
                    Drop me a line , give me a call, or send me a message by submitting a form. 
                </p>
                <div className='contact-flex' data-aos="flip-right">
                    <AiOutlineMail size={30}/> xyz@gmail.com
                </div>
                <div className='contact-flex' data-aos="flip-right">
                    <BsTelephone  size={30}/> +920012334332312
                </div>
            </div>
            <div className='contact-space' >
                <div className='form' data-aos="flip-right">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' 
                    className='input-field' id='name' />
                </div>
                <div className='form' data-aos="flip-right">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Email' 
                    className='input-field'
                    id='email' />
                </div>
                <div className='form' data-aos="flip-right">
                    <label htmlFor="msg">Massage</label>
                    <textarea  
                    className= "textarea-field"
                    id='msg' rows={8}></textarea>
                </div>
                <button className='button' data-aos="flip-right">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact