
import React from 'react';


function Builders(){
  return (
    <section className="builders">
      <h2>Network of builders helping startup scale</h2>
      <div className="builders-cards">
        <div className="builders-card">
          <div>
          <h5>Work with Service Incubators to expedite your time-to-market</h5>
          <p>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.</p>
           <p className='btm'>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
           <a href='#.some' className="builder-link">Learn More →</a>
           </div>
         
        </div>
        <div className="builders-card">
          <h5>Access funding after your mvp is validated </h5>
          <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.</p>
           <p className='btm'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p><br/>
<a href='#.some' className="builder-link">Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Builders;
