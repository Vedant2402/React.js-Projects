import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-primary to-blue-medium rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-primary to-blue-medium bg-clip-text text-transparent">
                AI Project Generator
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Transform your ideas into interactive web applications instantly. Powered by AI to help you prototype and build faster than ever.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-primary" />
              <span>by Vedant Kankate</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>AI-Powered Generation</li>
              <li>Live Interactive Demos</li>
              <li>Project Planning</li>
              <li>Code Export</li>
              <li>History & Favorites(in progress)</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="https://docs.cohere.com/" className="hover:text-blue-primary dark:hover:text-blue-light transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://chat.openai.com/" className="hover:text-blue-primary dark:hover:text-blue-light transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://cohere.com/" className="hover:text-blue-primary dark:hover:text-blue-light transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://vedant-kankate.netlify.app/" className="hover:text-blue-primary dark:hover:text-blue-light transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 AI Project Generator. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Made by <a href="https://vedant-kankate.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-primary dark:text-green-medium hover:underline">Vedant Kankate</a> | Powered by Cohere API
            </p>
          </div>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-primary dark:hover:text-blue-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-primary dark:hover:text-blue-light transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-primary dark:hover:text-blue-light transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};