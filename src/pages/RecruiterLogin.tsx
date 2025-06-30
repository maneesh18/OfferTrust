import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RecruiterLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      if (email === 'recruiter@example.com' && password === 'password123') {
        localStorage.setItem('recruiterToken', 'mock-token-123');
        navigate('/recruiter-dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 relative overflow-hidden">
      {/* Abstract blue waves background */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-full absolute top-0 left-0">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="w-full h-full absolute top-0 left-0">
          <path fill="#2563eb" fillOpacity="0.2" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-3xl overflow-hidden">
        {/* Left: Logo and info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 w-1/2 p-10 text-white">
          <div className="flex flex-col items-center">
            {/* Logo Placeholder */}
            <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">R</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wide mb-2">Recruiter</h2>
            <p className="text-center text-blue-100 text-sm max-w-xs">
              Securely manage your offers and access your recruiter dashboard with confidence.
            </p>
          </div>
          <div className="mt-10 text-xs text-blue-200 opacity-70 text-center">
            &copy; {new Date().getFullYear()} Offer Trust. All rights reserved.
          </div>
        </div>
        {/* Right: Login form */}
        <div className="flex-1 bg-white flex flex-col justify-center p-8 md:p-14">
          <h1 className="text-2xl font-bold text-blue-700 mb-2 text-center">Welcome</h1>
          <p className="text-center text-gray-500 mb-8">Login in to your account to continue</p>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
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
            <div className="flex justify-between items-center text-sm">
              <div></div>
              <Link to="#" className="text-blue-500 hover:underline">Forgot your password?</Link>
            </div>
            <button
              type="submit"
              disabled={isLoading || !email.trim() || !password.trim()}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'LOG IN'}
            </button>
          </form>
          <div className="mt-8 text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin; 