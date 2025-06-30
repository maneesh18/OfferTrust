import React from 'react';
import { Link } from 'react-router-dom';
import { SuccessMessageProps } from '../models/common';

const SuccessMessage: React.FC<SuccessMessageProps> = ({ 
  title, 
  message, 
  primaryAction,
  secondaryAction,
  icon 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            {icon || (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 mb-6">
            {message}
          </p>
          <div className="space-y-4">
            {primaryAction && (
              <Link
                to={primaryAction.to}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                {primaryAction.text}
              </Link>
            )}
            {secondaryAction && (
              <button
                onClick={secondaryAction.onClick}
                className="block w-full mt-4 text-green-600 hover:text-green-800"
              >
                {secondaryAction.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage; 