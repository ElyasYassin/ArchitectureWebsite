import React from 'react';

const espaces = [
  {
    title: 'Bureaux privatifs',
    description: 'Espaces fermés haut de gamme pour entreprises établies.',
    renderUrl: 'https://sketchfab.com/3d-models/architectural-visualisation-nordic-house-bfaeaaa0fb724327a642ee7e435671a5/embed',
  },
  {
    title: 'Open-spaces modulables',
    description: 'Plateaux ouverts adaptables selon vos besoins.',
    renderUrl: 'https://sketchfab.com/3d-models/modern-studio-apartment-68864965414f487090d1f677adbb8029/embed',
  },
  
];

export default function Espaces() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Les Espaces à Louer ou à Investir</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {espaces.map((espace, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <div className="aspect-video mb-4">
              <iframe
                src={espace.renderUrl}
                title={espace.title}
                className="w-full h-full rounded"
                allow="autoplay; fullscreen; vr"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{espace.title}</h3>
            <p className="text-gray-600">{espace.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}