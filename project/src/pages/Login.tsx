import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, FileText, Globe, Github, Linkedin } from 'lucide-react';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-200 rounded-full mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-amber-800" />
          </div>
          <h1 className="text-4xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'serif' }}>
            ATS Friendly Cover Letter
          </h1>
          <p className="text-amber-700 text-lg">
            Craft beautiful cover letters with vintage charm
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p className="text-amber-700 mt-2">
              {isLogin ? 'Sign in to continue crafting' : 'Create your account today'}
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/70 transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amber-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-amber-700">or continue with</span>
              </div>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-amber-700">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-amber-600 hover:text-amber-800 font-semibold transition-colors duration-200"
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-amber-600 text-sm">
            🎨 Designed with retro love for modern professionals by Vedant Kankate
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-amber-700 space-y-2">
          <div className="flex justify-center space-x-6">
            <a
              href="https://vedant-kankate.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-900 transition-colors flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
            <a
              href="https://github.com/vedant2402"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-900 transition-colors flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-kankate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-900 transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
