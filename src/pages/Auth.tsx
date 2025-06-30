import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      if (loginEmail === 'recruiter@example.com' && loginPassword === 'password123') {
        localStorage.setItem('recruiterToken', 'mock-token-123');
        navigate('/recruiter-dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupEmail.trim() || !signupPassword.trim() || !signupConfirmPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      setIsSignUp(false);
      setLoginEmail(signupEmail);
      setLoginPassword('');
      setSignupEmail('');
      setSignupPassword('');
      setSignupConfirmPassword('');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent relative">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute left-4 top-4 flex items-center text-blue-600 hover:text-blue-800 bg-white bg-opacity-80 rounded-full shadow p-2 transition-colors"
        aria-label="Back to Home"
      >
        <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <div className="w-full max-w-4xl lg:w-3/5 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Logo and info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 md:w-1/2 w-full p-8 md:p-10 text-white">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Link to="/" className="flex items-center group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-2 text-xl font-bold text-white group-hover:underline">OfferTrust</span>
              </Link>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold tracking-wide mb-2">Recruiter</h2>
            <p className="text-center text-blue-100 text-xs lg:text-sm max-w-xs">
              {isSignUp
                ? 'Create your Offer Trust recruiter account and start managing offers securely.'
                : 'Securely manage your offers and access your recruiter dashboard with confidence.'}
            </p>
          </div>
          <div className="mt-8 lg:mt-10 text-xs text-blue-200 opacity-70 text-center">
            &copy; {new Date().getFullYear()} Offer Trust. All rights reserved.
          </div>
        </div>
        {/* Right: Login or Signup Form */}
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-10 bg-white">
          {!isSignUp ? (
            <>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 text-center">Welcome</h1>
              <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Login in to your account to continue</p>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs sm:text-sm text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <div></div>
                  <button type="button" className="text-blue-500 hover:underline">Forgot your password?</button>
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !loginEmail.trim() || !loginPassword.trim()}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? 'Signing In...' : 'LOG IN'}
                </button>
              </form>
              <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setIsSignUp(true); setError(''); }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 text-center">Hello, Create Your Account</h1>
              <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Sign up to get started with Offer Trust</p>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs sm:text-sm text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleSignUp} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={signupPassword}
                    onChange={e => setSignupPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={signupConfirmPassword}
                    onChange={e => setSignupConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-full border border-gray-200 bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 placeholder-blue-400 text-sm sm:text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? 'Signing Up...' : 'SIGN UP'}
                </button>
              </form>
              <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setIsSignUp(false); setError(''); }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Log In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth; 