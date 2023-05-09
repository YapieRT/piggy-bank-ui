import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../icons/header/logo.png';
import { setActiveContent } from '../../containers/user-page/components/content/content-manager';
function Header() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

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

  const items = ['Home', 'Instruction', 'About Us', 'Support'];

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
        <div className='buttons-container'>
          <Link to='/user#login'>
            <button className='button'>Log In</button>
          </Link>
          <Link to='/user#signup'>
            <button className='button'>Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

{
  /* <header>
<nav className="nav">
    <a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
    <ul className="bars">
        <li>
            <a href='#'>Home</a>
        </li>
        <li>
            <a href='#'>Instruction</a>
        </li>
        <li>
            <a href='#'>About Us</a>
        </li>
        <li>
            <a href='#'>Support</a>
        </li>
    </ul>
    <a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
</nav>
</header > */
  /* const navItemList = items.map((title) => (
            <li className="nav-item" key={title} id={title}>
                <a href={`#${title}`}>{title}</a>
            </li>
    <li className="nav-item" key={title} id={title} onClick={() => scrollToSection(`${title}`)}>{title}</li>
)); */
}

{
  /* <nav className="nav">
<a href="#" className="site-logo"><img src={test_icon} alt="" /></a>
<ul>
    <NavLink to="/tutorial">Tutorial</NavLink>
    <li>
    <a href='#'>Home</a>
</li>
<li>
    <a href='#'>Instruction</a>
</li>
<li>
    <a href='#'>About Us</a>
</li>
<li>
    <a href='#'>Support</a>
</li>

</ul>
</nav> */
}
