import React from 'react';

import { Outlet } from 'react-router-dom';

import Nav from '../../component/nav/Nav';

const AllPageCnt = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AllPageCnt;
