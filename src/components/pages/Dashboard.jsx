// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const Dashboard = () => {
  // 가상의 로드맵 데이터
  const roadmapData = {
    title: '프론트엔드 개발자 로드맵',
    progress: 15,
    nextTask: 'JavaScript 기초 학습',
    upcomingMilestones: [
      { id: 1, title: 'HTML/CSS 기본 구조 이해하기', status: 'completed' },
      { id: 2, title: 'JavaScript 기초 문법 학습', status: 'in-progress' },
      { id: 3, title: 'React 기초 개념 이해하기', status: 'upcoming' },
      { id: 4, title: '간단한 React 애플리케이션 만들기', status: 'upcoming' }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">메인 대시보드</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <h3 className="text-lg font-medium text-gray-800 mb-2">현재 로드맵</h3>
              <p className="text-xl font-bold text-violet-700">{roadmapData.title}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-medium text-gray-800 mb-2">진행 상황</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-violet-600 h-2.5 rounded-full"
                  style={{ width: `${roadmapData.progress}%` }}
                ></div>
              </div>
              <p className="text-xl font-bold text-violet-700">{roadmapData.progress}% 완료</p>
            </Card>
            <Card>
              <h3 className="text-lg font-medium text-gray-800 mb-2">다음 작업</h3>
              <p className="text-xl font-bold text-violet-700">{roadmapData.nextTask}</p>
              <Link to="/roadmap-management">
                <Button className="mt-3 w-full" variant="secondary">자세히 보기</Button>
              </Link>
            </Card>
          </div>
          
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">이번 주 마일스톤</h3>
              <Link to="/roadmap-management">
                <Button variant="secondary">전체 로드맵 보기</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {roadmapData.upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="flex items-center border-l-4 pl-4 py-2 border-gray-200">
                  <div
                    className={`w-4 h-4 rounded-full mr-3 ${
                      milestone.status === 'completed'
                        ? 'bg-green-500'
                        : milestone.status === 'in-progress'
                        ? 'bg-yellow-500'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium">{milestone.title}</p>
                    <p className="text-sm text-gray-500">
                      {milestone.status === 'completed'
                        ? '완료됨'
                        : milestone.status === 'in-progress'
                        ? '진행 중'
                        : '예정됨'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;