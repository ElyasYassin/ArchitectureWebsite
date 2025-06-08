import React from 'react';
import logo from './images/logo.png';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo and content */}
      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <img
            src={logo}
            alt="The Link Logo"
            className="w-20 h-20 mx-auto animate-bounce-slow"
          />
          <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">The Link</h2>
          <p className="text-gray-600 tracking-wider">Chargement en cours...</p>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}