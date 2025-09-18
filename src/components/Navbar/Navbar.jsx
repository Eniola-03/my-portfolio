import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div className='logo'>
        ENIOLA
      </div>
      <button className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          <li><AnchorLink className={`anchor-link ${menu === "home" ? 'active' : ''}`} href='#home' onClick={() => setMenu("home")}>Home</AnchorLink></li>
          <li><AnchorLink className={`anchor-link ${menu === "about" ? 'active' : ''}`} href='#about' onClick={() => setMenu("about")}>About</AnchorLink></li>
          <li><AnchorLink className={`anchor-link ${menu === "services" ? 'active' : ''}`} href='#services' onClick={() => setMenu("services")}>Services</AnchorLink></li>
          <li><AnchorLink className={`anchor-link ${menu === "portfolio" ? 'active' : ''}`} href='#portfolio' onClick={() => setMenu("portfolio")}>Portfolio</AnchorLink></li>
          <li><AnchorLink className={`anchor-link ${menu === "contact" ? 'active' : ''}`} href='#contact' onClick={() => setMenu("contact")}>Contact</AnchorLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;