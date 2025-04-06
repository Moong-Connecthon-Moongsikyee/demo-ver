// src/components/pages/PartyProcess.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const PartyProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  
  // 직무별 필요 역량 및 질문 데이터
  const careerPaths = {
    '프론트엔드 개발자': {
      coreSkills: ['HTML/CSS', 'JavaScript', '프론트엔드 프레임워크', '반응형 디자인', '웹 접근성'],
      questions: [
        { id: 'html_css', question: 'HTML과 CSS 활용 능력', options: ['초급', '중급', '고급'] },
        { id: 'javascript', question: 'JavaScript 프로그래밍 능력', options: ['초급', '중급', '고급'] },
        { id: 'framework', question: '프론트엔드 프레임워크 경험', options: ['경험 없음', 'React/Vue/Angular 중 1개 사용 경험', '2개 이상 사용 경험'] },
        { id: 'responsive', question: '반응형 웹 디자인 경험', options: ['경험 없음', '기본 지식 있음', '실무 프로젝트 경험'] },
        { id: 'accessibility', question: '웹 접근성 지식', options: ['지식 없음', '기본 지식 있음', '실무 적용 경험'] },
      ]
    },
    '백엔드 개발자': {
      coreSkills: ['서버 언어', '데이터베이스', 'API 설계', '서버 아키텍처', '보안'],
      questions: [
        { id: 'backend_lang', question: '백엔드 언어 활용 능력', options: ['초급', '중급', '고급'] },
        { id: 'database', question: '데이터베이스 설계 및 쿼리 작성 능력', options: ['초급', '중급', '고급'] },
        { id: 'api_design', question: 'API 설계 경험', options: ['경험 없음', 'RESTful API 설계 경험', 'GraphQL 포함 다양한 API 설계 경험'] },
        { id: 'architecture', question: '서버 아키텍처 설계 경험', options: ['경험 없음', '기본 지식 있음', '실무 설계 경험'] },
        { id: 'security', question: '웹 보안 지식', options: ['지식 없음', '기본 지식 있음', '실무 적용 경험'] },
      ]
    },
    '데이터 분석가': {
      coreSkills: ['통계', '데이터 처리', '시각화', 'SQL', '머신러닝'],
      questions: [
        { id: 'statistics', question: '통계 지식', options: ['초급', '중급', '고급'] },
        { id: 'data_processing', question: '데이터 전처리 능력', options: ['초급', '중급', '고급'] },
        { id: 'visualization', question: '데이터 시각화 경험', options: ['경험 없음', '기본 도구 사용 경험', '고급 시각화 경험'] },
        { id: 'sql', question: 'SQL 활용 능력', options: ['초급', '중급', '고급'] },
        { id: 'ml', question: '머신러닝 알고리즘 지식', options: ['지식 없음', '기본 지식 있음', '실무 적용 경험'] },
      ]
    },
    'UX/UI 디자이너': {
      coreSkills: ['UI 디자인', 'UX 리서치', '프로토타이핑', '디자인 시스템', '사용성 테스트'],
      questions: [
        { id: 'ui_design', question: 'UI 디자인 능력', options: ['초급', '중급', '고급'] },
        { id: 'ux_research', question: 'UX 리서치 경험', options: ['경험 없음', '기본 리서치 경험', '심층 리서치 경험'] },
        { id: 'prototyping', question: '프로토타이핑 도구 활용 능력', options: ['초급', '중급', '고급'] },
        { id: 'design_system', question: '디자인 시스템 경험', options: ['경험 없음', '활용 경험', '구축 경험'] },
        { id: 'usability', question: '사용성 테스트 경험', options: ['경험 없음', '기본 테스트 경험', '심층 테스트 경험'] },
      ]
    },
    '프로젝트 매니저': {
      coreSkills: ['프로젝트 기획', '일정 관리', '리소스 관리', '위험 관리', '의사소통'],
      questions: [
        { id: 'project_planning', question: '프로젝트 기획 능력', options: ['초급', '중급', '고급'] },
        { id: 'schedule', question: '일정 관리 경험', options: ['경험 없음', '소규모 프로젝트 경험', '대규모 프로젝트 경험'] },
        { id: 'resource', question: '리소스 관리 경험', options: ['경험 없음', '소규모 팀 관리 경험', '대규모 팀 관리 경험'] },
        { id: 'risk', question: '위험 관리 경험', options: ['경험 없음', '기본 위험 관리 경험', '고급 위험 관리 경험'] },
        { id: 'communication', question: '의사소통 및 이해관계자 관리 능력', options: ['초급', '중급', '고급'] },
      ]
    }
  };
  
  // 단계 설정 - 학습 환경 설정 단계를 제외함
  const steps = [
    {
      title: '목표 직무 선택',
      description: '역량을 진단하고 싶은 직무를 선택해 주세요.',
      type: 'single-select',
      options: Object.keys(careerPaths)
    },
    {
      title: '현재 기술 역량 진단',
      description: '선택한 직무에 필요한 핵심 역량에 대해 자가 평가를 진행합니다.',
      type: 'skill-assessment',
      // 직무 선택에 따라 동적으로 질문 생성
    },
    {
      title: '경력 목표 설정',
      description: '구체적인 경력 목표 설정을 통해 더 맞춤화된 로드맵을 제공해 드립니다.',
      type: 'form',
      fields: [
        { 
          id: 'career_goal', 
          label: '구체적인 경력 목표', 
          type: 'text',
          placeholder: '예: 프론트엔드 개발자로 스타트업 취업' 
        },
        { 
          id: 'preferred_companies', 
          label: '희망 기업/산업 분야', 
          type: 'text',
          placeholder: '예: IT 대기업, 핀테크 스타트업' 
        },
        { 
          id: 'growth_areas', 
          label: '중점적으로 성장하고 싶은 영역', 
          type: 'checkbox',
          options: ['기술적 전문성', '프로젝트 경험', '커뮤니케이션 스킬', '리더십', '글로벌 역량'] 
        }
      ]
    }
  ];
  
  // 선택한 직무에 따라 역량 진단 질문 설정
  const [selectedRole, setSelectedRole] = useState('');
  const [answers, setAnswers] = useState({});
  const [skillScores, setSkillScores] = useState({});
  
  // 직무 선택에 따른 질문 업데이트
  useEffect(() => {
    if (selectedRole && careerPaths[selectedRole]) {
      // 직무에 따른 역량 진단 결과 초기화
      const initialSkillScores = {};
      careerPaths[selectedRole].coreSkills.forEach(skill => {
        initialSkillScores[skill] = 0;
      });
      setSkillScores(initialSkillScores);
    }
  }, [selectedRole]);
  
  // 진행률 업데이트
  useEffect(() => {
    setProgress(Math.round((currentStep / (steps.length - 1)) * 100));
  }, [currentStep, steps.length]);
  
  // 옵션 선택 처리
  const handleOptionSelect = (questionId, option, type = 'radio') => {
    if (type === 'checkbox') {
      // 체크박스는 다중 선택 가능
      setAnswers(prev => {
        const prevOptions = prev[questionId] || [];
        if (prevOptions.includes(option)) {
          return {
            ...prev,
            [questionId]: prevOptions.filter(item => item !== option)
          };
        } else {
          return {
            ...prev,
            [questionId]: [...prevOptions, option]
          };
        }
      });
    } else {
      // 라디오 버튼은 단일 선택
      setAnswers(prev => ({
        ...prev,
        [questionId]: option
      }));
      
      // 직무 선택 시 selectedRole 업데이트
      if (currentStep === 0) {
        setSelectedRole(option);
      }
    }
  };

  // 텍스트 입력 처리
  const handleTextInput = (fieldId, value) => {
    setAnswers(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };
  
  // 역량 점수 계산
  const calculateSkillScore = () => {
    if (!selectedRole || !careerPaths[selectedRole]) return;
    
    const newSkillScores = {...skillScores};
    const questions = careerPaths[selectedRole].questions;
    
    questions.forEach(question => {
      const answer = answers[question.id];
      if (!answer) return;
      
      // 선택한 답변에 따라 점수 배정
      let score = 0;
      if (question.options.indexOf(answer) === 0) score = 1; // 초급/경험 없음
      else if (question.options.indexOf(answer) === 1) score = 2; // 중급/기본 경험
      else if (question.options.indexOf(answer) === 2) score = 3; // 고급/심화 경험
      
      // 관련 스킬에 점수 반영 (간단한 매핑 로직)
      if (question.id === 'html_css') newSkillScores['HTML/CSS'] = score;
      else if (question.id === 'javascript') newSkillScores['JavaScript'] = score;
      else if (question.id === 'framework') newSkillScores['프론트엔드 프레임워크'] = score;
      else if (question.id === 'responsive') newSkillScores['반응형 디자인'] = score;
      else if (question.id === 'accessibility') newSkillScores['웹 접근성'] = score;
      // 백엔드 개발자 관련 스킬
      else if (question.id === 'backend_lang') newSkillScores['서버 언어'] = score;
      else if (question.id === 'database') newSkillScores['데이터베이스'] = score;
      else if (question.id === 'api_design') newSkillScores['API 설계'] = score;
      else if (question.id === 'architecture') newSkillScores['서버 아키텍처'] = score;
      else if (question.id === 'security') newSkillScores['보안'] = score;
      // 다른 직무에 대한 매핑도 구현...
    });
    
    setSkillScores(newSkillScores);
  };
  
  // 다음 단계로 진행
  const handleNext = () => {
    // 현재 단계에 대한 검증
    if (currentStep === 0 && !selectedRole) {
      alert('직무를 선택해주세요.');
      return;
    }
    
    if (currentStep === 1) {
      // 역량 진단 단계에서는 모든 질문에 답변했는지 확인
      const questions = careerPaths[selectedRole].questions;
      const unansweredQuestions = questions.filter(q => !answers[q.id]);
      
      if (unansweredQuestions.length > 0) {
        alert('모든 역량 진단 질문에 답변해주세요.');
        return;
      }
      
      // 역량 점수 계산
      calculateSkillScore();
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // 모든 단계 완료 후, 수집한 데이터를 로컬 스토리지에 저장
      const userData = {
        targetRole: selectedRole,
        skillLevels: skillScores,
        careerGoals: {
          specificGoal: answers.career_goal,
          preferredCompanies: answers.preferred_companies,
          growthAreas: answers.growth_areas
        }
      };
      
      localStorage.setItem('userAssessmentData', JSON.stringify(userData));
      
      // 기술 면접 페이지로 이동
      navigate('/interview');
    }
  };
  
  // 이전 단계로 돌아가기
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // 현재 단계에 따른 컨텐츠 렌더링
  const renderStepContent = () => {
    const step = steps[currentStep];
    
    switch (step.type) {
      case 'single-select':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {step.options.map((option) => (
                <button
                  key={option}
                  className={`p-6 rounded-lg border-2 text-left transition-all ${
                    answers[`role`] === option
                      ? 'border-violet-500 bg-violet-50 shadow-md'
                      : 'border-gray-200 hover:border-violet-300 hover:bg-gray-50'
                  }`}
                  onClick={() => handleOptionSelect('role', option)}
                >
                  <h4 className="text-lg font-medium mb-2">{option}</h4>
                  {careerPaths[option] && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">핵심 역량:</p>
                      <div className="flex flex-wrap gap-1">
                        {careerPaths[option].coreSkills.map(skill => (
                          <span key={skill} className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'skill-assessment':
        if (!selectedRole || !careerPaths[selectedRole]) {
          return <p>직무를 먼저 선택해주세요.</p>;
        }
        
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-600">
              <span className="font-medium text-violet-700">{selectedRole}</span> 직무에 필요한 다음 핵심 역량에 대해 자가 평가를 진행해주세요.
            </p>
            
            <div className="mt-6 space-y-8">
              {careerPaths[selectedRole].questions.map((question) => (
                <div key={question.id} className="border-b pb-6">
                  <p className="font-medium mb-3">{question.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {question.options.map((option, index) => (
                      <button
                        key={option}
                        className={`p-4 rounded-md border transition-colors ${
                          answers[question.id] === option
                            ? 'bg-violet-100 border-violet-500 text-violet-700'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => handleOptionSelect(question.id, option)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-200">
                            {index === 0 ? '초급' : index === 1 ? '중급' : '고급'}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'form':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="mt-6 space-y-6">
              {step.fields.map((field) => (
                <div key={field.id} className="space-y-3">
                  <label className="block font-medium">{field.label}</label>
                  
                  {field.type === 'radio' && (
                    <div className="space-y-2">
                      {field.options.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="radio"
                            id={`${field.id}_${option}`}
                            name={field.id}
                            className="w-4 h-4 text-violet-600 border-gray-300 focus:ring-violet-500"
                            checked={answers[field.id] === option}
                            onChange={() => handleOptionSelect(field.id, option)}
                          />
                          <label htmlFor={`${field.id}_${option}`} className="ml-2 text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {field.type === 'checkbox' && (
                    <div className="space-y-2">
                      {field.options.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`${field.id}_${option}`}
                            name={field.id}
                            className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                            checked={answers[field.id]?.includes(option) || false}
                            onChange={() => handleOptionSelect(field.id, option, 'checkbox')}
                          />
                          <label htmlFor={`${field.id}_${option}`} className="ml-2 text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {field.type === 'text' && (
                    <input
                      type="text"
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                      value={answers[field.id] || ''}
                      onChange={(e) => handleTextInput(field.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <p>알 수 없는 단계입니다.</p>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">역량 진단 프로세스</h2>
              <div className="text-sm text-gray-500">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <Card className="mb-8">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="secondary"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                이전
              </Button>
              <Button onClick={handleNext}>
                {currentStep === steps.length - 1 ? '기술 면접 시작하기' : '다음'}
              </Button>
            </div>
          </Card>
          
          {/* 직무 선택 후 추가 정보 표시 */}
          {selectedRole && currentStep > 0 && (
            <Card>
              <h3 className="text-lg font-bold mb-4">선택한 직무 정보</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-700 mb-2">직무 개요</h4>
                  <p className="text-sm text-gray-600">
                    {selectedRole === '프론트엔드 개발자' && '웹 애플리케이션의 사용자 인터페이스와 상호작용을 개발하는 역할입니다. HTML, CSS, JavaScript 등의 기술을 활용하여 사용자 경험을 구현합니다.'}
                    {selectedRole === '백엔드 개발자' && '서버, 데이터베이스, API 등 사용자에게 보이지 않는 서버 측 로직을 개발하는 역할입니다. 데이터 처리 및 시스템 아키텍처를 설계합니다.'}
                    {selectedRole === '데이터 분석가' && '데이터를 수집, 처리, 분석하여 비즈니스 의사결정에 도움이 되는 인사이트를 도출하는 역할입니다. 통계 및 머신러닝 기법을 활용합니다.'}
                    {selectedRole === 'UX/UI 디자이너' && '사용자 경험과 인터페이스를 디자인하는 역할입니다. 사용자 중심 디자인 방법론을 적용하여 직관적이고 매력적인 디자인을 창출합니다.'}
                    {selectedRole === '프로젝트 매니저' && '프로젝트의 기획부터 완료까지 전체 과정을 관리하는 역할입니다. 일정, 리소스, 위험 관리 및 이해관계자 소통을 담당합니다.'}
                  </p>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-gray-700 mb-2">주요 활동 및 책임</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    {selectedRole === '프론트엔드 개발자' && (
                      <>
                        <li>웹 애플리케이션 UI 구현</li>
                        <li>반응형 웹 디자인 적용</li>
                        <li>UI 컴포넌트 개발 및 관리</li>
                        <li>웹 성능 최적화</li>
                        <li>백엔드 API와의 연동</li>
                      </>
                    )}
                    {selectedRole === '백엔드 개발자' && (
                      <>
                        <li>서버 로직 및 API 개발</li>
                        <li>데이터베이스 설계 및 관리</li>
                        <li>서버 성능 최적화</li>
                        <li>보안 취약점 대응</li>
                        <li>시스템 아키텍처 설계</li>
                      </>
                    )}
                    {/* 다른 직무에 대한 활동 및 책임 */}
                  </ul>
                </div>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default PartyProcess;