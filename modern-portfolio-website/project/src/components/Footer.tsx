import React from 'react';
import { Heart } from 'lucide-react';

type FooterProps = {
  darkMode: boolean;
};

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <a href="#home" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Portfolio
            </a>
          </div>
          
          <div className="flex space-x-6 mb-6">
            <a 
              href="#about" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/Vedant2402" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              } transition-colors`}
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/vedant-kankate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              } transition-colors`}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://vedant-kankate.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              } transition-colors`}
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
          
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="flex items-center justify-center">
              © {currentYear} Vedant Kankate Portfolio. All rights reserved. Made with <Heart size={14} className="mx-1 text-red-500" /> and React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;