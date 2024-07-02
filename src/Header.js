import React, { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">SINC Partners</div>
      <nav className={`the-nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav">
          <li className="the-li">About</li>
          <li className="the-li">SIP</li>
          <li className="the-li">Studio</li>
          <li className="the-li">SEEQ</li>
          <li className="the-li">Platforms</li>
          <li className="the-li">Initiatives</li>
          <li className="the-li">More</li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="btn">SINC With Us</button>
        <button className="btn-secondary">Apply to SIP 1.0</button>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
}

export default Header;
