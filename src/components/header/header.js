import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../icons/header/logo.png';

function Header(props) {
  const navigate = useNavigate();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const tokenExists = localStorage.getItem('token') !== null;

  const logOut = (event) => {
    localStorage.clear();
    navigate('/');
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

  const navItems = () => {
    if (props.nav)
      return (
        <>
          {' '}
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
        </>
      );
  };
  const handleMenuClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const scrollToSection = (sectionId) => {
    navigate('/');
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
        {navItems()}
        <div className='buttons-container'>{headerButtons()}</div>
      </nav>
    </header>
  );
}

export default Header;
