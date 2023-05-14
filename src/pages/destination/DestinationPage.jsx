import React from 'react';

import './destinationStyle.css';

import Nav from '../../component/nav/Nav';
import DestinationCard from '../../component/cards/DestinationCard';

const DestinationPage = () => {
  return (
    <div className='destination-page-cnt'>
      <Nav />
      {<DestinationCard />}
    </div>
  );
};

export default DestinationPage;
