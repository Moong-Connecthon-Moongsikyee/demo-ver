// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: '메인 대시보드', path: '/dashboard' },
    { name: '역량 진단 프로세스', path: '/party-process' },
    { name: '로드맵', path: '/roadmap-management' },
    { name: '아바타', path: '/avatar-customization' },
  ];
  
  return (
    <aside className="w-64 bg-white h-full border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">커리어로</h2>
        <p className="text-sm text-gray-500">성장을 위한 진로탐색</p>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-700 ${
                  location.pathname === item.path ? 'bg-violet-100 text-violet-700 border-l-4 border-violet-700' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;