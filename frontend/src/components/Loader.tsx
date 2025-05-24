import React from 'react';
import logo from './images/logo.png'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/30 backdrop-blur-md">
      {/* Optional glow */}
      <div className="absolute w-80 h-80 bg-white rounded-full opacity-20 blur-3xl animate-pulse" />

      {/* Logo */}
      <img
        src={logo}
        alt="The Link Logo"
        className="w-20 h-20 z-10 animate-bounce-slow"
      />

      {/* Text */}
      <p className="mt-4 text-sm tracking-wider text-gray-700 z-10">Chargement...</p>
    </div>
  );
}