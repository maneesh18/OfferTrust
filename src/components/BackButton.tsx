import React from 'react';
import { Link } from 'react-router-dom';
import { BackButtonProps } from '../models/common';

const BackButton: React.FC<BackButtonProps> = ({ 
  to, 
  text = "Back to Home", 
  className = "" 
}) => {
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center text-green-600 hover:text-green-800 font-medium ${className}`}
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {text}
    </Link>
  );
};

export default BackButton; 