// src/pages/RoadmapManagement.jsx
import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const RoadmapManagement = () => {
  // 가상의 로드맵 데이터
  const [roadmapData, setRoadmapData] = useState({
    title: '프론트엔드 개발자 로드맵',
    stages: [
      {
        id: 1,
        title: '기초 학습 단계',
        tasks: [
          { id: 101, title: 'HTML 기초 배우기', completed: true },
          { id: 102, title: 'CSS 기초 배우기', completed: true },
          { id: 103, title: 'JavaScript 기본 문법', completed: false }
        ]
      },
      {
        id: 2,
        title: 'React 기초',
        tasks: [
          { id: 201, title: 'React 컴포넌트 개념 이해하기', completed: false },
          { id: 202, title: 'Props와 State 학습하기', completed: false },
          { id: 203, title: '간단한 Todo 앱 만들기', completed: false }
        ]
      },
      {
        id: 3,
        title: '실전 프로젝트',
        tasks: [
          { id: 301, title: '개인 포트폴리오 웹사이트 제작', completed: false },
          { id: 302, title: 'GitHub에 코드 업로드하기', completed: false },
          { id: 303, title: '기술 블로그 작성 시작하기', completed: false }
        ]
      }
    ]
  });

  // 태스크 완료 상태 토글 함수
  const toggleTaskCompletion = (stageId, taskId) => {
    setRoadmapData(prevData => {
      const newStages = prevData.stages.map(stage => {
        if (stage.id === stageId) {
          const newTasks = stage.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          return { ...stage, tasks: newTasks };
        }
        return stage;
      });
      return { ...prevData, stages: newStages };
    });
  };

  // 단계별 진행률 계산 함수
  const calculateStageProgress = (stage) => {
    const totalTasks = stage.tasks.length;
    if (totalTasks === 0) return 0;
    
    const completedTasks = stage.tasks.filter(task => task.completed).length;
    return Math.round((completedTasks / totalTasks) * 100);
  };

  // 전체 진행률 계산 함수
  const calculateTotalProgress = () => {
    const totalTasks = roadmapData.stages.reduce((sum, stage) => sum + stage.tasks.length, 0);
    if (totalTasks === 0) return 0;
    
    const completedTasks = roadmapData.stages.reduce(
      (sum, stage) => sum + stage.tasks.filter(task => task.completed).length, 
      0
    );
    
    return Math.round((completedTasks / totalTasks) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">로드맵 관리</h2>
            <Button variant="secondary">로드맵 공유</Button>
          </div>
          
          <Card className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{roadmapData.title}</h3>
              <div className="text-sm text-gray-500">
                전체 진행률: <span className="font-medium">{calculateTotalProgress()}%</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-600 h-2.5 rounded-full"
                style={{ width: `${calculateTotalProgress()}%` }}
              ></div>
            </div>
          </Card>
          
          <div className="space-y-8">
            {roadmapData.stages.map((stage) => (
              <Card key={stage.id}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">{stage.title}</h3>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-500 mr-3">
                      <span className="font-medium">{calculateStageProgress(stage)}%</span> 완료
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-violet-600 h-2 rounded-full"
                        style={{ width: `${calculateStageProgress(stage)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {stage.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-violet-600 border-gray-300 rounded focus:ring-violet-500 mr-3"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(stage.id, task.id)}
                      />
                      <span
                        className={`${
                          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoadmapManagement;