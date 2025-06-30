import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Morphing blob SVG background
const MorphingBlob: React.FC = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
    <svg className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] animate-blob-slow opacity-30" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
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
);

// Animation utility hooks
const useFadeIn = (delay = 0) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
};

const testimonials = [
  {
    name: 'Virat Kohli',
    title: 'Captain, Indian Cricket Team',
    image: 'https://bookingagentinfo.com/wp-content/uploads/2022/06/Virat-Kohli-Contact-Information-300x300.jpg',
    quote:
      "OfferTrust gave me the confidence to trust the hiring process. Their verification is as solid as my cover drive! Highly recommended for every professional.",
  },
  {
    name: 'Jeff Bezos',
    title: 'Founder & Executive Chairman, Amazon',
    image: 'https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds',
    quote:
      "Innovation and trust go hand in hand. OfferTrust is a game changer for job seekers and recruiters alike. I wish I had this when I started!",
  },
];

const Home: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  // Animation classes
  const heroAnim = useFadeIn(100);
  const introAnim = useFadeIn(400);
  const featuresAnim = useFadeIn(700);
  const workAnim = useFadeIn(1000);
  const ctaAnim = useFadeIn(1300);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left side - Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white group-hover:underline">OfferTrust</span>
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle navigation"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {navOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Right side - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/verify"
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Verify Offer
              </Link>
              <Link
                to="/auth"
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Recruiter Login
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-blue-100 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {navOpen && (
          <div className="md:hidden bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 px-4 pb-4">
            <Link
              to="/verify"
              className="block py-2 text-white font-medium hover:text-blue-100"
              onClick={() => setNavOpen(false)}
            >
              Verify Offer
            </Link>
            <Link
              to="/auth"
              className="block py-2 text-white font-medium hover:text-blue-100"
              onClick={() => setNavOpen(false)}
            >
              Recruiter Login
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-white font-medium hover:text-blue-100"
              onClick={() => setNavOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className={`max-w-4xl mx-auto px-4 pt-20 pb-16 text-center transition-all duration-700 ease-out ${heroAnim}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Job Offer Verification, <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect yourself from fake job offers with cryptographic signatures and QR codes. 
            Verify any offer letter instantly, no login required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/verify"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Verify an Offer
            </Link>
            <Link
              to="/auth"
              className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
            >
              Recruiter Login
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={`max-w-4xl mx-auto px-4 py-16 transition-all duration-700 ease-out ${introAnim}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hi, I'm OfferTrust. Nice to meet you.</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Since beginning our journey to fight job offer scams, we've helped thousands of job seekers 
              verify offers and collaborated with recruiters to create trustworthy hiring processes. 
              We're confident, secure, and perpetually working on improving our verification technology.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className={`max-w-6xl mx-auto px-4 py-16 transition-all duration-700 ease-out ${featuresAnim}`}>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                We use SHA-256 hashing and digital signatures — the same technology used to secure 
                financial transactions and software updates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recruiter Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                Only recruiters from domain-verified company emails can generate offer signatures. 
                No free Gmail/Yahoo addresses allowed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Verify any offer letter in seconds with just your name, company name, and recruiter email 
                — or simply upload the document.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={`bg-gray-50 py-16 transition-all duration-700 ease-out ${workAnim}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recruiter Creates Offer</h3>
                <p className="text-gray-600">Using their official company email, they generate a signed hash + QR code with OfferTrust.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Candidate Receives Letter</h3>
                <p className="text-gray-600">The QR code or digital signature is embedded in the offer letter.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Verification</h3>
                <p className="text-gray-600">Just upload the letter or enter key details — we'll tell you if it's real.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Testimonials</h2>
          <p className="text-lg text-gray-600 mb-12">People I've worked with have said some nice things...</p>
          <div className="flex flex-col items-center">
            <img
              src={testimonials[testimonialIndex].image}
              alt={testimonials[testimonialIndex].name}
              className="w-28 h-28 rounded-full object-cover mb-8 shadow-lg border-4 border-white"
              style={{ background: '#eee' }}
            />
            <blockquote className="text-2xl md:text-3xl text-gray-800 font-medium mb-8 leading-relaxed">
              “{testimonials[testimonialIndex].quote}”
            </blockquote>
            <div className="mb-2">
              <span className="font-bold text-xl text-gray-900">{testimonials[testimonialIndex].name}</span>
            </div>
            <div className="text-gray-600 text-base mb-8">{testimonials[testimonialIndex].title}</div>
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    testimonialIndex === idx
                      ? 'bg-blue-600 border-blue-600'
                      : 'bg-white border-blue-300'
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-blue-300 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-blue-300 transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
            </div>
            <div className="text-gray-400 mb-2">
              💌 <a href="mailto:hello@offertrust.io" className="text-blue-300 hover:underline">hello@offertrust.io</a>
            </div>
            <div className="text-gray-400">© 2025 OfferTrust Technologies. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home; 