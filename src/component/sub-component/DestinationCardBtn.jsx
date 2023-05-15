import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

import './subCompStyle.css';

const DestinationCardBtn = () => {
  const { count, countOne, countTwo, countThree, countZero } =
    useContext(countContext);
  return (
    <div className='des-card-cnt'>
      <button
        className={`moon-btn ${count == 0 ? 'active' : 'notActive'}`}
        onClick={() => {
          countZero();
        }}
      >
        MOON
      </button>
      <button
        className={`mars-btn ${count == 1 ? 'active' : 'notActive'}`}
        onClick={() => {
          countOne();
        }}
      >
        MARS
      </button>
      <button
        className={`europa-btn ${count == 2 ? 'active' : 'notActive'}`}
        onClick={() => {
          countTwo();
        }}
      >
        EUROPA
      </button>
      <button
        className={`titan-btn ${count == 3 ? 'active' : 'notActive'}`}
        onClick={() => {
          countThree();
        }}
      >
        TITAN
      </button>
    </div>
  );
};

export default DestinationCardBtn;
