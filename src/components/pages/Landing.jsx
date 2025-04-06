// src/pages/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Button from '../../components/common/Button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">커리어로 MVP 워크플로우</h1>
          <p className="text-xl text-gray-600 mb-8">성장을 위한 진로탐색, 커리어로와 함께하세요.</p>
          <Link to="/login">
            <Button className="px-8 py-3 text-lg">시작하기</Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">회원가입/로그인</h3>
            <p className="text-gray-600">간편한 회원가입으로 커리어로 서비스를 이용해보세요.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">역량 진단 프로세스</h3>
            <p className="text-gray-600">현재 자신의 역량을 객관적으로 진단해보세요.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-3">맞춤형 로드맵</h3>
            <p className="text-gray-600">개인 역량에 맞는 맞춤형 성장 로드맵을 제공합니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;