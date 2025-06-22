import React from 'react';

export default function Brochures() {
  const files = [
    {
      title: 'Fiche Technique',
      description: 'Spécifications détaillées, matériaux et performances',
      type: 'PDF',
      size: '2.4 MB',
      link: '/docs/fiche-technique.pdf',
      icon: '📋'
    },
    {
      title: 'Brochure Marketing',
      description: 'Présentation complète pour investisseurs',
      type: 'PDF',
      size: '8.1 MB',
      link: '/docs/brochure-marketing.pdf',
      icon: '📖'
    },
    {
      title: 'Book Visuels',
      description: 'Rendus 3D haute définition et maquettes',
      type: 'PDF',
      size: '15.2 MB',
      link: '/docs/book-visuels.pdf',
      icon: '🎨'
    },
    {
      title: 'Vidéo Présentation',
      description: 'Pitch du projet et vision architecturale',
      type: 'MP4',
      size: '45.8 MB',
      link: '/videos/pitch.mp4',
      icon: '🎬'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Téléchargez nos ressources complètes pour découvrir The Link en détail
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="pb-20 px-6">
        <div className="container-max max-w-4xl">
          <div className="space-y-6">
            {files.map((file, idx) => (
              <a
                key={idx}
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {file.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {file.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {file.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-200 px-3 py-1 rounded-full font-medium">
                          {file.type}
                        </span>
                        <span>{file.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors ml-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20 px-6">
        <div className="container-max">
          <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Besoin d'informations supplémentaires ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à vos questions et organiser une présentation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Nous contacter
              </a>
              <a 
                href="/espaces" 
                className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Explorer les espaces
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}