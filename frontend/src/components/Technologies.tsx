import React, { useState } from 'react';

import bg from './images/gleb-paniotov-gl4_SwF3EYA-unsplash.jpg';
import doubleskin from './images/technologies/1503-thick-skinned-5.webp';
import solar from './images/technologies/the-shade-store-solar.webp';
import eco from './images/technologies/stonecycling-bespoke-wastebasedbricks-colours-4-1768x1457.webp';
import energy from './images/technologies/premium_photo-1679607691186-4550451e13b7.webp';
import thermal from './images/technologies/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.webp';
import smart from './images/technologies/amsterdam-city-archives-URnyBZCnlIs-unsplash.webp';

const technologies = [
  {
    id: 'facade',
    title: 'Façade Intelligente à Double Peau',
    subtitle: 'Régulation Thermique Avancée',
    description: 'Système de façade innovant avec capteurs adaptatifs intégrés pour une régulation thermique et acoustique optimale. Cette technologie permet de réduire la consommation énergétique de 40% tout en maintenant un confort optimal.',
    image: doubleskin,
    features: ['Capteurs adaptatifs', 'Isolation thermique', 'Réduction acoustique', 'Économie d\'énergie 40%'],
    category: 'Enveloppe',
    color: 'blue',
  },
  {
    id: 'solar',
    title: 'Films Solaires & Brise-Soleil Motorisés',
    subtitle: 'Contrôle Automatique de la Lumière',
    description: 'Système automatisé de contrôle de la lumière naturelle et de la chaleur solaire. Les brise-soleil motorisés s\'adaptent en temps réel aux conditions météorologiques pour optimiser le confort visuel.',
    image: solar,
    features: ['Contrôle automatique', 'Adaptation météo', 'Confort visuel', 'Protection UV'],
    category: 'Énergie',
    color: 'yellow',
  },
  {
    id: 'materials',
    title: 'Matériaux Durables & Allégés',
    subtitle: 'Construction Écoresponsable',
    description: 'Utilisation de matériaux locaux et recyclés pour une empreinte carbone réduite. Notre approche privilégie les ressources durables sans compromettre la qualité architecturale.',
    image: eco,
    features: ['Matériaux locaux', 'Recyclage intégré', 'Empreinte carbone -60%', 'Qualité premium'],
    category: 'Durabilité',
    color: 'green',
  },
  {
    id: 'energy',
    title: 'Gestion Énergétique Automatisée',
    subtitle: 'Intelligence Artificielle Intégrée',
    description: 'Systèmes de contrôle intelligents utilisant l\'IA pour optimiser la consommation énergétique en temps réel. Prédiction des besoins et adaptation automatique des systèmes.',
    image: energy,
    features: ['IA prédictive', 'Optimisation temps réel', 'Monitoring continu', 'Économies garanties'],
    category: 'Smart Building',
    color: 'purple',
  },
  {
    id: 'comfort',
    title: 'Confort Thermique & Acoustique',
    subtitle: 'Environnement de Travail Optimal',
    description: 'Isolation performante et ventilation naturelle assistée pour créer un environnement de travail exceptionnel. Technologies avancées pour le bien-être des occupants.',
    image: thermal,
    features: ['Isolation haute performance', 'Ventilation naturelle', 'Contrôle acoustique', 'Bien-être optimisé'],
    category: 'Confort',
    color: 'indigo',
  },
  {
    id: 'ai',
    title: 'Technologies IA & Domotique',
    subtitle: 'Bâtiment Connecté du Futur',
    description: 'Capteurs intelligents et systèmes domotiques pour la gestion automatisée de la lumière, température, sécurité et maintenance prédictive.',
    image: smart,
    features: ['Capteurs IoT', 'Maintenance prédictive', 'Sécurité avancée', 'Interface intuitive'],
    category: 'Intelligence',
    color: 'cyan',
  },
];

const categories = ['Toutes', ...new Set(technologies.map(tech => tech.category))];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  yellow: 'from-yellow-500 to-orange-500',
  green: 'from-green-500 to-emerald-600',
  purple: 'from-purple-500 to-purple-600',
  indigo: 'from-indigo-500 to-indigo-600',
  cyan: 'from-cyan-500 to-blue-500',
};

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredTechnologies = selectedCategory === 'Toutes' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        
        <div className="relative z-10 container-max">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-shadow">
              <span className="text-white">Technologies</span> <span className="gradient-text-white">Avancées</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Découvrez les innovations technologiques qui font de The Link un bâtiment intelligent du futur
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-80">Économie d'énergie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Automatisé</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">AI</div>
                <div className="text-sm opacity-80">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-max">

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTechnologies.map((tech, idx) => (
              <div
                key={tech.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedTech(tech)}
              >
                <div className="relative">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${colorClasses[tech.color]} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {tech.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {tech.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                    {tech.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {tech.features.length > 2 && (
                      <span className="text-blue-600 text-xs font-medium">
                        +{tech.features.length - 2} autres
                      </span>
                    )}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${colorClasses[tech.color]} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Detail Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={() => setSelectedTech(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedTech.image}
                alt={selectedTech.title}
                className="w-full h-80 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className={`absolute bottom-6 left-6 bg-gradient-to-r ${colorClasses[selectedTech.color]} text-white px-6 py-3 rounded-full font-semibold`}>
                {selectedTech.category}
              </div>
            </div>

            <div className="p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedTech.title}
              </h2>
              <p className="text-xl text-blue-600 font-medium mb-8">
                {selectedTech.subtitle}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {selectedTech.description}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Caractéristiques Principales</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedTech.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <div className={`w-3 h-3 bg-gradient-to-r ${colorClasses[selectedTech.color]} rounded-full`}></div>
                    <span className="font-medium text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className={`flex-1 bg-gradient-to-r ${colorClasses[selectedTech.color]} text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  Demander plus d'infos
                </a>
                <a
                  href="/telechargements"
                  className="flex-1 border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-gray-50 hover:scale-105"
                >
                  Documentation technique
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}