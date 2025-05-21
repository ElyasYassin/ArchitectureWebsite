import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png';

export default function Nav() {
  const location = useLocation();

  const isBlack = [
    '/projet',
    '/espaces',
    '/telechargements',
    '/contact',
    '/mentions',
  ].includes(location.pathname);

  const textColor = isBlack ? 'text-black' : 'text-white';
  const linkHover = isBlack ? 'hover:text-gray-800' : 'hover:text-gray-300';

  return (
    <nav
      className={`absolute top-0 left-10 right-10 z-50 p-4 flex justify-between items-center flex-wrap transition-all duration-300 ${textColor}`}
    >
      <Link to="/home" className="flex items-center space-x-2">
        <img src={logo} alt="The Link Logo" className="h-12 w-12" />
        <span className={`text-xl font-semibold ${textColor}`}>The Link</span>
      </Link>

      <div className={`flex space-x-6 font-medium ${textColor}`}>
        <Link to="/projet" className={`${linkHover}`}>Projet</Link>
        <Link to="/espaces" className={`${linkHover}`}>Espaces</Link>
        <Link to="/galerie" className={`${linkHover}`}>Galerie</Link>
        <Link to="/accessibilite" className={`${linkHover}`}>Accessibilité</Link>
        <Link to="/technologies" className={`${linkHover}`}>Technologies</Link>
        <Link to="/telechargements" className={`${linkHover}`}>Brochure</Link>
        <Link to="/contact" className={`${linkHover}`}>Contact</Link>
        <Link to="/mentions" className={`${linkHover}`}>Mentions</Link>
      </div>
    </nav>
  );
}