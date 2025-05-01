import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
const Root = () => {
  return (
    <div className='flex justify-center items-center text-center w-dvw'>
      <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
    </div>
  );
};

export default Root;