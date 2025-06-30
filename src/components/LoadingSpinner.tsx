import React from 'react';
import { LoadingSpinnerProps } from '../models/common';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  text = "Loading...", 
  size = 'md',
  className = "" 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`text-center ${className}`}>
      <div className={`animate-spin rounded-full border-b-2 border-green-600 mx-auto mb-4 ${sizeClasses[size]}`}></div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default LoadingSpinner; 