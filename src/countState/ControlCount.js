import React, { useState } from 'react';
import { createContext } from 'react';

export const countContext = createContext();

const ControlCount = ({ children }) => {
  const [count, setCount] = useState(0);

  const countOne = () => {
    setCount(1);
  };

  const countTwo = () => {
    setCount(2);
  };
  const countThree = () => {
    setCount(3);
  };
  const countZero = () => {
    setCount(0);
  };
  return (
    <countContext.Provider
      value={{ countOne, countTwo, countThree, countZero, count }}
    >
      {children}
    </countContext.Provider>
  );
};

export default ControlCount;
