// src/pages/AvatarCustomization.jsx
import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const AvatarCustomization = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [avatar, setAvatar] = useState({
    hair: 1,
    face: 1,
    outfit: 1,
    accessory: 0
  });

  const tabs = [
    { id: 'basic', label: '기본 설정' },
    { id: 'hair', label: '헤어 스타일' },
    { id: 'outfit', label: '의상' },
    { id: 'accessory', label: '액세서리' }
  ];

  const options = {
    hair: [1, 2, 3, 4, 5],
    face: [1, 2, 3, 4],
    outfit: [1, 2, 3, 4, 5, 6],
    accessory: [0, 1, 2, 3] // 0은 액세서리 없음
  };

  const handleChange = (category, value) => {
    setAvatar(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const renderOptions = (category) => {
    return options[category].map(option => (
      <button
        key={option}
        className={`w-16 h-16 rounded-md border-2 ${
          avatar[category] === option
            ? 'border-violet-500 bg-violet-50'
            : 'border-gray-200 hover:border-violet-300'
        }`}
        onClick={() => handleChange(category, option)}
      >
        {/* 여기에 실제 아바타 부품 이미지가 들어가야 합니다 */}
        <div className="text-xs text-center">{option === 0 ? '없음' : `옵션 ${option}`}</div>
      </button>
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">기본 설정</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">얼굴형</label>
              <div className="flex flex-wrap gap-2">
                {renderOptions('face')}
              </div>
            </div>
          </div>
        );
      case 'hair':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">헤어 스타일</h3>
            <div className="flex flex-wrap gap-2">
              {renderOptions('hair')}
            </div>
          </div>
        );
      case 'outfit':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">의상</h3>
            <div className="flex flex-wrap gap-2">
              {renderOptions('outfit')}
            </div>
          </div>
        );
      case 'accessory':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">액세서리</h3>
            <div className="flex flex-wrap gap-2">
              {renderOptions('accessory')}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">아바타 커스터마이징</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="h-full flex items-center justify-center">
                {/* 아바타 미리보기 */}
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500">아바타 미리보기</p>
                    <p className="text-xs text-gray-400 mt-2">
                      헤어: {avatar.hair}, 얼굴: {avatar.face}, 
                      <br />의상: {avatar.outfit}, 액세서리: {avatar.accessory || '없음'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <div className="flex border-b mb-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`px-4 py-2 ${
                        activeTab === tab.id
                          ? 'border-b-2 border-violet-500 text-violet-700'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {renderTabContent()}
                
                <div className="mt-8 flex justify-end">
                  <Button variant="secondary" className="mr-3">
                    초기화
                  </Button>
                  <Button>
                    저장하기
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AvatarCustomization;