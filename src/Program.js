import React, { useState } from 'react';
// import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'; 
//try to find a way to make above icon work later

import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';

function Program(){
  const [currentIndex, setCurrentIndex] = useState(0); 
  const sections = [
    {
      title: 'Application and Selection',
      description:
        "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
      icon: icon1,
      color: '#303030'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    
  ];

  const navigateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const navigatePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className='program-container'>
      <h2>Join Our Entrepreneur In Residence (EIR) Program</h2>
      <p>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
      <div className='program-sections'>
        {sections.slice(currentIndex, currentIndex + 4).map((section, index) => (
          <div className='program-section' key={index}>
            <div className= 'program-circle' style={{ backgroundColor: section.color }}>
             
              <img className='program-img' src={section.icon} alt={`Icon ${index}`} />
            </div>
            <h3 className='program-title'>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <button className='program-link' onClick={() => window.location.href = '#'}>
        Support the Future →
      </button>
      <div className='program-navigation'>
        <button className='program-btn' onClick={navigatePrevious}>{'<'}</button>
        <button className='program-btn' onClick={navigateNext}>{'>'}</button>
        {/* try to find a way to make below work later instead of above uing the react icon import */}
        {/* <button onClick={navigatePrevious}><FaAngleLeft /></button>
        <button onClick={navigateNext}><FaAngleRight /></button> */}
      </div>
    </div>
  );
};

export default Program;
