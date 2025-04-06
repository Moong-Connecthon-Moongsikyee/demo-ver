// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Card from '../common/Card';
import Button from '../common/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    navigate('/role-selection');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-md mx-auto px-4 py-12">
        <Card>
          <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
          <div className="space-y-4">
            <Button 
              className="w-full bg-violet-600 hover:bg-violet-700 text-white" 
              onClick={handleDemoLogin}
            >
              데모 계정으로 시작하기
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Login;