import React from 'react';

export default function Accessibility() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Situation & Accessibilité</h2>

      <div className="mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with real embed link
          title="The Link Location"
          className="w-full h-[400px] rounded shadow-md"
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Points Stratégiques à Proximité</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Aéroport international d’Alger</strong> – 10 minutes en voiture</li>
            <li><strong>Bouche de métro</strong> – directement en face</li>
            <li><strong>Tramway</strong> et axes autoroutiers majeurs</li>
            <li><strong>Hôtel Marriott</strong> à proximité</li>
            <li><strong>Quartier d’affaires</strong> en pleine expansion</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Diagrammes & Schémas</h3>
          <p className="mb-4">
            Retrouvez ci-dessous des visuels expliquant l’insertion urbaine du projet :
          </p>
          <div className="space-y-4">
            <img
              src="/images/plan-masse.jpg" // Optional placeholder
              alt="Schéma d'insertion urbaine"
              className="rounded shadow"
            />
            <img
              src="/images/diagramme-connexion.jpg" // Optional placeholder
              alt="Diagramme de connexion"
              className="rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}