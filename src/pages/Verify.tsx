import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { OfferVerificationResult } from '../models/offer';
import { Link } from 'react-router-dom';

const Verify: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    recruiterEmail: '',
    file: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { success: boolean; recruiter?: string; company?: string; date?: string }>(null);
  const [fileError, setFileError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const allowed = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowed.includes(file.type)) {
        setFileError('Only PDF, JPG, JPEG, PNG files are allowed.');
        setForm({ ...form, file: null });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB.');
        setForm({ ...form, file: null });
        return;
      }
      setFileError('');
      setForm({ ...form, file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    // Simulate API call delay
    setTimeout(() => {
      // Placeholder logic: if recruiterEmail contains "verified", success; else failure
      if (
        (form.recruiterEmail && form.recruiterEmail.toLowerCase().includes('verified')) ||
        (form.file && form.file.name.toLowerCase().includes('verified'))
      ) {
        setResult({
          success: true,
          recruiter: 'John Doe',
          company: form.companyName || 'Acme Corp',
          date: '2024-06-01',
        });
      } else {
        setResult({ success: false });
      }
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 relative">
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
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Verify Offer Letter</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 text-left" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 text-left" htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Enter the company name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 text-left" htmlFor="recruiterEmail">Recruiter Email</label>
            <input
              type="email"
              id="recruiterEmail"
              name="recruiterEmail"
              value={form.recruiterEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Enter the recruiter's email"
            />
          </div>
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400 font-semibold">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 text-left" htmlFor="file">Upload Offer Letter (PDF/JPG/PNG, max 5MB)</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full text-gray-700"
            />
            {fileError && <div className="text-red-500 text-sm mt-1">{fileError}</div>}
          </div>
          <div className="text-right">
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Verifying...' : 'Verify Offer'}
            </button>
          </div>
        </form>
        {/* Result Card */}
        {result && (
          <div className={`mt-8 rounded-lg p-6 text-center shadow-md ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            {result.success ? (
              <>
                <div className="text-4xl mb-4">✅</div>
                <div className="text-xl font-semibold text-green-700 mb-2">This offer was verified and signed by {result.recruiter} at {result.company} on {result.date}.</div>
              </>
            ) : (
              <>
                <div className="text-4xl mb-4">❌</div>
                <div className="text-xl font-semibold text-red-700 mb-2">This offer could not be verified.</div>
                <div className="text-gray-700">Please double-check the source or <a href="/contact" className="text-blue-600 underline">report fraud</a>.</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify; 