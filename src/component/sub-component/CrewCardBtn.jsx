import React, { useContext } from 'react';
import ControlCount from '../../countState/ControlCount';

const CrewCardBtn = () => {
  const { countOne, countTwo, countThree, countZero } =
    useContext(ControlCount);
  return (
    <div>
      <button
        onClick={() => {
          countZero;
        }}
      ></button>
      <button
        onClick={() => {
          countOne;
        }}
      ></button>
      <button
        onClick={() => {
          countTwo;
        }}
      ></button>
      <button
        onClick={() => {
          countThree;
        }}
      ></button>
    </div>
  );
};

export default CrewCardBtn;
