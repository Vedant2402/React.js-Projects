import React, { useState } from 'react';
import { Wand2, History, Menu, X, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { UserProfile } from './UserProfile';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  activeTab: 'generator' | 'history' | 'profile';
  onTabChange: (tab: 'generator' | 'history' | 'profile') => void;
  onAuthClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, onAuthClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const tabs = [
    { id: 'generator' as const, label: 'Generator', icon: Wand2 },
    { id: 'history' as const, label: 'History', icon: History },
    { id: 'profile' as const, label: 'Profile', icon: User }
  ];

  return (
  <nav className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-lg border-b border-green-light dark:border-slate-700 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-button rounded-lg flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl forest-text dark:text-slate-100">
              Prompt Generator
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-light dark:bg-slate-700 text-green-primary dark:text-green-medium border border-green-primary/20 dark:border-slate-600'
                      : 'text-forest-text dark:text-slate-200 hover:text-green-primary dark:hover:text-green-medium hover:bg-green-light/50 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {currentUser ? (
              <UserProfile />
            ) : (
              <button
                onClick={onAuthClick}
                className="btn-primary"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            {currentUser ? (
              <UserProfile />
            ) : (
              <button
                onClick={onAuthClick}
                className="px-3 py-1.5 bg-gradient-button text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-forest-text dark:text-slate-200 hover:text-green-primary dark:hover:text-green-medium hover:bg-green-light/50 dark:hover:bg-slate-700/60 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-light dark:border-slate-700 py-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-green-light dark:bg-slate-700 text-green-primary dark:text-green-medium border border-green-primary/20 dark:border-slate-600'
                        : 'text-forest-text dark:text-slate-200 hover:text-green-primary dark:hover:text-green-medium hover:bg-green-light/50 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};