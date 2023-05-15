import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import DestinationCardBtn from '../sub-component/DestinationCardBtn';

import { destinations } from '../../data/dataProvider';

import './cardStyle.css';

const DestinationCard = ({}) => {
  const { count } = useContext(countContext);

  return (
    <div className='destination-cnt'>
      <div className='destination-image-cnt'>
        {count == 0 && destinations ? (
          <img
            className='destination-image'
            src={destinations[0].images.png}
            alt='moon'
          />
        ) : count == 1 && destinations ? (
          <img
            className='destination-image'
            src={destinations[1].images.png}
            alt='mars'
          />
        ) : count == 2 && destinations ? (
          <img
            className='destination-image'
            src={destinations[2].images.png}
            alt='europa'
          />
        ) : count == 3 && destinations ? (
          <img
            className='destination-image'
            src={destinations[2].images.png}
            alt='europa'
          />
        ) : null}
      </div>
      <div className='destination-txt-cnt'>
        <div className='destination-btn-cnt'>
          <DestinationCardBtn />
        </div>
        {count == 0 && destinations ? (
          <p className='destination-name'>{destinations[0].name}</p>
        ) : count == 1 && destinations ? (
          <p className='destination-name'>{destinations[1].name}</p>
        ) : count == 2 && destinations ? (
          <p className='destination-name'>{destinations[2].name}</p>
        ) : count == 3 && destinations ? (
          <p className='destination-name'>{destinations[3].name}</p>
        ) : null}
        <div>
          {count == 0 && destinations ? (
            <p className='destination-description'>
              {destinations[0].description}
            </p>
          ) : count == 1 && destinations ? (
            <p className='destination-description'>
              {destinations[1].description}
            </p>
          ) : count == 2 && destinations ? (
            <p className='destination-description'>
              {destinations[2].description}
            </p>
          ) : count == 3 && destinations ? (
            <p className='destination-description'>
              {destinations[3].description}
            </p>
          ) : null}
        </div>
        <div>
          <div>
            <p className='avg-dis-heading'>AVG.DISTANCE</p>
            {count == 0 && destinations ? (
              <p className='avg-dis-data'>{destinations[0].distance}</p>
            ) : count == 1 && destinations ? (
              <p className='avg-dis-data'>{destinations[1].distance}</p>
            ) : count == 2 && destinations ? (
              <p className='avg-dis-data'>{destinations[2].distance}</p>
            ) : count == 3 && destinations ? (
              <p className='avg-dis-data'>{destinations[3].distance}</p>
            ) : null}
          </div>
          <div>
            <p className='est-time-heading'>EST. TRAVEL TIME</p>
            {count == 0 && destinations ? (
              <p className='est-time'>{destinations[0].travel}</p>
            ) : count == 1 && destinations ? (
              <p className='est-time'>{destinations[1].travel}</p>
            ) : count == 2 && destinations ? (
              <p className='est-time'>{destinations[2].travel}</p>
            ) : count == 3 && destinations ? (
              <p className='est-time'>{destinations[3].travel}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
