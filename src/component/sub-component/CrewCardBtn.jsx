import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

const CrewCardBtn = () => {
  const { countOne, countTwo, countThree, countZero, count } =
    useContext(countContext);

  return (
    <div className='crewBtn-cnt'>
      <button
        className={`crewBtn ${
          count == 0 ? 'crewBtnActive' : 'crewBtnNotActive'
        }`}
        onClick={() => {
          countZero();
        }}
      ></button>
      <button
        className='crewBtn'
        onClick={() => {
          countOne();
        }}
      ></button>
      <button
        className='crewBtn'
        onClick={() => {
          countTwo();
        }}
      ></button>
      <button
        className='crewBtn'
        onClick={() => {
          countThree();
        }}
      ></button>
    </div>
  );
};

export default CrewCardBtn;
