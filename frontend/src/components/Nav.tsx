import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
      <nav className="bg-white shadow p-4 flex flex-wrap justify-center space-x-6 font-medium text-gray-700">
        <Link to="/home" className="hover:text-black">Home</Link>
        <Link to="/projet" className="hover:text-black">Projet</Link>
        <Link to="/espaces" className="hover:text-black">Espaces</Link>
        <Link to="/gallerie" className="hover:text-black">Gallerie</Link>
        <Link to="/accessibilite" className="hover:text-black">Accessibilite</Link>
        <Link to="/technologies" className="hover:text-black">Technologies</Link>
        <Link to="/telechargements" className="hover:text-black">Telechargements</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/mentions" className="hover:text-black">Mentions</Link>
      </nav>
    );
  }