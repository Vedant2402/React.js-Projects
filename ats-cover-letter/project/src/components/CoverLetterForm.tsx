import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Phone, Linkedin, Globe, Building, Briefcase, MessageSquare, LogOut } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  companyName: string;
  positionName: string;
  jobDescription: string;
  tone: string;
  additionalDetails: string;
}

interface CoverLetterFormProps {
  onSubmit: (data: FormData) => void;
  loading: boolean;
}

const CoverLetterForm: React.FC<CoverLetterFormProps> = ({ onSubmit, loading }) => {
  const { currentUser, logout } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: currentUser?.email || '',
    phone: '',
    linkedin: '',
    portfolio: '',
    companyName: '',
    positionName: '',
    jobDescription: '',
    tone: 'Professional',
    additionalDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
              ATS Friendly Cover Letter
            </h1>
            <p className="text-amber-700 mt-2">
              Create your perfect cover letter with vintage style
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-200">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center" style={{ fontFamily: 'serif' }}>
              <User className="w-6 h-6 mr-2" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  LinkedIn Profile
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Portfolio/Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                    placeholder="https://johndoe.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Job Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center" style={{ fontFamily: 'serif' }}>
              <Briefcase className="w-6 h-6 mr-2" />
              Job Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                    placeholder="Amazing Company Inc."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Position Name *
                </label>
                <input
                  type="text"
                  name="positionName"
                  value={formData.positionName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                  placeholder="Senior Software Engineer"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Job Description
                </label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200 resize-none"
                  placeholder="Paste the job description here to help create a more targeted cover letter..."
                />
              </div>
            </div>
          </div>

          {/* Letter Customization Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center" style={{ fontFamily: 'serif' }}>
              <MessageSquare className="w-6 h-6 mr-2" />
              Letter Customization
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Tone of Letter
                </label>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                >
                  <option value="Professional">Professional</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Bold">Bold</option>
                  <option value="Fun">Fun</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200 resize-none"
                  placeholder="Share your achievements, relevant experience, skills, or any other details that would make your cover letter stand out..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-lg"
            >
              {loading ? 'Crafting Your Letter... ✨' : 'Generate Cover Letter 🎨'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoverLetterForm;