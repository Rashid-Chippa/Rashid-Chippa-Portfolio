import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className=" rounded-3xl mn-h-screen bg-no-repeat bg-[url(/rashid_bg.jpg)] bg-cover"
    style={{backgroundSize:`25%`, backgroundPosition:"left 225px top 225px"}}>
    
    <Navbar />
    
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[100px] font bold leading-tight flex justify-center items-center'>
      <div>
        <p data-aos="flip-right">I am</p>
        <p data-aos="flip-right">Rashid</p>
        <p data-aos="flip-right">Chippa</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero