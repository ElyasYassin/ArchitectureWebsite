import React from 'react';

const espaces = [
  {
    title: 'Bureaux privatifs',
    description: 'Espaces fermés haut de gamme pour entreprises établies.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-1/embed',
  },
  {
    title: 'Open-spaces modulables',
    description: 'Plateaux ouverts adaptables selon vos besoins.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-2/embed',
  },
  {
    title: 'Coworking',
    description: 'Espaces collaboratifs dédiés aux jeunes entreprises et start-ups.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-3/embed',
  },
  {
    title: 'Innovation hubs',
    description: 'Lieux d’échange et de prototypage, connectés à l’innovation.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-4/embed',
  },
  {
    title: 'Salles de conférence',
    description: 'Design acoustique, connectivité optimale pour vos événements.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-5/embed',
  },
  {
    title: 'Commerces & restauration',
    description: 'Zones animées en RDC et 1er étage, pour le quotidien des utilisateurs.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-6/embed',
  },
  {
    title: 'Appartements rooftop',
    description: 'Logements haut standing pour voyageurs d’affaires.',
    renderUrl: 'https://sketchfab.com/models/your-model-id-7/embed',
  }
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