import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Apple, BarChart2 } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and title */}
        <Link to="/" className="flex items-center">
          <Apple
            size={28}
            className={`mr-2 ${
              isScrolled ? 'text-primary-600' : 'text-primary-500'
            }`}
          />
          <h1 className="text-xl font-bold">
            <span className="text-primary-600">Nutri</span>
            <span className="text-secondary-600">Agent</span>
          </h1>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') 
                ? 'text-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Home
          </Link>
          <Link
            to="/goals"
            className={`text-sm font-medium transition-colors ${
              isActive('/goals') 
                ? 'text-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Goals
          </Link>
          <Link
            to="/diet-plan"
            className={`text-sm font-medium transition-colors ${
              isActive('/diet-plan') 
                ? 'text-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Diet Plan
          </Link>
          <Link
            to="/profile"
            className={`text-sm font-medium transition-colors ${
              isActive('/profile') 
                ? 'text-primary-600'
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            Profile
          </Link>
          <Link to="/profile">
            <Button variant="primary" size="sm">
              <User size={16} className="mr-1" />
              Account
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/goals"
              className={`text-sm font-medium transition-colors ${
                isActive('/goals') 
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Goals
            </Link>
            <Link
              to="/diet-plan"
              className={`text-sm font-medium transition-colors ${
                isActive('/diet-plan') 
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diet Plan
            </Link>
            <Link
              to="/profile"
              className={`text-sm font-medium transition-colors ${
                isActive('/profile') 
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <Button variant="primary" size="sm" fullWidth>
              <User size={16} className="mr-1" />
              Account
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;