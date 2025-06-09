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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Strategic Points */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 card-hover">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Points Stratégiques</h2>
                    <p className="text-blue-600 font-medium">À proximité immédiate</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">✈️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Aéroport international d'Alger</h3>
                      <p className="text-gray-600">10 minutes en voiture</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600 font-medium">Accès direct</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🚇</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Station de métro</h3>
                      <p className="text-gray-600">Directement en face du bâtiment</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600 font-medium">Connexion immédiate</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🚊</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Tramway & Autoroutes</h3>
                      <p className="text-gray-600">Axes autoroutiers majeurs</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-purple-600 font-medium">Mobilité optimale</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-100 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">🏨</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Hôtel Marriott & Quartier d'affaires</h3>
                      <p className="text-gray-600">Écosystème business en expansion</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-sm text-orange-600 font-medium">Environnement premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transport Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Temps d'Accès</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">10min</div>
                    <div className="text-sm opacity-90">Aéroport</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">0min</div>
                    <div className="text-sm opacity-90">Métro</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">5min</div>
                    <div className="text-sm opacity-90">Centre-ville</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black mb-2">2min</div>
                    <div className="text-sm opacity-90">Marriott</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps and Visuals */}
            <div className="space-y-8">
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
                      className="w-full h-[400px] border-0"
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

              {/* Quick Access Links */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Liens Utiles</h3>
                <div className="space-y-4">
                  <a 
                    href="/map" 
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">🗺️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Plan interactif détaillé</h4>
                      <p className="text-sm text-gray-600">Explorez l'environnement</p>
                    </div>
                  </a>

                  <a 
                    href="/contact" 
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Organiser une visite</h4>
                      <p className="text-sm text-gray-600">Découvrez sur place</p>
                    </div>
                  </a>

                  <a 
                    href="/telechargements" 
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">📄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Documentation complète</h4>
                      <p className="text-sm text-gray-600">Plans et brochures</p>
                    </div>
                  </a>
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