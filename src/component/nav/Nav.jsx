import React from 'react';

import './nav.css';

import logo from '../../assets/image/logo.svg';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <img className='nav-logo' src={logo} alt='logo' />
      </div>
      <div className='nav-second-cnt'>
        {' '}
        <div className='nav-empty-cnt'></div>
        <div className='nav-btn-cnt'>
          <button className='nav-btn'>00 HOME</button>
          <button className='nav-btn'>01 DESTINATION</button>
          <button className='nav-btn'>02 CREW</button>
          <button className='nav-btn'>03 TECHNOLOGY</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
