// src/components/pages/InterviewPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const InterviewPage = () => {
  // PartyProcess에서 전달받았다고 가정하는 더미 데이터
  const dummyUserData = {
    skillLevels: {
      programming: '중급',
      dataAnalysis: '초급',
      projectManagement: '일부 경험'
    },
    targetRole: '프론트엔드 개발자',
    studyTime: '주 5-10시간'
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: `안녕하세요! 저는 커리어로 기술 면접 챗봇입니다. ${dummyUserData.targetRole} 직무를 위한 기술 면접을 시작하겠습니다. 준비되셨나요?`,
      options: ['네, 시작할게요', '잠시만 기다려주세요']
    }
  ]);
  
  const [userInput, setUserInput] = useState('');
  const [currentStage, setCurrentStage] = useState('intro');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();
  
  // 기술 면접 질문 (역할에 따라 다른 질문 세트 제공)
  const technicalQuestions = {
    '프론트엔드 개발자': {
      basic: [
        {
          id: 'html_semantic',
          question: 'HTML에서 시맨틱 태그란 무엇이며, 왜 중요한가요?',
          expectedAnswer: '시맨틱 태그는 의미를 가진 HTML 요소로, 검색 엔진 최적화(SEO), 접근성, 코드 가독성 등을 향상시킵니다.'
        },
        {
          id: 'css_box_model',
          question: 'CSS Box Model에 대해 설명해주세요.',
          expectedAnswer: 'CSS Box Model은 모든 HTML 요소를 상자로 간주하며, 콘텐츠, 패딩, 테두리, 마진으로 구성됩니다.'
        },
        {
          id: 'js_datatype',
          question: 'JavaScript의 기본 데이터 타입을 나열해주세요.',
          expectedAnswer: 'String, Number, Boolean, Null, Undefined, Symbol, BigInt가 있습니다.'
        }
      ],
      intermediate: [
        {
          id: 'js_closure',
          question: 'JavaScript의 클로저(Closure)에 대해 설명해주세요.',
          expectedAnswer: '클로저는 함수와 그 함수가 선언된 어휘적 환경의 조합입니다. 내부 함수가 외부 함수의 변수에 접근할 수 있게 합니다.'
        },
        {
          id: 'css_flexbox',
          question: 'Flexbox와 Grid의 차이점은 무엇인가요?',
          expectedAnswer: 'Flexbox는 1차원 레이아웃에 최적화되어 있고, Grid는 2차원 레이아웃에 적합합니다.'
        },
        {
          id: 'react_lifecycle',
          question: 'React 컴포넌트의 생명주기에 대해 설명해주세요.',
          expectedAnswer: 'React 컴포넌트는 마운트, 업데이트, 언마운트 단계로 나뉘며, 각 단계에서 다양한 메서드가 호출됩니다. 함수형 컴포넌트에서는 useEffect 등의 Hook으로 이를 대체합니다.'
        }
      ],
      advanced: [
        {
          id: 'js_event_loop',
          question: 'JavaScript의 이벤트 루프에 대해 설명해주세요.',
          expectedAnswer: '이벤트 루프는 비동기 작업을 처리하는 JavaScript 런타임의 메커니즘으로, 콜 스택, 태스크 큐, 마이크로태스크 큐 등으로 구성됩니다.'
        },
        {
          id: 'react_performance',
          question: 'React 애플리케이션의 성능을 최적화하는 방법에는 어떤 것들이 있나요?',
          expectedAnswer: 'React.memo, useMemo, useCallback을 사용한 메모이제이션, 가상화(virtualization), 코드 스플리팅, 레이지 로딩, 상태 관리 최적화 등이 있습니다.'
        },
        {
          id: 'browser_rendering',
          question: '브라우저 렌더링 과정에 대해 설명해주세요.',
          expectedAnswer: 'HTML 파싱, DOM 트리 생성, CSSOM 트리 생성, 렌더 트리 구성, 레이아웃(리플로우), 페인팅, 컴포지팅 과정을 거칩니다.'
        }
      ]
    },
    '백엔드 개발자': {
      basic: [
        {
          id: 'api_rest',
          question: 'REST API의 주요 원칙에 대해 설명해주세요.',
          expectedAnswer: 'REST는 Representational State Transfer의 약자로, 자원(URI), 행위(HTTP 메서드), 표현(JSON, XML 등)의 세 가지 요소를 활용합니다. Stateless, Client-Server 구조, Cacheable, Uniform Interface 등의 원칙이 있습니다.'
        },
        {
          id: 'db_basic',
          question: 'SQL과 NoSQL 데이터베이스의 주요 차이점은 무엇인가요?',
          expectedAnswer: 'SQL은 정형화된 테이블 스키마와 관계형 구조를 가지며, NoSQL은 보다 유연한 스키마와 다양한 데이터 모델(문서, 키-값, 그래프 등)을 제공합니다.'
        }
      ],
      // 다른 백엔드 질문들...
    },
    // 다른 직무별 질문 세트...
  };
  
  // 메시지 추가 함수
  const addMessage = (message) => {
    setMessages(prev => [...prev, { id: Date.now(), ...message }]);
  };
  
  // 봇 응답 시뮬레이션
  const simulateBotResponse = (content, options = null) => {
    setIsTyping(true);
    
    setTimeout(() => {
      addMessage({
        sender: 'bot',
        content,
        options
      });
      setIsTyping(false);
    }, 1000);
  };
  
  // 사용자 선택지 처리
  const handleOptionSelect = (option) => {
    // 사용자 선택 메시지 추가
    addMessage({
      sender: 'user',
      content: option
    });
    
    // 현재 단계에 따른 처리
    if (currentStage === 'intro') {
      if (option === '네, 시작할게요') {
        simulateBotResponse(
          `${dummyUserData.targetRole} 직무를 위한 기술 면접을 시작하겠습니다. 사전 조사 결과, 귀하의 프로그래밍 수준은 ${dummyUserData.skillLevels.programming}으로 파악되었습니다. 이에 맞춰 질문을 진행하겠습니다.`
        );
        
        // 난이도 결정 (더미 데이터 기반)
        let difficultyLevel = 'basic';
        if (dummyUserData.skillLevels.programming === '중급') {
          difficultyLevel = 'intermediate';
        } else if (dummyUserData.skillLevels.programming === '고급') {
          difficultyLevel = 'advanced';
        }
        
        // 첫 번째 기술 면접 질문
        setTimeout(() => {
          const roleQuestions = technicalQuestions[dummyUserData.targetRole] || technicalQuestions['프론트엔드 개발자'];
          simulateBotResponse(
            roleQuestions[difficultyLevel][0].question
          );
          setCurrentStage('tech_interview_1');
        }, 2000);
      } else {
        simulateBotResponse(
          '알겠습니다. 준비가 되시면 "시작"이라고 입력해주세요.'
        );
      }
    } 
    else if (currentStage.startsWith('tech_interview')) {
      // 면접 종료 및 결과 안내
      if (currentStage === 'tech_interview_2') {
        simulateBotResponse(
          `면접이 완료되었습니다! 지금까지의 응답을 분석한 결과, 귀하의 ${dummyUserData.targetRole} 역량은 다음과 같습니다:
          
          1. HTML/CSS: ${dummyUserData.skillLevels.programming === '초급' ? '초급' : '중급'} 수준
          2. JavaScript: ${dummyUserData.skillLevels.programming === '고급' ? '고급' : '중급'} 수준
          3. 프레임워크: ${dummyUserData.skillLevels.programming === '고급' ? '중급' : '초급'} 수준
          
          학습 가능 시간(${dummyUserData.studyTime})을 고려하여 맞춤형 로드맵을 생성하시겠습니까?`,
          ['로드맵 생성하기', '다시 면접 보기']
        );
        setCurrentStage('result');
        return;
      }
      
      // 다음 질문으로 넘어가기
      simulateBotResponse(
        `좋은 답변입니다! 다음 질문으로 넘어가겠습니다.`
      );
      
      // 난이도에 따른 다음 질문
      let difficultyLevel = 'basic';
      if (dummyUserData.skillLevels.programming === '중급') {
        difficultyLevel = 'intermediate';
      } else if (dummyUserData.skillLevels.programming === '고급') {
        difficultyLevel = 'advanced';
      }
      
      const roleQuestions = technicalQuestions[dummyUserData.targetRole] || technicalQuestions['프론트엔드 개발자'];
      const nextQuestion = currentStage === 'tech_interview_1' ? 1 : 2;
      
      setTimeout(() => {
        simulateBotResponse(
          roleQuestions[difficultyLevel][nextQuestion].question
        );
        setCurrentStage(`tech_interview_${nextQuestion + 1}`);
      }, 2000);
    }
    else if (currentStage === 'result') {
      if (option === '로드맵 생성하기') {
        handleInterviewComplete();
      } else {
        // 다시 면접 보기
        setMessages([
          {
            id: 1,
            sender: 'bot',
            content: `안녕하세요! 저는 커리어로 기술 면접 챗봇입니다. ${dummyUserData.targetRole} 직무를 위한 기술 면접을 시작하겠습니다. 준비되셨나요?`,
            options: ['네, 시작할게요', '잠시만 기다려주세요']
          }
        ]);
        setCurrentStage('intro');
      }
    }
  };
  
  // 사용자 입력 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    // 사용자 메시지 추가
    addMessage({
      sender: 'user',
      content: userInput
    });
    
    // "시작" 입력 처리
    if (userInput.toLowerCase() === '시작' && messages[messages.length - 1].sender === 'bot' && currentStage === 'intro') {
      handleOptionSelect('네, 시작할게요');
    } 
    // 기술 면접 단계 응답 처리
    else if (currentStage.startsWith('tech_interview')) {
      handleOptionSelect(userInput);
    }
    
    // 입력창 초기화
    setUserInput('');
  };
  
  // 스크롤 자동 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleInterviewComplete = () => {
    // 면접 결과를 로컬 스토리지에 저장
    const interviewResults = {
      // ... 면접 결과 데이터
    };
    
    // 기존 사용자 데이터와 면접 결과를 합쳐서 저장
    const userData = JSON.parse(localStorage.getItem('userAssessmentData') || '{}');
    userData.interviewResults = interviewResults;
    localStorage.setItem('userAssessmentData', JSON.stringify(userData));
    
    // 로드맵 페이지로 이동
    navigate('/roadmap');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">역량 진단 - 기술 면접</h2>
            <div className="text-sm bg-gray-100 p-2 rounded-md">
              <span className="font-medium">진단 중인 직무:</span> {dummyUserData.targetRole}
            </div>
          </div>
          
          <Card className="p-0 overflow-hidden flex flex-col" style={{ height: 'calc(80vh - 100px)' }}>
            <div className="bg-violet-700 text-white px-4 py-3">
              <h3 className="text-lg font-bold">기술 면접 챗봇</h3>
              <p className="text-sm opacity-80">{dummyUserData.targetRole} 역량 진단</p>
            </div>
            
            <div 
              className="flex-1 p-4 overflow-y-auto"
              ref={chatContainerRef}
            >
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-violet-100 text-gray-800'
                          : 'bg-white border text-gray-800'
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.content}</div>
                      
                      {message.options && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.options.map((option) => (
                            <button
                              key={option}
                              className="px-3 py-1 text-sm bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-md border border-violet-200"
                              onClick={() => handleOptionSelect(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border rounded-lg p-3 text-gray-800">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={isTyping}
                />
                <Button type="submit" disabled={isTyping || !userInput.trim()}>
                  보내기
                </Button>
              </form>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default InterviewPage;