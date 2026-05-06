import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Navigation() {
  const { darkMode, setDarkMode, portfolioData } = useContext(PortfolioContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;
  const isPortfolioActive = location.pathname === '/' && window.location.hash;

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {portfolioData.name}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Home
          </Link>

          {/* Portfolio Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
              className="flex items-center gap-1 transition-colors text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Portfolio <ChevronDown className="w-4 h-4" />
            </button>
            {portfolioDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Sections
                </div>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setPortfolioDropdownOpen(false);
                  }}
                  className="block w-full text-left px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                >
                  About & Experience
                </button>
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    setPortfolioDropdownOpen(false);
                  }}
                  className="block w-full text-left px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Projects
                </button>
              </div>
            )}
          </div>

          {/*
          <Link to="/blog" className={`transition-colors flex items-center gap-1 ${isActive('/blog') ? 'text-purple-600 dark:text-purple-400 font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'}`}>
            Blog <ExternalLink className="w-3 h-3" />
          </Link> */}

          <button onClick={() => {
            console.log('Dark mode button clicked');
            setDarkMode(!darkMode);
          }} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => {
              console.log('Dark mode button clicked (mobile)');
              setDarkMode(!darkMode);
            }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
              Home
            </Link>

            <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 space-y-3">
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                Sections
              </div>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600"
              >
                About & Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600"
              >
                Projects
              </button>
            </div>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 pt-2 border-t border-gray-200 dark:border-gray-700"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
