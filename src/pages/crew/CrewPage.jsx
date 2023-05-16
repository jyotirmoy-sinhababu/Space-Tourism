import React from 'react';

import Nav from '../../component/nav/Nav';
import CrewListCard from '../../component/cards/CrewListCard';

import './crewPageStyle.css';

const CrewPage = () => {
  return (
    <div className='crewPage-main-cnt'>
      <Nav />
      <CrewListCard />
    </div>
  );
};

export default CrewPage;
