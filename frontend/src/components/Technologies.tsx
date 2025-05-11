import React from 'react';

export default function Technologies() {
  const features = [
    {
      title: 'Façade intelligente à double peau',
      description: 'Régulation thermique et acoustique optimale avec capteurs adaptatifs intégrés.',
    },
    {
      title: 'Films solaires & brise-soleil motorisés',
      description: 'Contrôle automatique de la lumière naturelle et de la chaleur solaire.',
    },
    {
      title: 'Matériaux durables & allégés',
      description: 'Utilisation de ressources locales et recyclées pour une empreinte carbone réduite.',
    },
    {
      title: 'Gestion énergétique automatisée',
      description: 'Systèmes de contrôle intelligents pour optimiser la consommation énergétique.',
    },
    {
      title: 'Confort thermique & acoustique avancé',
      description: 'Isolation performante et ventilation naturelle assistée.',
    },
    {
      title: 'Technologies IA & domotique',
      description: 'Capteurs intelligents pour la gestion de la lumière, température et sécurité.',
    },
  ];

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Performances & Technologies</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}