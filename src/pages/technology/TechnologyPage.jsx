import React from 'react';

import './technologyPage.css';

import Nav from '../../component/nav/Nav';
import TechnologyCard from '../../component/cards/TechnologyCard';

const TechnologyPage = () => {
  return (
    <div className='technology-cnt'>
      <Nav />
      <TechnologyCard />
    </div>
  );
};

export default TechnologyPage;
