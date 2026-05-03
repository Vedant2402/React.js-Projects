import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import CoverLetterForm from './components/CoverLetterForm';
import CoverLetterPreview from './components/CoverLetterPreview';
import { generateCoverLetter } from './services/openaiService';

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

function App() {
  const [currentView, setCurrentView] = useState<'form' | 'preview'>('form');
  const [letterContent, setLetterContent] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const letter = await generateCoverLetter(data);
      setLetterContent(letter);
      setApplicantName(data.fullName);
      setCurrentView('preview');
    } catch (error) {
      console.error('Error generating cover letter:', error);
      alert('Sorry, there was an error generating your cover letter. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNewLetter = () => {
    setCurrentView('form');
    setLetterContent('');
    setApplicantName('');
  };

  return (
    <AuthProvider>
      <div className="App">
        <PrivateRoute>
          {currentView === 'form' ? (
            <CoverLetterForm onSubmit={handleFormSubmit} loading={loading} />
          ) : (
            <CoverLetterPreview 
              letterContent={letterContent}
              applicantName={applicantName}
              onNewLetter={handleNewLetter}
            />
          )}
        </PrivateRoute>
      </div>
    </AuthProvider>
  );
}

export default App;