import React from 'react';

const espaces = [
  {
    title: 'Niveaux R+2 à R+6',
    subtitle: 'Espaces Professionnels Premium',
    description: '5 plateaux identiques destinés à la location professionnelle. Chaque niveau comprend des open-spaces modulables, des bureaux fermés, des salles de réunion et des zones de détente contemporaines.',
    highlights: ['5 niveaux identiques', 'Modulable à souhait', 'Espaces fermés & ouverts', 'Zones de détente'],
    surfaceUnitaire: '200 m²',
    nombreUnites: '6 par niveau',
    surfaceTotale: '1200 m² / niveau',
    renderUrl: 'https://sketchfab.com/3d-models/loft-apartment-44e7a9cfed67431e827d0cbaabd462c7/embed',
    color: 'blue',
  },
  {
    title: 'Niveaux R+7 & R+8',
    subtitle: 'Innovation & Tech Hub',
    description: 'Espaces spécialement conçus pour des startups, incubateurs ou départements R&D. Un environnement optimal pour l\'innovation, la technologie et la collaboration créative.',
    highlights: ['2 niveaux dédiés', 'Tech Hub intégré', 'Espaces collaboratifs', 'Labs d\'innovation'],
    surfaceUnitaire: '250 m²',
    nombreUnites: '4 par niveau',
    surfaceTotale: '1000 m² / niveau',
    renderUrl: 'https://sketchfab.com/3d-models/office-ea1d5422c80141aa8ec2478cc359fe41/embed',
    color: 'purple',
  },
];

const publics = [
  {
    title: 'Hall Principal & Atrium',
    subtitle: 'Espace d\'Accueil Majestueux',
    description: 'Un espace architectural impressionnant pour l\'accueil des visiteurs et la circulation fluide entre les niveaux, baigné de lumière naturelle.',
    highlights: ['Luminosité naturelle', 'Volumes généreux', 'Design contemporain'],
    renderUrl: 'https://sketchfab.com/3d-models/office-atrium-51892e07018d43f9867879cc1a390d12/embed',
    color: 'green',
  },
  {
    title: 'Rooftop & Terrasse Végétalisée',
    subtitle: 'Vue Panoramique Exceptionnelle',
    description: 'Un lieu de détente et d\'événements offrant une vue imprenable sur la ville, avec espaces verts et aménagements haut de gamme.',
    highlights: ['Végétation luxuriante', 'Vue panoramique', 'Espace événementiel', 'Détente premium'],
    renderUrl: 'https://sketchfab.com/3d-models/vr-rooftop-hangout-da1882dda1b04a96927155f665280fb8/embed',
    color: 'yellow',
  },
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  yellow: 'from-yellow-500 to-orange-500',
};

export default function Espaces() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-0 px-6">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Les <span className="gradient-text">Espaces</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos niveaux disponibles à la location, conçus pour répondre aux besoins 
              des entreprises modernes et innovantes
            </p>
          </div>
        </div>
      </section>

      {/* Rental Spaces */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Espaces à Louer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des environnements de travail flexibles et modernes pour tous types d'entreprises
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {espaces.map((espace, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover">
                {/* 3D Model Viewer */}
                <div className="aspect-video relative">
                  <iframe
                    src={espace.renderUrl}
                    title={espace.title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; vr"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {espace.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      {espace.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {espace.description}
                    </p>
                  </div>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {espace.highlights.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Technical Data */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Données Techniques
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Surface unitaire</span>
                        <p className="font-semibold text-gray-900">{espace.surfaceUnitaire}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Nombre d'unités</span>
                        <p className="font-semibold text-gray-900">{espace.nombreUnites}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Surface totale</span>
                        <p className="font-semibold text-gray-900">{espace.surfaceTotale}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className={`inline-block bg-gradient-to-r ${colorClasses[espace.color]} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    Contacter pour louer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Spaces */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Espaces Publics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des lieux de vie et de rencontre pour enrichir l'expérience des usagers du bâtiment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {publics.map((espace, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover">
                {/* 3D Model Viewer */}
                <div className="aspect-video relative">
                  <iframe
                    src={espace.renderUrl}
                    title={espace.title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; vr"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {espace.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      {espace.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {espace.description}
                    </p>
                  </div>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2">
                    {espace.highlights.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Intéressé par nos espaces ?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour organiser une visite personnalisée et découvrir comment 
              The Link peut répondre à vos besoins d'entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Réserver une visite
              </a>
              <a href="/telechargements" className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Télécharger la brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}