import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png';

export default function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const shouldBeTransparent = isHomePage && !isScrolled;

  const navClasses = shouldBeTransparent
    ? 'bg-transparent text-white'
    : 'bg-white/95 backdrop-blur-md text-gray-900 shadow-lg';

  const linkHoverClasses = shouldBeTransparent
    ? 'hover:text-blue-300 hover:scale-105'
    : 'hover:text-blue-600 hover:scale-105';

  const navItems = [
    { to: '/projet', label: 'Projet' },
    { to: '/espaces', label: 'Espaces' },
    { to: '/galerie', label: 'Galerie' },
    { to: '/accessibilite', label: 'Accessibilité' },
    { to: '/technologies', label: 'Technologies' },
    { to: '/telechargements', label: 'Brochure' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="The Link Logo" 
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">The Link</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium transition-all duration-300 ${linkHoverClasses} ${
                  location.pathname === item.to ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/mentions"
              className={`text-sm opacity-75 transition-all duration-300 ${linkHoverClasses}`}
            >
              Mentions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-black/10"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium transition-all duration-300 ${linkHoverClasses} ${
                  location.pathname === item.to ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/mentions"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm opacity-75 transition-all duration-300 ${linkHoverClasses}`}
            >
              Mentions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}