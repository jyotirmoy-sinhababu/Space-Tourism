import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

import logo from '../../assets/destination/logo.svg';

import { FaBars } from 'react-icons/fa';

const Nav = () => {
  const [btnOn, setBtnOn] = useState(true);

  const btnVisible = () => {
    if (!btnOn) {
      setBtnOn(true);
    }
    if (btnOn) {
      setBtnOn(false);
    }
  };

  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <img className='nav-logo' src={logo} alt='logo' />
      </div>
      <div className='nav-second-cnt'>
        {' '}
        <div className='nav-empty-cnt'></div>
        <div className='nav-btn-cnt'>
          <NavLink to='/home' className='nav-btn'>
            00 HOME
          </NavLink>
          <NavLink to='/destination' className='nav-btn'>
            01 DESTINATION
          </NavLink>
          <NavLink to='/crew' className='nav-btn'>
            02 CREW
          </NavLink>
          <NavLink to='/tech' className='nav-btn'>
            03 TECHNOLOGY
          </NavLink>
        </div>
        <div className='navLink-mobile-view'>
          <div className='navLink-mobile-main-btn-cnt'>
            <button className='mobile-view-btn' onClick={btnVisible}>
              <FaBars />
            </button>
          </div>
          <div>
            {!btnOn ? (
              <div className='nav-btn-cnt-mobile'>
                <NavLink to='/home' className='nav-btn'>
                  00 HOME
                </NavLink>
                <NavLink to='/destination' className='nav-btn'>
                  01 DESTINATION
                </NavLink>
                <NavLink to='/crew' className='nav-btn'>
                  02 CREW
                </NavLink>
                <NavLink to='/tech' className='nav-btn'>
                  03 TECHNOLOGY
                </NavLink>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
