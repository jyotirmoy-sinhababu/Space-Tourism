import React from 'react';

import Nav from '../../component/nav/Nav';

import './home.css';
const HomePage = () => {
  return (
    <div className='home-cnt'>
      <Nav />
      <div className='home-txt-cnt'>
        <div>
          <div>
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
          </div>
          <div>
            <p>
              Space Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <p>EXPLORE </p>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
