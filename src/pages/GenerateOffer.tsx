import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SuccessMessage from '../components/SuccessMessage';
import { OfferForm } from '../models/offer';

const GenerateOffer: React.FC = () => {
  const [formData, setFormData] = useState<OfferForm>({
    candidateName: '',
    candidateEmail: '',
    position: '',
    department: '',
    salary: '',
    location: '',
    startDate: '',
    expiryDate: '',
    benefits: '',
    requirements: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [generatedOfferId, setGeneratedOfferId] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('recruiterToken');
    if (!token) {
      navigate('/recruiter-login');
      return;
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateOfferId = (): string => {
    const random = Math.floor(Math.random() * 1000);
    return `OFFER-${new Date().getFullYear()}-${String(random).padStart(3, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const offerId = generateOfferId();
      setGeneratedOfferId(offerId);
      setIsSuccess(true);
      setIsLoading(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          candidateName: '',
          candidateEmail: '',
          position: '',
          department: '',
          salary: '',
          location: '',
          startDate: '',
          expiryDate: '',
          benefits: '',
          requirements: ''
        });
        setIsSuccess(false);
        setGeneratedOfferId('');
      }, 5000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <SuccessMessage
        title="Offer Generated Successfully!"
        message={
          <>
            Your offer has been created and is ready to be sent to the candidate.<br />
            <span className="block mt-2 text-green-700 font-semibold">Offer sent to <span className="underline">{formData.candidateEmail}</span></span>
          </>
        }
        primaryAction={{
          text: "Back to Dashboard",
          to: "/recruiter-dashboard"
        }}
        secondaryAction={{
          text: "Generate Another Offer",
          onClick: () => {
            setIsSuccess(false);
            setGeneratedOfferId('');
          }
        }}
        icon={
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-green-800 mb-2">Offer ID:</h3>
            <p className="text-2xl font-mono text-green-900">{generatedOfferId}</p>
          </div>
        }
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Generate New Offer"
          subtitle="Create a new job offer with secure verification"
          backTo="/recruiter-dashboard"
          backText="Back to Dashboard"
        />

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700 mb-2">
                  Candidate Name *
                </label>
                <input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="candidateEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Candidate Email *
                </label>
                <input
                  type="email"
                  id="candidateEmail"
                  name="candidateEmail"
                  value={formData.candidateEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Title *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product">Product</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>

              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range *
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g., $80,000 - $120,000"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., San Francisco, CA"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Expiry Date *
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-2">
                Benefits & Perks
              </label>
              <textarea
                id="benefits"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                rows={3}
                placeholder="Health insurance, 401k, flexible hours, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                Key Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={3}
                placeholder="Key skills, experience, certifications required"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Link
                to="/recruiter-dashboard"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Generating Offer...' : 'Generate Offer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateOffer; 