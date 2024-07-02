import React from 'react';

import hero from './images/hero.jpeg';

function HeroSection(){
  return (
    <div className='hero' >
      <div className='hero-text'>
        <h1>SINC Partners is a service incubation company</h1>
        <p>Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</p>
        <button className='hero-btn'>Sign up with us</button>
      </div>
      <div >
        <img className='hero-img' src={hero} alt="Hero"  />
      </div>
    </div>
  );
};

export default HeroSection;
