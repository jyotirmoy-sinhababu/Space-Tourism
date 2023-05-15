import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

const DestinationCardBtn = () => {
  const { countOne, countTwo, countThree, countZero } =
    useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          countZero();
        }}
      >
        MOON
      </button>
      <button
        onClick={() => {
          countOne();
        }}
      >
        MARS
      </button>
      <button
        onClick={() => {
          countTwo();
        }}
      >
        EUROPA
      </button>
      <button
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
