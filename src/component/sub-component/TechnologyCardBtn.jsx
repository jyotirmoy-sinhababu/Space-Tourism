import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

const TechnologyCardBtn = () => {
  const { countZero, countOne, countTwo, count } = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          countZero();
        }}
      ></button>
      <button
        onClick={() => {
          countOne();
        }}
      ></button>
      <button
        onClick={() => {
          countTwo();
        }}
      ></button>
    </div>
  );
};

export default TechnologyCardBtn;
