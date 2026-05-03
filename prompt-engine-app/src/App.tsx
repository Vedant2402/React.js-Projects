import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PromptGenerator } from './components/PromptGenerator';
import { PromptHistory } from './components/PromptHistory';
import { ProfilePage } from './components/ProfilePage';
import { AuthPage } from './components/AuthPage';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generator' | 'history' | 'profile'>('generator');
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen nature-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-light border-t-green-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-forest-text">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex flex-col min-h-screen nature-bg">
        <div className="flex-1">
          <AuthPage />
        </div>
        <Footer />
      </div>
    );
  }

  const handleBackToGenerator = () => {
    setActiveTab('generator');
  };

  return (
  <div className="min-h-screen nature-bg transition-colors duration-300 flex flex-col">
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onAuthClick={() => {}} // Not needed since user is authenticated
      />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="transition-all duration-300 ease-in-out animate-fade-in">
          {activeTab === 'generator' ? (
            <PromptGenerator />
          ) : activeTab === 'history' ? (
            <PromptHistory />
          ) : (
            <ProfilePage onBack={handleBackToGenerator} />
          )}
        </div>
      </main>

      <Footer />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-light/40 dark:bg-green-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-medium/30 dark:bg-green-medium/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-green-primary/25 dark:bg-green-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brown-light/20 dark:bg-slate-700/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;