// src/components/pages/RoadmapPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

// 데이터 가져오기
import { roadmapNodes, roadmapCategories, roadmapDescriptions, learningResources } from '../../data/frontendRoadmapData';

const RoadmapPage = () => {
  const { role } = useParams(); // URL 파라미터에서 선택한 역할 가져오기
  const navigate = useNavigate();
  const [completedNodes, setCompletedNodes] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [skillLevels, setSkillLevels] = useState({});
  
  // 로컬 스토리지에서 사용자 데이터 가져오기
  useEffect(() => {
    const userData = localStorage.getItem('userAssessmentData');
    
    if (userData) {
      const parsedData = JSON.parse(userData);
      setSelectedRole(parsedData.targetRole || '');
      setSkillLevels(parsedData.skillLevels || {});
    } else if (role) {
      // URL에서 역할이 지정된 경우
      setSelectedRole(decodeURIComponent(role));
    } else {
      // 기본값으로 프론트엔드 개발자 설정
      setSelectedRole('프론트엔드 개발자');
    }
  }, [role]);
  
  // 로컬 스토리지에서 완료된 노드 상태 가져오기
  useEffect(() => {
    const savedCompletedNodes = localStorage.getItem('completedRoadmapNodes');
    if (savedCompletedNodes) {
      try {
        setCompletedNodes(JSON.parse(savedCompletedNodes));
      } catch (error) {
        console.error('Failed to parse completed nodes from localStorage:', error);
      }
    }
  }, []);

  // 완료된 노드 상태 저장하기
  useEffect(() => {
    if (Object.keys(completedNodes).length > 0) {
      localStorage.setItem('completedRoadmapNodes', JSON.stringify(completedNodes));
    }
  }, [completedNodes]);
  
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
  
  // 직무 변경 핸들러
  const handleRoleChange = (newRole) => {
    setSelectedRole(newRole);
    setSelectedNode(null);
    navigate(`/roadmap/${encodeURIComponent(newRole)}`);
  };
  
  // 현재 선택된 직무에 대한 노드 목록 가져오기
  const getCurrentRoleNodes = () => {
    return roadmapNodes[selectedRole] || roadmapNodes['프론트엔드 개발자'];
  };
  
  // 현재 선택된 직무에 대한 카테고리 목록 가져오기
  const getCurrentRoleCategories = () => {
    return roadmapCategories[selectedRole] || roadmapCategories['프론트엔드 개발자'];
  };
  
  // 카테고리별 진행 상황 계산
  const calculateCategoryProgress = (category) => {
    // 모든 노드 ID를 재귀적으로 수집하는 함수
    const getAllNodeIds = (cat) => {
      if (!cat || !cat.nodes) return [];
      
      return cat.nodes.flatMap(node => {
        // 문자열인 경우 (노드 ID)
        if (typeof node === 'string') {
          return [node];
        }
        // 객체인 경우 (중첩된 카테고리)
        if (node.nodes) {
          return getAllNodeIds(node);
        }
        return [];
      });
    };

    const nodeIds = getAllNodeIds(category);
    const totalNodes = nodeIds.length;
    if (totalNodes === 0) return 0;
    
    const completedNodesCount = nodeIds.filter(nodeId => completedNodes[nodeId]).length;
    return (completedNodesCount / totalNodes) * 100;
  };
  
  // 전체 진행 상황 계산
  const calculateTotalProgress = () => {
    // 모든 노드 ID를 재귀적으로 수집하는 함수
    const getAllNodeIds = (categories) => {
      return categories.flatMap(category => {
        if (!category || !category.nodes) return [];
        
        return category.nodes.flatMap(node => {
          // 문자열인 경우 (노드 ID)
          if (typeof node === 'string') {
            return [node];
          }
          // 객체인 경우 (중첩된 카테고리)
          if (node.nodes) {
            return getAllNodeIds([node]);
          }
          return [];
        });
      });
    };

    const categories = getCurrentRoleCategories();
    const allNodeIds = getAllNodeIds(categories);
    const totalNodes = allNodeIds.length;
    if (totalNodes === 0) return 0;
    
    const completedNodesCount = allNodeIds.filter(nodeId => completedNodes[nodeId]).length;
    return (completedNodesCount / totalNodes) * 100;
  };
  
  // 카테고리 렌더링 함수
  const renderCategory = (category, level = 0) => {
    // 노드 렌더링 함수
    const renderNode = (nodeId) => {
      const node = getCurrentRoleNodes()[nodeId];
      if (!node) return null;
      
      return (
        <div 
          key={nodeId}
          className="relative flex items-center bg-amber-100 rounded-md p-3 border-2 cursor-pointer hover:bg-amber-200 transition-colors"
          onClick={() => handleNodeSelect(node)}
          onContextMenu={(e) => {
            e.preventDefault();
            handleNodeToggle(nodeId);
          }}
        >
          {completedNodes[nodeId] && (
            <div className="absolute -left-4 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
              ✓
            </div>
          )}
          <span>{node.title}</span>
        </div>
      );
    };

    // 중첩된 카테고리 렌더링 함수
    const renderSubCategory = (subCategory, subLevel = 0) => {
      return (
        <div key={subCategory.name} className="ml-8">
          <div className="flex items-center mb-3">
            <div className="w-auto min-w-[100px] h-10 bg-yellow-300 rounded-md flex items-center justify-center font-bold px-3">
              {subCategory.name}
            </div>
            <div className="ml-3 h-0.5 w-20 bg-blue-500"></div>
          </div>
          <div className="ml-16 space-y-3">
            {subCategory.nodes.map(node => {
              if (typeof node === 'string') {
                return renderNode(node);
              } else if (node.nodes) {
                return renderSubCategory(node, subLevel + 1);
              }
              return null;
            })}
          </div>
        </div>
      );
    };

    return (
      <div className="mb-10">
        <div className="flex items-center mb-3">
          <div className="w-auto min-w-[100px] h-10 bg-yellow-300 rounded-md flex items-center justify-center font-bold px-3">
            {category.name}
          </div>
          <div className="ml-3 h-0.5 w-20 bg-blue-500"></div>
        </div>
        <div className="ml-16 space-y-3">
          {category.nodes.map(node => {
            if (typeof node === 'string') {
              return renderNode(node);
            } else if (node.nodes) {
              return renderSubCategory(node);
            }
            return null;
          })}
        </div>
      </div>
    );
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
              <select 
                className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                value={selectedRole}
                onChange={(e) => handleRoleChange(e.target.value)}
              >
                <option value="프론트엔드 개발자">프론트엔드 개발자</option>
                {/* <option value="백엔드 개발자">백엔드 개발자</option>
                <option value="데이터 분석가">데이터 분석가</option>
                <option value="UX/UI 디자이너">UX/UI 디자이너</option>
                <option value="프로젝트 매니저">프로젝트 매니저</option> */}
              </select>
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
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-xl font-bold">{selectedRole} 로드맵</h3>
                </div>
                
                <div className="roadmap-container relative overflow-auto bg-gray-50" style={{ height: '700px' }}>
                  <div className="p-6">
                    {getCurrentRoleCategories().map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        {renderCategory(category)}
                      </div>
                    ))}
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
                      onClick={() => {
                        // 선택된 노드의 ID 찾기
                        const nodeId = Object.entries(getCurrentRoleNodes())
                          .find(([id, node]) => node === selectedNode)?.[0];
                        
                        if (nodeId) {
                          handleNodeToggle(nodeId);
                        }
                      }}
                      className="w-full"
                    >
                      {Object.entries(getCurrentRoleNodes())
                        .some(([id, node]) => node === selectedNode && completedNodes[id])
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
                
                {/* 카테고리별 진행 상황 */}
                {getCurrentRoleCategories().map((category, index) => (
                  <div key={index} className="mb-4">
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-gray-600">{category.name}</span>
                      <span className="text-sm font-medium">
                        {(() => {
                          // 모든 노드 ID를 재귀적으로 수집하는 함수
                          const getAllNodeIds = (cat) => {
                            if (!cat || !cat.nodes) return [];
                            
                            return cat.nodes.flatMap(node => {
                              if (typeof node === 'string') {
                                return [node];
                              }
                              if (node.nodes) {
                                return getAllNodeIds(node);
                              }
                              return [];
                            });
                          };
                          
                          const nodeIds = getAllNodeIds(category);
                          const completedCount = nodeIds.filter(id => completedNodes[id]).length;
                          return `${completedCount} / ${nodeIds.length}`;
                        })()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${calculateCategoryProgress(category)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">전체 진행률</span>
                    <span className="text-sm font-medium">
                      {(() => {
                        // 모든 노드 ID를 재귀적으로 수집하는 함수
                        const getAllNodeIds = (categories) => {
                          return categories.flatMap(category => {
                            if (!category || !category.nodes) return [];
                            
                            return category.nodes.flatMap(node => {
                              if (typeof node === 'string') {
                                return [node];
                              }
                              if (node.nodes) {
                                return getAllNodeIds([node]);
                              }
                              return [];
                            });
                          });
                        };
                        
                        const categories = getCurrentRoleCategories();
                        const allNodeIds = getAllNodeIds(categories);
                        const completedCount = allNodeIds.filter(id => completedNodes[id]).length;
                        return `${completedCount} / ${allNodeIds.length}`;
                      })()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${calculateTotalProgress()}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* 역량 정보가 있을 경우 표시 */}
                {selectedRole && Object.keys(skillLevels).length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">내 역량 수준</h4>
                    {Object.entries(skillLevels).map(([skill, level]) => (
                      <div key={skill} className="flex justify-between items-center mb-2">
                        <span className="text-sm">{skill}</span>
                        <div className="flex items-center">
                          {[1, 2, 3].map(i => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full mx-0.5 ${
                                i <= level ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                          <span className="text-xs ml-1">
                            {level === 1 ? '초급' : level === 2 ? '중급' : level === 3 ? '고급' : ''}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t">
                  <Button 
                    className="w-full"
                    onClick={() => navigate('/interview')}
                  >
                    기술 면접 시작하기
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

export default RoadmapPage;