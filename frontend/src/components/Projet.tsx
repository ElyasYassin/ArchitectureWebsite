import React from 'react';
import HotelMap from './HotelMap.tsx';

export default function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Le <span className="gradient-text">Projet</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un projet ambitieux qui redéfinit les standards des centres d'affaires modernes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 animate-slide-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Une Vision d'Avenir
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                <strong className="text-blue-600">The Link</strong> est bien plus qu'un simple centre d'affaires. 
                C'est un écosystème d'innovation situé au cœur stratégique de Bab Ezzouar, 
                conçu pour séduire les entreprises les plus ambitieuses et les investisseurs visionnaires.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">8</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Niveaux</h3>
                  <p className="text-gray-600">D'espaces modulables</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Éco-responsable</h3>
                  <p className="text-gray-600">Certification environnementale</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Building</h3>
                  <p className="text-gray-600">Technologies intégrées</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Positionnement Stratégique</h3>
                    <p className="text-gray-700 leading-relaxed">
                      À seulement 10 minutes de l'aéroport international d'Alger, avec un accès direct 
                      au métro, tramway et aux grands axes autoroutiers. Une localisation privilégiée 
                      dans une zone à fort potentiel de développement économique.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Architecture d'Excellence</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Inspiré des projets emblématiques comme la Tour Hekla à Paris ou les immeubles 
                      de La Défense, The Link s'impose par sa modernité architecturale et son 
                      écosystème intelligent intégré.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Valeurs Fondamentales</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Connectivité</span>
                    <span className="text-gray-600">— Réseaux intelligents intégrés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Durabilité</span>
                    <span className="text-gray-600">— Performance énergétique de pointe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Flexibilité</span>
                    <span className="text-gray-600">— Espaces modulables et adaptables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">Innovation</span>
                    <span className="text-gray-600">— Technologies de demain</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Prêt à Investir ?</h3>
                <p className="mb-6 opacity-90">
                  Découvrez les opportunités d'investissement et de location dans ce projet d'exception.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-center">
                    Nous contacter
                  </a>
                  <a href="/espaces" className="border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center">
                    Voir les espaces
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Environnement & Proximité
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Découvrez l'écosystème dynamique qui entoure The Link, avec ses hôtels de prestige, 
              centres commerciaux et infrastructures de transport.
            </p>
            <HotelMap />
          </div>
        </div>
      </section>
    </div>
  );
}