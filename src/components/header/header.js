import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../icons/header/logo.png';

function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const tokenExists = localStorage.getItem('token') !== null;

  const logOut = () => {
    localStorage.clear();
  };

  const headerButtons = () => {
    if (tokenExists) {
      return (
        <>
          <Link to='/user#profile'>
            <button className='button'>Profile</button>
          </Link>
          <Link to='/' onClick={logOut}>
            <button className='button logOut'>Log out</button>
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
