import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import DestinationCardBtn from '../sub-component/DestinationCardBtn';

import { destinations } from '../../data/dataProvider';

import './cardStyle.css';

import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

const DestinationCard = ({}) => {
  const { count } = useContext(countContext);

  return (
    <>
      <div className='destination-cnt'>
        <div>
          {' '}
          <div className='destinationCard-head'>
            <p className='destinationCard'>01 PICK YOUR DESTINATION</p>
          </div>
          <div className='destination-image-cnt '>
            {count == 0 && destinations ? (
              <img className='destination-image moon ' src={moon} alt='moon' />
            ) : count == 1 && destinations ? (
              <img className='destination-image mars' src={mars} alt='mars' />
            ) : count == 2 && destinations ? (
              <img
                className='destination-image europa'
                src={europa}
                alt='europa'
              />
            ) : count == 3 && destinations ? (
              <img
                className='destination-image titan'
                src={titan}
                alt='titan'
              />
            ) : null}
          </div>
        </div>

        <div className='destination-txt-cnt'>
          <div className='destination-btn-cnt'>
            <DestinationCardBtn />
          </div>
          <div style={{ paddingLeft: '25px' }}>
            {' '}
            {count == 0 && destinations ? (
              <p className='destination-name'>{destinations[0].name}</p>
            ) : count == 1 && destinations ? (
              <p className='destination-name'>{destinations[1].name}</p>
            ) : count == 2 && destinations ? (
              <p className='destination-name'>{destinations[2].name}</p>
            ) : count == 3 && destinations ? (
              <p className='destination-name'>{destinations[3].name}</p>
            ) : null}
            <div className='destination-description-cnt'>
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
            <div className='destination-time-dis-cnt'>
              <div className='destination-dis-cnt'>
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
              <div className='destination-est-cnt'>
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
      </div>
    </>
  );
};

export default DestinationCard;
