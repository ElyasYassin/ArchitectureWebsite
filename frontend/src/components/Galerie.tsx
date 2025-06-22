import React, { useState, useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

import outside1 from './images/gallery/1_1.png';
import outside2 from './images/gallery/1_2.png';
import outside3 from './images/gallery/1_3.png';
import outside4 from './images/gallery/1_4.png';

import newOutside1 from './images/outside1.png';
import newOutside2 from './images/outside2.png';
import newOutside3 from './images/outside3.png';
import newOutside4 from './images/outside4.png';


const images = [
  {
    category: 'Façade',
    src: outside1,
    alt: 'Façade – Vue principale de jour',
    download: outside1,
    description: 'Vue principale de la façade en lumière naturelle'
  },
  {
    category: 'Façade',
    src: outside2,
    alt: 'Façade – Vue de nuit',
    download: outside2,
    description: 'Éclairage architectural nocturne'
  },
  {
    category: 'Façade',
    src: outside3,
    alt: 'Façade – Crépuscule urbain',
    download: outside3,
    description: 'Perspective urbaine au crépuscule'
  },
  {
    category: 'Façade',
    src: outside4,
    alt: 'Façade – Vue arrière un jour nuageux',
    download: outside4,
    description: 'Façade exposée à la lumière diffuse d’un jour couvert'
  },
   {
    category: 'Façade',
    src: newOutside1,
    alt: 'Façade – Vue grand angle au matin',
    download: newOutside1,
    description: 'Vue dégagée du bâtiment dans son environnement urbain'
  },
  {
    category: 'Façade',
    src: newOutside2,
    alt: 'Façade – Côté verre et structure métallique',
    download: newOutside2,
    description: 'Angle mettant en avant la transparence et les reflets'
  },
  {
    category: 'Façade',
    src: newOutside3,
    alt: 'Façade – Entrée principale et parvis',
    download: newOutside3,
    description: 'Vue immersive depuis l’accès frontal'
  },
  {
    category: 'Façade',
    src: newOutside4,
    alt: 'Façade – Vue arrière sous lumière naturelle',
    download: newOutside4,
    description: 'Arrière du bâtiment et détails structurels'
  },
];

const categories = ['Tous', ...new Set(images.map(img => img.category))];

const categoryColors = {
  'Tous': 'from-gray-500 to-gray-600',
  'Façade': 'from-blue-500 to-blue-600',
  'Atrium': 'from-green-500 to-green-600',
  'Rooftop': 'from-purple-500 to-purple-600',
  'Espaces de travail': 'from-orange-500 to-red-500',
};

export default function Gallery() {
  const [selected, setSelected] = useState('Tous');
  const [modalImg, setModalImg] = useState<null | typeof images[0]>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const filteredImages = selected === 'Tous' ? images : images.filter(img => img.category === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 30,
            particles: {
              shape: { type: 'circle' },
              color: { value: '#ffffff' },
              links: {
                enable: true,
                color: '#ffffff',
                distance: 100,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                outModes: { default: 'bounce' },
              },
              number: {
                value: 50,
                density: { enable: true, area: 800 },
              },
              size: { value: { min: 1, max: 3 } },
              opacity: { value: 0.3 },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 container-max">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-shadow">
              Galerie <span className="gradient-text-white">Visuelle</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Découvrez The Link à travers nos rendus 3D haute définition et visualisations architecturales
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{images.length}</div>
                <div className="text-sm opacity-80">Rendus HD</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
                <div className="text-sm opacity-80">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4K</div>
                <div className="text-sm opacity-80">Qualité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">360°</div>
                <div className="text-sm opacity-80">Vues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Explorez par Catégorie</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selected === cat
                      ? `bg-gradient-to-r ${categoryColors[cat]} text-white shadow-lg scale-105`
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {cat}
                  <span className="ml-2 text-sm opacity-75">
                    ({cat === 'Tous' ? images.length : images.filter(img => img.category === cat).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl cursor-pointer card-hover"
                onClick={() => setModalImg(img)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${categoryColors[img.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {img.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{img.alt}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{img.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-2">Aucun rendu disponible</h3>
              <p className="text-white/70">Cette catégorie sera bientôt enrichie de nouveaux visuels</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Viewer */}
      {modalImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" 
          onClick={() => setModalImg(null)}
        >
          <div className="max-w-6xl w-full relative" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{modalImg.alt}</h2>
                <p className="text-white/70">{modalImg.description}</p>
                <div className={`inline-block bg-gradient-to-r ${categoryColors[modalImg.category]} text-white px-4 py-2 rounded-full text-sm font-semibold mt-3`}>
                  {modalImg.category}
                </div>
              </div>
              <button
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors font-semibold"
                onClick={() => setModalImg(null)}
              >
                ✕ Fermer
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img 
                src={modalImg.src} 
                alt={modalImg.alt} 
                className="w-full max-h-[70vh] object-contain bg-black/50" 
                loading="lazy"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={modalImg.download}
                download
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105"
              >
                📥 Télécharger HD
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 px-8 rounded-xl hover:bg-white/20 transition-colors font-semibold text-center"
              >
                💬 Demander plus d'infos
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: modalImg.alt,
                      text: modalImg.description,
                      url: modalImg.src
                    });
                  }
                }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 px-8 rounded-xl hover:bg-white/20 transition-colors font-semibold"
              >
                🔗 Partager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="relative z-10 section-padding">
        <div className="container-max">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Découvrez The Link en Réalité</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ces rendus ne sont qu'un aperçu. Organisez une visite pour découvrir 
              l'expérience complète de nos espaces innovants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Réserver une visite
              </a>
              <a href="/espaces" className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Explorer les espaces
              </a>
              <a href="/telechargements" className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Télécharger la brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}