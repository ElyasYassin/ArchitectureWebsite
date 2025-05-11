import React from 'react';

export default function Telechargements() {
  const files = [
    {
      title: '📄 Fiche Technique',
      description: 'Détails techniques sur les matériaux, performances et surfaces.',
      link: '/docs/fiche-technique.pdf',
    },
    {
      title: '📘 Brochure Marketing',
      description: 'Présentation complète du projet pour investisseurs et entreprises.',
      link: '/docs/brochure-marketing.pdf',
    },
    {
      title: '🖼️ Book de Rendus & Visuels',
      description: 'Sélection de visuels HD et maquettes 3D du projet.',
      link: '/docs/book-visuels.pdf',
    },
    {
      title: '🎥 Pitch PFE / Vidéo de Présentation',
      description: 'Vidéo courte expliquant la vision et les objectifs du projet.',
      link: '/videos/pitch.mp4',
    },
  ];

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Téléchargements & Brochure</h2>
      <div className="space-y-6">
        {files.map((file, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{file.title}</h3>
            <p className="text-gray-600 mb-3">{file.description}</p>
            <a
              href={file.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}