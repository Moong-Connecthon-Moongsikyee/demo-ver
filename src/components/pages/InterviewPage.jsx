// src/components/pages/InterviewPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const InterviewPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: '안녕하세요! 저는 커리어로 기술 면접 챗봇입니다. 프론트엔드 개발 역량을 평가하기 위한 몇 가지 질문을 드리겠습니다. 준비되셨나요?',
      options: ['네, 시작할게요', '잠시만 기다려주세요']
    }
  ]);
  
  const [userInput, setUserInput] = useState('');
  const [currentStage, setCurrentStage] = useState('intro');
  const [isTyping, setIsTyping] = useState(false);
  const [userSkills, setUserSkills] = useState({});
  
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();
  
  // 사전 조사 질문
  const preInterviewQuestions = [
    {
      id: 'experience',
      question: '개발 경험은 어느 정도인가요?',
      options: ['입문자 (1년 미만)', '초급 (1-2년)', '중급 (3-5년)', '고급 (5년 이상)']
    },
    {
      id: 'frontend_familiarity',
      question: '프론트엔드 기술에 대한 친숙도는 어느 정도인가요?',
      options: ['HTML/CSS 기초만 알고 있어요', 'JavaScript 기초를 알고 있어요', '프레임워크 사용 경험이 있어요', '고급 웹 개발 경험이 있어요']
    },
    {
      id: 'learning_goal',
      question: '어떤 목적으로 프론트엔드를 학습하고 계신가요?',
      options: ['취업/이직 준비', '사이드 프로젝트 개발', '현업 역량 강화', '호기심/개인 발전']
    }
  ];
  
  // 기술 면접 질문 (사전 조사 기반으로 난이도 조정 가능)
  const technicalQuestions = {
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
          '좋습니다! 먼저 몇 가지 기본적인 정보를 파악하기 위한 질문을 드리겠습니다.',
          null
        );
        
        setTimeout(() => {
          simulateBotResponse(
            preInterviewQuestions[0].question,
            preInterviewQuestions[0].options
          );
          setCurrentStage('pre_interview_1');
        }, 2000);
      } else {
        simulateBotResponse(
          '알겠습니다. 준비가 되시면 "시작"이라고 입력해주세요.'
        );
      }
    } 
    else if (currentStage === 'pre_interview_1') {
      // 첫 번째 사전 질문 응답 저장
      setUserSkills(prev => ({
        ...prev,
        experience: option
      }));
      
      simulateBotResponse(
        preInterviewQuestions[1].question,
        preInterviewQuestions[1].options
      );
      setCurrentStage('pre_interview_2');
    }
    else if (currentStage === 'pre_interview_2') {
      // 두 번째 사전 질문 응답 저장
      setUserSkills(prev => ({
        ...prev,
        frontend_familiarity: option
      }));
      
      simulateBotResponse(
        preInterviewQuestions[2].question,
        preInterviewQuestions[2].options
      );
      setCurrentStage('pre_interview_3');
    }
    else if (currentStage === 'pre_interview_3') {
      // 세 번째 사전 질문 응답 저장
      setUserSkills(prev => ({
        ...prev,
        learning_goal: option
      }));
      
      // 사전 조사 결과 요약
      simulateBotResponse(
        `사전 조사에 응해주셔서 감사합니다. 기술 면접을 시작하겠습니다. 답변은 자유롭게 텍스트로 입력해주세요.`
      );
      
      // 난이도 결정 (여기서는 간단히 frontend_familiarity 기준으로)
      let difficultyLevel = 'basic';
      if (userSkills.frontend_familiarity === '프레임워크 사용 경험이 있어요') {
        difficultyLevel = 'intermediate';
      } else if (userSkills.frontend_familiarity === '고급 웹 개발 경험이 있어요') {
        difficultyLevel = 'advanced';
      }
      
      // 첫 번째 기술 면접 질문
      setTimeout(() => {
        simulateBotResponse(
          technicalQuestions[difficultyLevel][0].question
        );
        setCurrentStage('tech_interview_1');
      }, 2000);
    }
    else if (currentStage.startsWith('tech_interview')) {
      // 면접 종료 및 결과 안내
      if (currentStage === 'tech_interview_2') {
        simulateBotResponse(
          `면접이 완료되었습니다! 지금까지의 응답을 분석한 결과, 귀하의 프론트엔드 역량은 다음과 같습니다:
          
          1. HTML/CSS: ${userSkills.frontend_familiarity.includes('기초') ? '초급' : '중급'} 수준
          2. JavaScript: ${userSkills.frontend_familiarity.includes('프레임워크') ? '중급' : '초급'} 수준
          3. 프레임워크: ${userSkills.frontend_familiarity.includes('고급') ? '중급' : '초급'} 수준
          
          이를 기반으로 맞춤형 로드맵을 생성하시겠습니까?`,
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
      if (userSkills.frontend_familiarity === '프레임워크 사용 경험이 있어요') {
        difficultyLevel = 'intermediate';
      } else if (userSkills.frontend_familiarity === '고급 웹 개발 경험이 있어요') {
        difficultyLevel = 'advanced';
      }
      
      const nextQuestion = currentStage === 'tech_interview_1' ? 1 : 2;
      
      setTimeout(() => {
        simulateBotResponse(
          technicalQuestions[difficultyLevel][nextQuestion].question
        );
        setCurrentStage(`tech_interview_${nextQuestion + 1}`);
      }, 2000);
    }
    else if (currentStage === 'result') {
      if (option === '로드맵 생성하기') {
        navigate('/roadmap-generation');
      } else {
        // 다시 면접 보기
        setMessages([
          {
            id: 1,
            sender: 'bot',
            content: '안녕하세요! 저는 커리어로 기술 면접 챗봇입니다. 프론트엔드 개발 역량을 평가하기 위한 몇 가지 질문을 드리겠습니다. 준비되셨나요?',
            options: ['네, 시작할게요', '잠시만 기다려주세요']
          }
        ]);
        setCurrentStage('intro');
        setUserSkills({});
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
      simulateBotResponse(
        '좋습니다! 먼저 몇 가지 기본적인 정보를 파악하기 위한 질문을 드리겠습니다.',
        null
      );
      
      setTimeout(() => {
        simulateBotResponse(
          preInterviewQuestions[0].question,
          preInterviewQuestions[0].options
        );
        setCurrentStage('pre_interview_1');
      }, 2000);
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
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">역량 진단 - 기술 면접</h2>
          
          <Card className="p-0 overflow-hidden flex flex-col" style={{ height: 'calc(80vh - 100px)' }}>
            <div className="bg-violet-700 text-white px-4 py-3">
              <h3 className="text-lg font-bold">기술 면접 챗봇</h3>
              <p className="text-sm opacity-80">프론트엔드 개발 역량 진단</p>
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