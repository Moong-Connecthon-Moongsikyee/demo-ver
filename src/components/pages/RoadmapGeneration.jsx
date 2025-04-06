// src/pages/RoadmapGeneration.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const RoadmapGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isGenerating && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100));
      }, 500);
      
      if (progress === 90) {
        setTimeout(() => {
          setIsGenerating(false);
          setIsComplete(true);
        }, 1000);
      }
      
      return () => clearTimeout(timer);
    }
  }, [isGenerating, progress]);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
  };
  
  const handleViewRoadmap = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="text-center">
            <h2 className="text-2xl font-bold mb-6">로드맵 생성</h2>
            
            {!isGenerating && !isComplete ? (
              <>
                <p className="text-gray-600 mb-8">
                  입력한 정보를 바탕으로 개인 맞춤형 로드맵을 생성합니다.
                </p>
                <Button onClick={handleGenerate} className="px-8">
                  로드맵 생성하기
                </Button>
              </>
            ) : isGenerating ? (
              <>
                <p className="text-gray-600 mb-8">
                  로드맵을 생성하고 있습니다. 잠시만 기다려주세요...
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div
                    className="bg-violet-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{progress}% 완료</p>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  축하합니다!
                </h3>
                <p className="text-gray-600 mb-8">
                  맞춤형 로드맵이 성공적으로 생성되었습니다.
                </p>
                <Button onClick={handleViewRoadmap} className="px-8">
                  로드맵 확인하기
                </Button>
              </>
            )}
          </Card>
        </main>
      </div>
    </div>
  );
};

export default RoadmapGeneration;