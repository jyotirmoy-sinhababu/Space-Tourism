import React from 'react';

import Nav from '../../component/nav/Nav';

import './home.css';
const HomePage = () => {
  return (
    <div className='home-cnt'>
      <Nav />
      <div className='home-main-info-cnt'>
        <div className='home-txt-cnt'>
          <div className='home-first-txt-cnt'>
            <p className='home-intro-txt'>SO, YOU WANT TO TRAVEL TO</p>
            <p className='home-heading'>SPACE</p>
          </div>
          <div className='home-second-txt-cnt'>
            <p className='home-second-txt-cnt-info'>
              Space Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        <div className='home-explore-cnt'>
          <p className='explore-txt'>EXPLORE </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
