// src/pages/PartyProcess.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const PartyProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
  const steps = [
    {
      title: '현재 기술 수준 평가',
      description: '현재 보유하고 있는 기술과 역량 수준을 평가해 주세요.',
      questions: [
        { id: 'skill1', question: '프로그래밍 언어 활용 능력', options: ['초급', '중급', '고급'] },
        { id: 'skill2', question: '데이터 분석 능력', options: ['초급', '중급', '고급'] },
        { id: 'skill3', question: '프로젝트 관리 경험', options: ['없음', '일부 경험', '다수 경험'] },
      ]
    },
    {
      title: '목표 직무 선택',
      description: '희망하는 직무를 선택해 주세요.',
      options: ['프론트엔드 개발자', '백엔드 개발자', '데이터 분석가', 'UX/UI 디자이너', '프로젝트 매니저']
    },
    {
      title: '학습 시간 설정',
      description: '주간 학습 가능 시간을 설정해 주세요.',
      options: ['주 5시간 이하', '주 5-10시간', '주 10-20시간', '주 20시간 이상']
    }
  ];
  
  const [answers, setAnswers] = useState({});
  
  const handleOptionSelect = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option
    });
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 모든 단계 완료 후 인터뷰 페이지로 이동
      navigate('/interview');
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderStepContent = () => {
    const step = steps[currentStep];
    
    if (currentStep === 0) {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
          
          {step.questions.map((question) => (
            <div key={question.id} className="border-b pb-4">
              <p className="font-medium mb-2">{question.question}</p>
              <div className="flex space-x-2">
                {question.options.map((option) => (
                  <button
                    key={option}
                    className={`px-4 py-2 rounded-md border ${
                      answers[question.id] === option
                        ? 'bg-violet-100 border-violet-500 text-violet-700'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleOptionSelect(question.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {step.options.map((option) => (
              <button
                key={option}
                className={`p-4 rounded-md border text-left ${
                  answers[`step${currentStep}`] === option
                    ? 'bg-violet-100 border-violet-500 text-violet-700'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => handleOptionSelect(`step${currentStep}`, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">역량 진단 프로세스</h2>
              <div className="text-sm text-gray-500">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
            
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
        </main>
      </div>
    </div>
  );
};

export default PartyProcess;