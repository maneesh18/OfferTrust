// Common form interfaces
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component prop interfaces
export interface BackButtonProps {
  to: string;
  text?: string;
  className?: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backTo: string;
  backText?: string;
  showBackButton?: boolean;
}

export interface LoadingSpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface SuccessMessageProps {
  title: string;
  message: string | React.ReactNode;
  primaryAction?: {
    text: string;
    to: string;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

// API response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Navigation interfaces
export interface NavigationItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

// Status interfaces
export interface StatusBadgeProps {
  status: string;
  className?: string;
} 