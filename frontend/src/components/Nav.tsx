import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'; // Adjust path as needed

export default function Nav() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center flex-wrap">
      {/* Logo and brand */}
      <Link to="/home" className="flex items-center space-x-2">
        <img src={logo} alt="The Link Logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold text-gray-800">The Link</span>
      </Link>

      {/* Navigation links */}
      <div className="flex space-x-6 font-medium text-gray-700">
        <Link to="/projet" className="hover:text-black">Projet</Link>
        <Link to="/espaces" className="hover:text-black">Espaces</Link>
        <Link to="/galerie" className="hover:text-black">Galerie</Link>
        <Link to="/accessibilite" className="hover:text-black">Accessibilité</Link>
        <Link to="/technologies" className="hover:text-black">Technologies</Link>
        <Link to="/telechargements" className="hover:text-black">Brochure</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/mentions" className="hover:text-black">Mentions</Link>
      </div>
    </nav>
  );
}