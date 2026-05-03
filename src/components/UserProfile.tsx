import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const UserProfile: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-green-light hover:bg-green-light/20 transition-all duration-300"
      >
        {currentUser.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName || 'User'}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        )}
        <span className="text-sm font-medium forest-text hidden sm:block">
          {currentUser.displayName || currentUser.email?.split('@')[0]}
        </span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-light py-2 z-50">
          <div className="px-4 py-2 border-b border-green-light">
            <p className="text-sm font-medium forest-text">
              {currentUser.displayName}
            </p>
            <p className="text-xs text-secondary">
              {currentUser.email}
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};