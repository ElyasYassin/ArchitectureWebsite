import React, { useState } from 'react';
import galleryBg from './images/low-poly-grid-haikei.svg';

const images = [
  {
    category: 'Façade',
    src: 'https://yourdomain.com/facade-day.jpg',
    alt: 'Façade – Jour',
    download: 'https://yourdomain.com/facade-day-hd.jpg',
  },
  {
    category: 'Façade',
    src: 'https://yourdomain.com/facade-night.jpg',
    alt: 'Façade – Nuit',
    download: 'https://yourdomain.com/facade-night-hd.jpg',
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

  const filteredImages = selected === 'Tous'
    ? images
    : images.filter(img => img.category === selected);

  return (
    <section
      className="px-6 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${galleryBg}`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >      
    <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Galerie Visuelle</h2>

      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded border ${
              selected === cat ? 'bg-black text-white' : 'bg-white text-gray-700 border-gray-300'
            } hover:bg-gray-100 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded shadow-md w-full h-auto group-hover:brightness-75 transition"
            />
            <a
              href={img.download}
              download
              className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition"
            >
              Télécharger HD
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}