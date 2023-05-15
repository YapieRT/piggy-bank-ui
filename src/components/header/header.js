import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../icons/header/logo.png';
import { setActiveContent } from '../../containers/user-page/components/content/content-manager';
function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const tokenExists = localStorage.getItem('token') !== null;

  const headerButtons = () => {
    if (tokenExists) {
      return (
        <>
          <Link to='/user#profile'>
            <button className='button'>Profile</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          {' '}
          <Link to='/user#login'>
            <button className='button'>Log In</button>
          </Link>
          <Link to='/user#signup'>
            <button className='button'>Sign Up</button>
          </Link>
        </>
      );
    }
  };
  const handleMenuClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'auto' });
  };

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };
  return (
    <header className='header'>
      <div className='logo-container'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' />
        </Link>
      </div>

      <div className='burger-menu'>
        <button onClick={handleMenuClick}>☰</button>
      </div>

      <nav className={`nav ${showBurgerMenu ? 'active' : ''}`}>
        <ul className='nav-items'>
          <li className='nav-item' onClick={() => scrollToSection('Home')}>
            Home
          </li>
          <li className='nav-item' onClick={() => scrollToSection('Instruction')}>
            Instruction
          </li>
          <li className='nav-item' onClick={() => scrollToSection('About Us')}>
            About Us
          </li>
          <li className='nav-item' onClick={() => scrollToSection('Support')}>
            Contacts
          </li>
        </ul>
        <div className='buttons-container'>{headerButtons()}</div>
      </nav>
    </header>
  );
}

export default Header;
