import React, { useState } from 'react';
import { Wand2, Mail, Lock, User, Eye, EyeOff, Sparkles, Zap, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthBackground from './AuthBackground';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password, displayName);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Google login removed per request

  return (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
      <AuthBackground />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-1/4 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-violet-700/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-cyan-700/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-indigo-400/60 animate-bounce">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-32 text-violet-400/60 animate-bounce delay-500">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-32 text-cyan-400/60 animate-bounce delay-1000">
          <Star className="w-7 h-7" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl mb-4 shadow-2xl ring-2 ring-indigo-400/30">
            <Wand2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Prompt Generator
          </h1>
          <p className="text-slate-300">
            {isLogin ? 'Welcome back! Sign in to continue' : 'Create your account to get started'}
          </p>
        </div>

        {/* Auth Card */}
  <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/60 p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200 text-sm backdrop-blur-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-100 placeholder-slate-500 backdrop-blur-sm transition-all duration-300"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-100 placeholder-slate-500 backdrop-blur-sm transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-100 placeholder-slate-500 backdrop-blur-sm transition-all duration-300"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-500 hover:via-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400/70 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Please wait...
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/60">
            <Wand2 className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <p className="text-xs text-slate-300">AI-Powered</p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/60">
            <Sparkles className="w-6 h-6 text-violet-400 mx-auto mb-2" />
            <p className="text-xs text-slate-300">Smart Templates</p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/60">
            <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <p className="text-xs text-slate-300">Instant Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};