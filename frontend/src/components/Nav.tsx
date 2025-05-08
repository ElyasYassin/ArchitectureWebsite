import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
      <nav className="bg-white shadow p-4 flex flex-wrap justify-center space-x-6 font-medium text-gray-700">
        <Link to="/home" className="hover:text-black">Home</Link>
        <Link to="/project" className="hover:text-black">Project</Link>
        <Link to="/models" className="hover:text-black">Models</Link>
        <Link to="/gallery" className="hover:text-black">Gallery</Link>
        <Link to="/team" className="hover:text-black">Team</Link>
        <Link to="/materials" className="hover:text-black">Materials</Link>
        <Link to="/publications" className="hover:text-black">Publications</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
      </nav>
    );
  }