import React from 'react';
import HotelMap from './HotelMap.tsx';

export default function Project() {
  return (
    <section className="bg-[#f9f9f9] px-6 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Le Projet</h2>

        <p className="text-gray-800 mb-8 text-lg leading-relaxed">
          <strong>The Link</strong> est un projet ambitieux situé au cœur du quartier d’affaires de Bab Ezzouar. Conçu pour séduire entreprises et investisseurs,
          il incarne une nouvelle génération de centres d'affaires : connectés, modulables et tournés vers l’avenir.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Un Positionnement Stratégique</h3>
            <p className="text-gray-700 leading-relaxed">
              À seulement quelques minutes de l’aéroport international d’Alger, à proximité immédiate du métro, du tramway et des grands axes,
              The Link s’inscrit dans une zone à fort potentiel de développement économique.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Un Projet à la Hauteur des Références</h3>
            <p className="text-gray-700 leading-relaxed">
              Comparé aux projets emblématiques comme la Tour Hekla à Paris ou les immeubles de La Défense, The Link s’impose par sa modernité,
              son écosystème intelligent et sa flexibilité architecturale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Nos Valeurs</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Connectivité</strong> : Accès optimal aux transports et réseaux intelligents intégrés.</li>
              <li><strong>Durabilité</strong> : Matériaux écoresponsables, performance énergétique de pointe.</li>
              <li><strong>Flexibilité</strong> : Espaces modulables, adaptables à tous types d’entreprises.</li>
            </ul>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Repérage des lieux</h3>
            <HotelMap />
        </div>
        </div>
      </div>
    </section>
  );
}