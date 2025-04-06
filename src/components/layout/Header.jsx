// src/components/layout/Header.jsx
import React from 'react';
import bell from '../../img/bell.svg';
import option from '../../img/option.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl px-[80px] py-[16px] mx-auto py-4 flex relative justify-between items-center">
        <div>
          <button className="px-[8px]">로드맵</button>
          <button className="px-[8px]">아바타</button> 
          <button className="px-[8px]">역량진단</button>
        </div>
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-xl text-ag-green font-bold font-RiaSans tracking-[0.001em] text-gray-800">CareerRoad</Link>
        <nav className="items-center space-x-4">
          <div className="flex">
            <img className="px-[8px]" src={bell}/>
            <img className="px-[8px]"src={option}/>
          </div>
            
        </nav> 
      </div>
    </header> 
  );
};

export default Header;