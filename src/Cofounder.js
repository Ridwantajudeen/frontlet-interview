import React from 'react';


function Cofounder(){
  return (
    <div className='found-container'>
      <h2>Co-found With Us</h2>
      <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
      <div className='found-sections'>
      <div className= 'found.section'>
          <div className= 'found-circle'>1</div>
          <div className= 'found-ontent'>
            <h3>We Ideate</h3>
            <p>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
          </div>
        </div>
        <div className= 'found.section'>
          <div className= 'found-circle'>2</div>
          <div className= 'found-ontent'>
            <h3>You Validate</h3>
            <p>You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions </p>
          </div>
        </div>
        <div className= 'found.section'>
          <div className= 'found-circle'>3</div>
          <div className= 'found-content'>
            <h3>You Co-own</h3>
            <p>After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
</p>
          </div>
        </div>
      </div>
      <button className= 'found-link' onClick={() => window.location.href = '#.some'}>
        Build your dream →
      </button>
    </div>
  );
};

export default Cofounder;
