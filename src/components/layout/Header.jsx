// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">커리어로</Link>
        <nav className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-violet-600">로그인</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;