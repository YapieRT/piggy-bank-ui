import React from 'react';
import './footer.css';
function Footer({ getStartedFlag }) {
  const items = ['Home', 'Instruction', 'About Us', 'Support'];
  const navItemList = items.map((title) => (
    <li className='nav-item' key={title}>
      <a href='#'>{title}</a>
    </li>
  ));
  const getStarted = getStartedFlag ? (
    <>
      <div className='info-container'>
        <h3 className='subtitle'>Are you ready?</h3>
        <h2 className='title'>Lets get started!</h2>
        <button className='btn_start'>Get started</button>
      </div>
      <ul className='nav-items'>{navItemList}</ul>
    </>
  ) : (
    ''
  );
  return (
    <div className='footer'>
      {getStarted}

      <h3 className='copyright'>Copyright © 2023. PiggyBank. All rights reserved.</h3>
    </div>
  );
}

export default Footer;
