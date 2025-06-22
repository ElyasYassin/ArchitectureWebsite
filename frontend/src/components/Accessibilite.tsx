import React from 'react';

import accbg from './images/weyne-yew.jpg'
import carteacc from './images/carteaccessiblite.png';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${accbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        
        <div className="relative z-10 container-max">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-shadow">
              Situation & <span className="gradient-text-white">Accessibilité</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Un emplacement stratégique au cœur de Bab Ezzouar, connecté à tous les réseaux de transport
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-1 gap-16 items-start">
            {/* Maps and Visuals */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Accessibility Map */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8 pb-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🗺️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Plan d'Insertion Urbaine</h3>
                      <p className="text-green-600 font-medium">Schéma d'accessibilité</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <img
                    src={carteacc}
                    alt="Schéma d'insertion urbaine"
                    className="rounded-2xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8 pb-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Localisation Interactive</h3>
                      <p className="text-blue-600 font-medium">Vue satellite en temps réel</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps?q=36.712256, 3.195533&z=15&output=embed"
                      title="The Link Location"
                      className="w-full h-[685px] border-0"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-900">The Link</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Features */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Connectivité Exceptionnelle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Link bénéficie d'une position unique, offrant un accès privilégié à tous les modes de transport
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transport Public</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accès direct au métro et tramway pour une mobilité urbaine optimale
              </p>
              <div className="flex justify-center">
                <span className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">
                  Connexion immédiate
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aéroport</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                À seulement 10 minutes de l'aéroport international pour vos déplacements d'affaires
              </p>
              <div className="flex justify-center">
                <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-medium">
                  10 min en voiture
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quartier d'Affaires</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Au cœur d'un écosystème business dynamique avec hôtels et services premium
              </p>
              <div className="flex justify-center">
                <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">
                  Environnement premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}