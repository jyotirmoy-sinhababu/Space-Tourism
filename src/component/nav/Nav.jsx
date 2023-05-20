import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

import logo from '../../assets/destination/logo.svg';

const Nav = () => {
  const [btnOn, setBtnOn] = useState(false);

  const btnVisible = () => {
    setBtnOn(true);
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
          <button
            onClick={() => {
              btnVisible();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-distribute-vertical'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z'
              />
              <path d='M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z' />
            </svg>
          </button>
          <div>
            {!btnOn ? (
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
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
