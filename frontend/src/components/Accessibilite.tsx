import React from 'react';

import carteacc from './images/carteaccessiblite.png';
import accbg from './images/weyne-yew.jpg'


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
    <section className="px-5 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">Situation & Accessibilité</h2>
=
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Points Stratégiques à Proximité</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Aéroport international d’Alger</strong> – 10 minutes en voiture</li>
            <li><strong>Bouche de métro</strong> – directement en face</li>
            <li><strong>Tramway</strong> et axes autoroutiers majeurs</li>
            <li><strong>Hôtel Marriott</strong> à proximité</li>
            <li><strong>Quartier d’affaires</strong> en pleine expansion</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Diagrammes & Schémas</h3>
          <p className="mb-4">
            Retrouvez ci-dessous des visuels expliquant l’insertion urbaine du projet :
          </p>
          <div className="space-y-4">
            <img
              src={carteacc} 
              alt="Schéma d'insertion urbaine"
              className="rounded shadow"
            />
          </div>
          
        </div>


      </div>
        <div className="mb-12">
        <iframe
          src="https://www.google.com/maps?q=36.718809,3.185756&z=15&output=embed" 
          title="The Link Location"
          className="rounded-lg shadow-lg w-full h-[400px]"
          loading="lazy"
        />
      </div>
    </section>
    </section>
  );
}