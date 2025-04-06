// src/pages/RoleSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const roles = [
    { id: 'student', title: '학생', description: '진로 탐색과 역량 개발을 원하는 학생' },
    { id: 'jobseeker', title: '취업 준비생', description: '구직을 위한 역량 강화를 원하는 취업 준비생' },
    { id: 'employee', title: '직장인', description: '커리어 발전과 역량 향상을 원하는 직장인' },
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/party-process');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <Card>
          <h2 className="text-2xl font-bold text-center mb-6">회원가입/로그인</h2>
          <p className="text-center text-gray-600 mb-8">
            커리어로에서 어떤 역할로 이용하실지 선택해 주세요.
          </p>
          
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedRole === role.id
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-gray-200 hover:border-violet-300 hover:bg-violet-50'
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <h3 className="font-medium text-gray-800">{role.title}</h3>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
          
          <Button
            className="w-full mt-8"
            onClick={handleContinue}
            disabled={!selectedRole}
          >
            계속하기
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default RoleSelection;