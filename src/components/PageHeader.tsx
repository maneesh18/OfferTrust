import React from 'react';
import BackButton from './BackButton';
import { PageHeaderProps } from '../models/common';

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backTo, 
  backText,
  showBackButton = true 
}) => {
  return (
    <div className="mb-8">
      {showBackButton && (
        <BackButton 
          to={backTo} 
          text={backText} 
          className="mb-4" 
        />
      )}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader; 