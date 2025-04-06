// src/components/pages/RoadmapPage.jsx
import React, { useState } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Card from '../common/Card';
import Button from '../common/Button';

const RoadmapPage = () => {
  const [completedNodes, setCompletedNodes] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  
  // 노드 완료 토글 함수
  const handleNodeToggle = (nodeId) => {
    setCompletedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };
  
  // 노드 선택 함수
  const handleNodeSelect = (node) => {
    setSelectedNode(node);
  };
  
  // 노드 정보 (예시)
  const nodeDetails = {
    'html-basics': {
      title: 'HTML 기초',
      description: 'HTML의 기본 구조와 시맨틱 태그에 대해 학습합니다.',
      resources: [
        { title: 'MDN - HTML 소개', url: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML' },
        { title: 'W3Schools HTML 튜토리얼', url: 'https://www.w3schools.com/html/' }
      ]
    },
    'css-basics': {
      title: 'CSS 기초',
      description: 'CSS 선택자, 박스 모델, 레이아웃 등 기본 개념을 학습합니다.',
      resources: [
        { title: 'MDN - CSS 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps' },
        { title: 'CSS-Tricks 가이드', url: 'https://css-tricks.com/guides/' }
      ]
    },
    'js-basics': {
      title: 'JavaScript 기초',
      description: '변수, 함수, 조건문, 반복문 등 JavaScript 기본 문법을 학습합니다.',
      resources: [
        { title: '모던 JavaScript 튜토리얼', url: 'https://ko.javascript.info/' },
        { title: 'MDN - JavaScript 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps' }
      ]
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">로드맵</h2>
            <div className="flex space-x-3">
              <Button variant="secondary">로드맵 저장</Button>
              <Button variant="secondary">로드맵 공유</Button>
            </div>
          </div>
          
          <div className="mb-6 bg-gray-900 text-white p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold mr-2">TIP</span>
              <span>노드를 우클릭하여 완료 표시를 할 수 있습니다.</span>
            </div>
            <Button variant="secondary" className="text-sm">닫기</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="p-0 overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-xl font-bold">프론트엔드 개발자 로드맵</h3>
                </div>
                
                <div className="roadmap-container relative overflow-auto bg-gray-50" style={{ height: '700px' }}>
                  {/* 이 부분은 실제 SVG 또는 인터랙티브 다이어그램으로 대체됩니다 */}
                  {/* 여기서는 간단한 예시만 제공합니다 */}
                  
                  <div className="p-6">
                    {/* 메인 카테고리: HTML */}
                    <div className="mb-10">
                      <div className="flex items-center mb-3">
                        <div className="w-16 h-10 bg-yellow-300 rounded-md flex items-center justify-center font-bold">
                          HTML
                        </div>
                        <div className="ml-3 h-0.5 w-20 bg-blue-500"></div>
                      </div>
                      
                      <div className="ml-16 space-y-3">
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onClick={() => handleNodeSelect(nodeDetails['html-basics'])}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('html-basics');
                          }}
                        >
                          {completedNodes['html-basics'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>HTML 기초 배우기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('semantic-html');
                          }}
                        >
                          {completedNodes['semantic-html'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>시맨틱 HTML 작성하기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('forms');
                          }}
                        >
                          {completedNodes['forms'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>폼과 유효성 검사</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* 메인 카테고리: CSS */}
                    <div className="mb-10">
                      <div className="flex items-center mb-3">
                        <div className="w-16 h-10 bg-yellow-300 rounded-md flex items-center justify-center font-bold">
                          CSS
                        </div>
                        <div className="ml-3 h-0.5 w-20 bg-blue-500"></div>
                      </div>
                      
                      <div className="ml-16 space-y-3">
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onClick={() => handleNodeSelect(nodeDetails['css-basics'])}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('css-basics');
                          }}
                        >
                          {completedNodes['css-basics'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>CSS 기초 배우기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('layouts');
                          }}
                        >
                          {completedNodes['layouts'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>레이아웃 만들기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('responsive');
                          }}
                        >
                          {completedNodes['responsive'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>반응형 디자인</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* 메인 카테고리: JavaScript */}
                    <div className="mb-10">
                      <div className="flex items-center mb-3">
                        <div className="w-24 h-10 bg-yellow-300 rounded-md flex items-center justify-center font-bold">
                          JavaScript
                        </div>
                        <div className="ml-3 h-0.5 w-20 bg-blue-500"></div>
                      </div>
                      
                      <div className="ml-16 space-y-3">
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onClick={() => handleNodeSelect(nodeDetails['js-basics'])}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('js-basics');
                          }}
                        >
                          {completedNodes['js-basics'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>JavaScript 기초 배우기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('dom');
                          }}
                        >
                          {completedNodes['dom'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>DOM 조작하기</span>
                        </div>
                        
                        <div 
                          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            handleNodeToggle('fetch');
                          }}
                        >
                          {completedNodes['fetch'] && (
                            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                              ✓
                            </div>
                          )}
                          <span>Fetch API & 비동기 처리</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              {selectedNode ? (
                <Card>
                  <h3 className="text-lg font-bold mb-2">{selectedNode.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedNode.description}</p>
                  
                  <h4 className="font-medium mb-2">학습 자료:</h4>
                  <ul className="space-y-2">
                    {selectedNode.resources.map((resource, idx) => (
                      <li key={idx}>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-center mt-4">
                    <Button 
                      onClick={() => handleNodeToggle(Object.keys(nodeDetails).find(key => nodeDetails[key] === selectedNode))}
                      className="w-full"
                    >
                      {completedNodes[Object.keys(nodeDetails).find(key => nodeDetails[key] === selectedNode)] 
                        ? '미완료로 표시' 
                        : '완료로 표시'}
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card>
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-gray-600">로드맵의 항목을 클릭하면 세부 정보가 여기에 표시됩니다.</p>
                  </div>
                </Card>
              )}
              
              <Card className="mt-4">
                <h3 className="text-lg font-bold mb-3">진행 상황</h3>
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-gray-600">HTML</span>
                  <span className="text-sm font-medium">
                    {Object.keys(completedNodes).filter(key => ['html-basics', 'semantic-html', 'forms'].includes(key)).length} / 3
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(Object.keys(completedNodes).filter(key => ['html-basics', 'semantic-html', 'forms'].includes(key)).length / 3) * 100}%` }}
                  ></div>
                </div>
                
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-gray-600">CSS</span>
                  <span className="text-sm font-medium">
                    {Object.keys(completedNodes).filter(key => ['css-basics', 'layouts', 'responsive'].includes(key)).length} / 3
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(Object.keys(completedNodes).filter(key => ['css-basics', 'layouts', 'responsive'].includes(key)).length / 3) * 100}%` }}
                  ></div>
                </div>
                
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-gray-600">JavaScript</span>
                  <span className="text-sm font-medium">
                    {Object.keys(completedNodes).filter(key => ['js-basics', 'dom', 'fetch'].includes(key)).length} / 3
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(Object.keys(completedNodes).filter(key => ['js-basics', 'dom', 'fetch'].includes(key)).length / 3) * 100}%` }}
                  ></div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">전체 진행률</span>
                    <span className="text-sm font-medium">
                      {Object.keys(completedNodes).length} / 9
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${(Object.keys(completedNodes).length / 9) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoadmapPage;