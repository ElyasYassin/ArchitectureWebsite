import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png';

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <nav
      className={`${
        isHome
          ? 'absolute top-0 left-10 right-10  z-50 bg-transparent text-white'
          : 'absolute top-0 left-10 right-10  z-50 bg-transparent text-white'
      } p-4 flex justify-between items-center flex-wrap transition-all duration-300`}
    >
      <Link to="/home" className="flex items-center space-x-2">
        <img src={logo} alt="The Link Logo" className="h-10 w-auto" />
        <span className={`text-xl font-semibold ${isHome ? 'text-white' : 'text-gray-800'}`}>
          The Link
        </span>
      </Link>

      <div className={`flex space-x-6 font-medium ${isHome ? 'text-white' : 'text-gray-700'}`}>
        <Link to="/projet" className="hover:underline">Projet</Link>
        <Link to="/espaces" className="hover:underline">Espaces</Link>
        <Link to="/galerie" className="hover:underline">Galerie</Link>
        <Link to="/accessibilite" className="hover:underline">Accessibilité</Link>
        <Link to="/technologies" className="hover:underline">Technologies</Link>
        <Link to="/telechargements" className="hover:underline">Brochure</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/mentions" className="hover:underline">Mentions</Link>
      </div>
    </nav>
  );
}