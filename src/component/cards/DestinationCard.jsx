import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import DestinationCardBtn from '../sub-component/DestinationCardBtn';

import { destinations } from '../../data/dataProvider';

const DestinationCard = ({}) => {
  const { count } = useContext(countContext);

  return (
    <div>
      <div className='destination-image'>
        {count == 0 && destinations ? (
          <img src={destinations[0].images.png} alt='moon' />
        ) : count == 1 && destinations ? (
          <img src={destinations[1].images.png} alt='mars' />
        ) : count == 2 && destinations ? (
          <img src={destinations[2].images.png} alt='europa' />
        ) : count == 3 && destinations ? (
          <img src={destinations[2].images.png} alt='europa' />
        ) : null}
      </div>
      <div>
        <div>
          <DestinationCardBtn />
        </div>
        {count == 0 && destinations ? (
          <p>{destinations[0].name}</p>
        ) : count == 1 && destinations ? (
          <p>{destinations[1].name}</p>
        ) : count == 2 && destinations ? (
          <p>{destinations[2].name}</p>
        ) : count == 3 && destinations ? (
          <p>{destinations[3].name}</p>
        ) : null}
        <div>
          {count == 0 && destinations ? (
            <p>{destinations[0].description}</p>
          ) : count == 1 && destinations ? (
            <p>{destinations[1].description}</p>
          ) : count == 2 && destinations ? (
            <p>{destinations[2].description}</p>
          ) : count == 3 && destinations ? (
            <p>{destinations[3].description}</p>
          ) : null}
        </div>
        <div>
          <div>
            <p>AVG.DISTANCE</p>
            {count == 0 && destinations ? (
              <p>{destinations[0].distance}</p>
            ) : count == 1 && destinations ? (
              <p>{destinations[1].distance}</p>
            ) : count == 2 && destinations ? (
              <p>{destinations[2].distance}</p>
            ) : count == 3 && destinations ? (
              <p>{destinations[3].distance}</p>
            ) : null}
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            {count == 0 && destinations ? (
              <p>{destinations[0].travel}</p>
            ) : count == 1 && destinations ? (
              <p>{destinations[1].travel}</p>
            ) : count == 2 && destinations ? (
              <p>{destinations[2].travel}</p>
            ) : count == 3 && destinations ? (
              <p>{destinations[3].travel}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
