import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import CrewCardBtn from '../sub-component/crewCardBtn';

import { crew } from '../../data/dataProvider';

import anousheh from '../../assets/crew/image-anousheh-ansari.png';
import douglas from '../../assets/crew/image-douglas-hurley.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';

const CrewListCard = () => {
  const { count } = useContext(countContext);
  return (
    <div>
      <div>
        <h3></h3>
        <div>
          <div>
            {' '}
            {count == 0 && crew ? (
              <p>{crew[0].role}</p>
            ) : count == 1 && crew ? (
              <p>{crew[1].role}</p>
            ) : count == 2 && crew ? (
              <p>{crew[2].role}</p>
            ) : count == 3 && crew ? (
              <p>{crew[3].role}</p>
            ) : null}
            {count == 0 && crew ? (
              <p>{crew[0].name}</p>
            ) : count == 1 && crew ? (
              <p>{crew[1].name}</p>
            ) : count == 2 && crew ? (
              <p>{crew[2].name}</p>
            ) : count == 3 && crew ? (
              <p>{crew[3].name}</p>
            ) : null}
          </div>
          <div>
            {count == 0 && crew ? (
              <p>{crew[0].bio}</p>
            ) : count == 1 && crew ? (
              <p>{crew[1].bio}</p>
            ) : count == 2 && crew ? (
              <p>{crew[2].bio}</p>
            ) : count == 3 && crew ? (
              <p>{crew[3].bio}</p>
            ) : null}
          </div>
          <div>
            <CrewCardBtn />
          </div>
        </div>
      </div>
      <div>
        {count == 0 && crew ? (
          <img src={douglas} alt='douglas' />
        ) : count == 1 && crew ? (
          <img src={mark} alt='mark' />
        ) : count == 2 && crew ? (
          <img src={victor} alt='victor' />
        ) : count == 3 && crew ? (
          <img src={anousheh} alt='anousheh' />
        ) : null}
      </div>
    </div>
  );
};

export default CrewListCard;
