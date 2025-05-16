import React from 'react';

const espaces = [
  {
    title: 'Niveaux R+2 à R+6',
    description: '5 plateaux identiques destinés à la location. Chaque niveau comprend des open-spaces modulables, des bureaux fermés, des salles de réunion et des zones de détente.',
    highlights: ['5 niveaux', 'Modulable', 'Espaces fermés & ouverts'],
    renderUrl: 'https://sketchfab.com/3d-models/office-level-3-3b164b3a463a41908d2a6839d2682674/embed',
  },
  {
    title: 'Niveaux R+7 & R+8 – Innovation & Tech Hub',
    description: 'Espaces conçus pour des startups, incubateurs ou départements R&D. Environnement idéal pour l’innovation, la technologie et la collaboration.',
    highlights: ['2 niveaux', 'Tech Hub', 'Espaces collaboratifs'],
    renderUrl: 'https://sketchfab.com/3d-models/loft-apartment-44e7a9cfed67431e827d0cbaabd462c7/embed',
  },
];

export default function Espaces() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Les Espaces à Louer</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Découvrez nos niveaux disponibles à la location, conçus pour répondre aux besoins des entreprises modernes et innovantes.
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        {espaces.map((espace, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="aspect-video mb-4">
              <iframe
                src={espace.renderUrl}
                title={espace.title}
                className="w-full h-full rounded"
                allow="autoplay; fullscreen; vr"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{espace.title}</h3>
            <p className="text-gray-600 mb-4">{espace.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {espace.highlights.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Contacter pour louer
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}