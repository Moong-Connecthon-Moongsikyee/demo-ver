// src/components/common/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = 'px-4 py-2 rounded font-medium transition-colors focus:outline-none';
  
  const variants = {
    primary: 'bg-[#347A24] text-white hover:bg-ag-green active:bg-ag-green',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;