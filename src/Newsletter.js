import React from 'react';


function Newsletter(){
  return (
    <div className="newsletter-container">
      <section className="newsletter">
        <h2>Newsletter</h2>
        <p>
          Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>SINC PARTNERS</h3>
            <p>
              SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
            </p>
          </div>
          <div className="footer-column">
            <h3>Platforms</h3>
            <ul>
              <li>Kofoundme</li>
              <li>InResidency</li>
              <li>Service Market</li>
              <li>Founders School</li>
              <li>Metty</li>
              <li>Grantly</li>
              <li>Boldtell</li>
              <li>Chekwa</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Initiatives</h3>
            <ul>
              <li>Jabi Plains</li>
              <li>Local Pricing Initiative</li>
              <li>Scholarship Program</li>
              <li>SSMN Pricing</li>
              <li>University STEM</li>
              <li>University InResidency</li>
              <li>1M Nigeria Products</li>
              <li>Founders Festival</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li>Who We Are</li>
              <li>Our People</li>
              <li>Concept Innovations</li>
              <li>Our Process</li>
              <li>Investors Network</li>
              <li>CSR & Events</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>More</h3>
            <ul>
              <li>Services</li>
              <li>Equity Jobs</li>
              <li>EIR Program</li>
              <li>Offers</li>
              <li>Innovation News</li>
              <li>FAQ</li>
              <li>Blog & Resources</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Locations</h3>
            <ul>
              <li>Abuja, Nigeria</li>
              <li>Lagos, Nigeria</li>
              <li>Philadelphia, USA</li>
            </ul>
            <h3>Accredited Business</h3>
            <ul>
              <li>Trusted Business</li>
              <li>Chat with Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 SINC Partners Ltd. All rights reserved</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
