export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  company?: string;
  department?: string;
  createdAt: string;
  lastLogin?: string;
}

export type UserRole = 'recruiter' | 'admin' | 'candidate';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresAt: string;
}

export interface RecruiterProfile {
  id: string;
  name: string;
  email: string;
  company: string;
  department: string;
  phone?: string;
  avatar?: string;
} 