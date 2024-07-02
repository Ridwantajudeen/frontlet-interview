import React from 'react';

import logo1 from './images/logo1.jpeg';

function Equity(){
  return (
    <section className="equity-jobs">
      <h2>Equity Jobs</h2>
      <p>See companies and startups offering equity or a mix of cash and equity for very important positions in their company.</p>
      <div className="job-listings">
        
        <div className="job">
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="job-icon" />
          </div>
          <div className="job-details">
            <h3>This company is a SAAS Startup that builds AI copy generator...</h3>
            <p>Chief Executive Officer</p>
            <p>LOCATION: Abuja, Nigeria</p>
            <p>INDUSTRY: On-demand print</p>
            <p>EQUITY: 1.2%</p>
            <p>STIPEND: NGN 200,000/mth</p>
            <p>DEADLINE: 24th, January 2024</p>
            <p>ROLE TYPE: Full-time</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>

        
        <div className="job">
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="job-icon" />
          </div>
          <div className="job-details">
            <h3>This company is a SAAS Startup that builds AI copy generator...</h3>
            <p>UX Strategist</p>
            <p>LOCATION: Abuja, Nigeria</p>
            <p>INDUSTRY: E-commerce</p>
            <p>EQUITY: 1.2%</p>
            <p>STIPEND: NGN 200,000/mth</p>
            <p>DEADLINE: 24th, January 2024</p>
            <p>ROLE TYPE: Full-time</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>

        <div className="job">
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="job-icon" />
          </div>
          <div className="job-details">
            <h3>This company is a SAAS Startup that builds AI copy generator...</h3>
            <p>CTO & Head of Innovations</p>
            <p>LOCATION: Abuja, Nigeria</p>
            <p>INDUSTRY: Fintech</p>
            <p>EQUITY: 1.2%</p>
            <p>STIPEND: NGN 200,000/mth</p>
            <p>DEADLINE: 24th, January 2024</p>
            <p>ROLE TYPE: Full-time</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>

        <div className="job">
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="job-icon" />
          </div>
          <div className="job-details">
            <h3>This company is a SAAS Startup that builds AI copy generator...</h3>
            <p>Backend Developer</p>
            <p>LOCATION: Abuja, Nigeria</p>
            <p>INDUSTRY: Transportation</p>
            <p>EQUITY: 1.2%</p>
            <p>STIPEND: NGN 200,000/mth</p>
            <p>DEADLINE: 24th, January 2024</p>
            <p>ROLE TYPE: Full-time</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>
      </div>
      <p className="see-more-link">See more Equity jobs</p>
    </section>
  );
};

export default Equity;
