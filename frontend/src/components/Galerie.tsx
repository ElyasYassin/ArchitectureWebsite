import React, { useState, useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const images = [
  {
    category: 'Façade',
    src: 'https://images.unsplash.com/photo-1594365387374-321d9f531806?q=80&w=2590&auto=format&fit=crop',
    alt: 'Façade – Jour',
    download: 'https://images.unsplash.com/photo-1594365387374-321d9f531806?q=80&w=2590&auto=format&fit=crop',
  },
  {
    category: 'Façade',
    src: 'https://images.unsplash.com/photo-1617893423712-9667576ffc1e?q=80&w=2574&auto=format&fit=crop',
    alt: 'Façade – Nuit',
    download: 'https://images.unsplash.com/photo-1617893423712-9667576ffc1e?q=80&w=2574&auto=format&fit=crop',
  },
  {
    category: 'Façade',
    src: 'https://images.unsplash.com/photo-1743006501109-44519f27479a?q=80&w=2650&auto=format&fit=crop',
    alt: 'Façade – Nuit 2',
    download: 'https://images.unsplash.com/photo-1743006501109-44519f27479a?q=80&w=2650&auto=format&fit=crop',
  },
  {
    category: 'Atrium',
    src: 'https://yourdomain.com/atrium.jpg',
    alt: 'Atrium intérieur',
    download: 'https://yourdomain.com/atrium-hd.jpg',
  },
  {
    category: 'Rooftop',
    src: 'https://yourdomain.com/rooftop.jpg',
    alt: 'Vue rooftop',
    download: 'https://yourdomain.com/rooftop-hd.jpg',
  },
  {
    category: 'Espaces de travail',
    src: 'https://yourdomain.com/office.jpg',
    alt: 'Espaces de travail',
    download: 'https://yourdomain.com/office-hd.jpg',
  },
];

const categories = ['Tous', ...new Set(images.map(img => img.category))];

export default function Gallery() {
  const [selected, setSelected] = useState('Tous');
  const [modalImg, setModalImg] = useState<null | typeof images[0]>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const filteredImages = selected === 'Tous' ? images : images.filter(img => img.category === selected);

  return (
    <section className="relative px-6 py-16 min-h-screen overflow-hidden bg-black text-white">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#000000' } },
          fpsLimit: 30,
          particles: {
            shape: { type: 'circle' },
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 100,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: 'bounce' },
            },
            number: {
              value: 40,
              density: { enable: true, area: 800 },
            },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: 0.5 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Galerie Visuelle</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded border transition ${
                selected === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-gray-500 hover:bg-white hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative group rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => setModalImg(img)}>
              <img
                src={img.src}
                alt={img.alt}
                className="rounded w-full h-auto group-hover:brightness-75 transition"
              />

            </div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      {modalImg && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4" onClick={() => setModalImg(null)}>
          <div className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
              onClick={() => setModalImg(null)}
            >
              ✕ Fermer
            </button>
            <img src={modalImg.src} alt={modalImg.alt} className="rounded w-full max-h-[80vh] object-contain" />
            <div className="text-center mt-4">
              <a
                href={modalImg.download}
                download
                className="bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition inline-block"
              >
                Télécharger HD
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}