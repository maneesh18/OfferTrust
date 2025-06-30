import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      // Simulate successful signup
      setIsLoading(false);
      navigate('/recruiter-login');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 relative overflow-hidden">
      {/* Animated morphing blob */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg className="w-[600px] h-[600px] animate-blob-slow opacity-40" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path d="M120,-170C160,-140,200,-100,210,-50C220,0,200,60,170,110C140,160,100,200,50,210C0,220,-60,200,-110,170C-160,140,-200,100,-210,50C-220,0,-200,-60,-170,-110C-140,-160,-100,-200,-50,-210C0,-220,60,-200,120,-170Z" fill="#2563eb">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M120,-170C160,-140,200,-100,210,-50C220,0,200,60,170,110C140,160,100,200,50,210C0,220,-60,200,-110,170C-160,140,-200,100,-210,50C-220,0,-200,-60,-170,-110C-140,-160,-100,-200,-50,-210C0,-220,60,-200,120,-170Z;
                M140,-160C180,-120,210,-80,220,-30C230,20,210,80,180,130C150,180,110,210,60,220C10,230,-50,210,-100,180C-150,150,-190,110,-200,60C-210,10,-190,-50,-160,-100C-130,-150,-90,-190,-40,-200C10,-210,70,-190,140,-160Z;
                M120,-170C160,-140,200,-100,210,-50C220,0,200,60,170,110C140,160,100,200,50,210C0,220,-60,200,-110,170C-160,140,-200,100,-210,50C-220,0,-200,-60,-170,-110C-140,-160,-100,-200,-50,-210C0,-220,60,-200,120,-170Z" />
            </path>
          </g>
        </svg>
      </div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-3xl overflow-hidden">
        {/* Left: Logo and info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 w-1/2 p-10 text-white">
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">R</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wide mb-2">Recruiter</h2>
            <p className="text-center text-blue-100 text-sm max-w-xs">
              Create your Offer Trust recruiter account and start managing offers securely.
            </p>
          </div>
          <div className="mt-10 text-xs text-blue-200 opacity-70 text-center">
            &copy; {new Date().getFullYear()} Offer Trust. All rights reserved.
          </div>
        </div>
        {/* Right: Signup form */}
        <div className="flex-1 bg-white flex flex-col justify-center p-8 md:p-14">
          <h1 className="text-2xl font-bold text-blue-700 mb-2 text-center">Hello, Create Your Account</h1>
          <p className="text-center text-gray-500 mb-8">Sign up to get started with Offer Trust</p>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing Up...' : 'SIGN UP'}
            </button>
          </form>
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/recruiter-login" className="text-blue-600 font-semibold hover:underline">Log In</Link>
          </div>
        </div>
      </div>
      {/* Blob animation keyframes */}
      <style>{`
        @keyframes blob-slow {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05, 0.95) translate(20px, -10px); }
          66% { transform: scale(0.95, 1.05) translate(-20px, 10px); }
        }
        .animate-blob-slow {
          animation: blob-slow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SignUp; 