import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border transition-all duration-300 group bg-white/60 hover:bg-white/80 border-green-light dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:border-slate-600"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};