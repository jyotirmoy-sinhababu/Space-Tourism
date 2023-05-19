import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import TechnologyCardBtn from '../sub-component/TechnologyCardBtn';

import { technology } from '../../data/dataProvider';

import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePort from '../../assets/technology/image-spaceport-portrait.jpg';

const TechnologyCard = () => {
  const { count } = useContext(countContext);
  return (
    <>
      <div className='techCard-header-cnt'>
        <h3 className='techCard-header'>03 SPACE LAUNCH 101</h3>
      </div>
      <div className='techCard-cnt'>
        <div className='techCard-btn-cnt'>
          <TechnologyCardBtn />
        </div>
        <div className='techCard-info-cnt'>
          <p className='techCard-terminology'>THE TERMINOLOGY...</p>
          {count == 0 && technology ? (
            <p className='techCard-name'>{technology[0].name}</p>
          ) : count == 1 && technology ? (
            <p className='techCard-name'>{technology[1].name}</p>
          ) : count == 2 && technology ? (
            <p className='techCard-name'>{technology[2].name}</p>
          ) : null}
          {count == 0 && technology ? (
            <p className='techCard-description'>{technology[0].description}</p>
          ) : count == 1 && technology ? (
            <p className='techCard-description'>{technology[1].description}</p>
          ) : count == 2 && technology ? (
            <p className='techCard-description'>{technology[2].description}</p>
          ) : count == 3 && technology ? (
            <p className='techCard-description'>{technology[2].description}</p>
          ) : null}
        </div>
        <div className='techCard-img-cnt'>
          {count == 0 && technology ? (
            <img
              className='techCard-img'
              src={launchVehicle}
              alt='launchVehicle'
            />
          ) : count == 1 && technology ? (
            <img
              className='techCard-img'
              src={spaceCapsule}
              alt='spaceCapsule'
            />
          ) : count == 2 && technology ? (
            <img className='techCard-img' src={spacePort} alt='spacePort' />
          ) : count == 3 && technology ? (
            <img className='techCard-img' src={spacePort} alt='spacePort' />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;
