import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/home" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="The Link Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold">The Link</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              The Business Innovation Exchange - Un hub d'affaires connecté à l'avenir, 
              situé au cœur stratégique de Bab Ezzouar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/thelink-dz" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span className="text-sm">💼</span>
              </a>
              <a 
                href="mailto:contact@thelink-dz.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <span className="text-sm">📧</span>
              </a>
              <a 
                href="tel:+213555123456"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <span className="text-sm">📞</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/projet" className="text-gray-300 hover:text-white transition-colors">Le Projet</Link></li>
              <li><Link to="/espaces" className="text-gray-300 hover:text-white transition-colors">Espaces</Link></li>
              <li><Link to="/galerie" className="text-gray-300 hover:text-white transition-colors">Galerie</Link></li>
              <li><Link to="/accessibilite" className="text-gray-300 hover:text-white transition-colors">Accessibilité</Link></li>
              <li><Link to="/technologies" className="text-gray-300 hover:text-white transition-colors">Technologies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="mailto:contact@thelink-dz.com" className="hover:text-white transition-colors">
                  contact@thelink-dz.com
                </a>
              </li>
              <li>
                <a href="tel:+213555123456" className="hover:text-white transition-colors">
                  +213 555 123 456
                </a>
              </li>
              <li>Bab Ezzouar, Alger</li>
              <li>
                <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Nous contacter →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sabri Architecture · Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <a href="/telechargements" className="text-gray-400 hover:text-white text-sm transition-colors">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}