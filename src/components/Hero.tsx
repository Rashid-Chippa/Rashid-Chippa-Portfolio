import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    
    <div>
    <div id="hero" >
      
    <div className="hero-container">
    <Navbar />
   
    <div className='hero-content'>
    <div className='hidden lg:block'></div>
    <div className='hero-text'>
      <div className='hero-msin'>
        <p data-aos="flip-right">I am</p>
        <p data-aos="flip-right">Rashid</p>
        <p data-aos="flip-right">Chippa</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Hero