import React, { useContext } from 'react';
import { countContext } from '../../countState/ControlCount';

const TechnologyCardBtn = () => {
  const { countZero, countOne, countTwo, count } = useContext(countContext);
  return (
    <div className='techBtn-cnt'>
      <button
        className={`techBtn ${
          count == 0 ? 'techBtnActive' : 'techBtnInActive'
        }`}
        onClick={() => {
          countZero();
        }}
      >
        1
      </button>
      <button
        className={`techBtn ${
          count == 1 ? 'techBtnActive' : 'techBtnInActive'
        }`}
        onClick={() => {
          countOne();
        }}
      >
        2
      </button>
      <button
        className={`techBtn ${
          count == 2 ? 'techBtnActive' : 'techBtnInActive'
        }`}
        onClick={() => {
          countTwo();
        }}
      >
        3
      </button>
    </div>
  );
};

export default TechnologyCardBtn;
