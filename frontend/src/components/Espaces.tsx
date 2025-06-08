import React from 'react';

const espaces = [
  {
    title: 'Niveaux R+2 à R+6',
    description: '5 plateaux identiques destinés à la location. Chaque niveau comprend des open-spaces modulables, des bureaux fermés, des salles de réunion et des zones de détente.',
    highlights: ['5 niveaux', 'Modulable', 'Espaces fermés & ouverts'],
    surfaceUnitaire: '200 m²',
    nombreUnites: '6 par niveau',
    surfaceTotale: '1200 m² / niveau',
    renderUrl: 'https://sketchfab.com/3d-models/loft-apartment-44e7a9cfed67431e827d0cbaabd462c7/embed',
  },
  {
    title: 'Niveaux R+7 & R+8 – Innovation & Tech Hub',
    description: 'Espaces conçus pour des startups, incubateurs ou départements R&D. Environnement idéal pour l’innovation, la technologie et la collaboration.',
    highlights: ['2 niveaux', 'Tech Hub', 'Espaces collaboratifs'],
    surfaceUnitaire: '250 m²',
    nombreUnites: '4 par niveau',
    surfaceTotale: '1000 m² / niveau',
    renderUrl: 'https://sketchfab.com/3d-models/office-ea1d5422c80141aa8ec2478cc359fe41/embed',
  },
];

const publics = [
  {
    title: 'Hall principal & Atrium',
    description: 'Espace majestueux pour l’accueil des visiteurs et la circulation fluide entre les niveaux.',
    highlights: ['Luminosité naturelle', 'Volumes généreux'],
    renderUrl: 'https://sketchfab.com/3d-models/office-atrium-51892e07018d43f9867879cc1a390d12/embed',
  },
  {
    title: 'Rooftop & Terrasse végétalisée',
    description: 'Un lieu de détente panoramique offrant une vue imprenable sur la ville.',
    highlights: ['Végétation', 'Vue panoramique', 'Espace événementiel'],
    renderUrl: 'https://sketchfab.com/3d-models/vr-rooftop-hangout-da1882dda1b04a96927155f665280fb8/embed',
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
            // 🧱 Each "espace" object becomes a card
            <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">

              {/* 🖼 Embedded 3D model viewer */}
              <div className="aspect-video mb-4">
                <iframe
                  src={espace.renderUrl}
                  title={espace.title}
                  className="w-full h-full rounded"
                  allow="autoplay; fullscreen; vr"
                />
              </div>

              {/* 🏷️ Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {espace.title}
              </h3>

              {/* 📄 Description */}
              <p className="text-gray-600 mb-4">
                {espace.description}
              </p>

              {/* 🔖 Highlight tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {espace.highlights.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 📊 Données techniques */}
              <div className="mb-4 text-sm text-gray-700">
                <h4 className="font-semibold mb-2">Données Techniques</h4>
                <ul className="space-y-1">
                  <li>📐 <strong>Surface unitaire :</strong> {espace.surfaceUnitaire}</li>
                  <li>🔢 <strong>Nombre d’unités :</strong> {espace.nombreUnites}</li>
                  <li>📏 <strong>Surface totale :</strong> {espace.surfaceTotale}</li>
                </ul>
              </div>

              {/* 📞 CTA button */}
              <a
                href="/contact"
                className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Contacter pour louer
              </a>
            </div>
          ))}
        </div>

        {/* Section: Espaces Publics */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Espaces Publics</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Des lieux de vie et de rencontre pour enrichir l’expérience des usagers du bâtiment.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {publics.map((espace, idx) => (
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
                <div className="flex flex-wrap gap-2">
                  {espace.highlights.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}