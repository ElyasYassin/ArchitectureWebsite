import React from 'react';

import accbg from './images/weyne-yew.jpg'
import carteacc from './images/carteaccessiblite.png';


export default function Accessibility() {
  return (
          <section
          className="min-h-screen"
          style={{
            backgroundImage: `url(${accbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
              >
      <section className="relative min-h-screen px-6 py-24 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Situation & Accessibilité</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT: Strategic Points */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Points Stratégiques à Proximité</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li><strong>Aéroport international d’Alger</strong> – 10 minutes en voiture</li>
              <li><strong>Bouche de métro</strong> – directement en face</li>
              <li><strong>Tramway</strong> et axes autoroutiers majeurs</li>
              <li><strong>Hôtel Marriott</strong> à proximité</li>
              <li><strong>Quartier d’affaires</strong> en pleine expansion</li>
            </ul>
          </div>

          {/* RIGHT: Maps and Schematics */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Diagrammes & Schémas</h3>
              <img
                src={carteacc}
                alt="Schéma d'insertion urbaine"
                className="rounded shadow w-full"
              />
            </div>
            <iframe
              src="https://www.google.com/maps?q=36.712256, 3.195533&z=15&output=embed"
              title="The Link Location"
              className="w-full h-[300px] rounded shadow"
              loading="lazy"
            />
          </div>
          
        </div>
      </section>

    </section>
  );
}