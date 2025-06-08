import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="gradient-text">Contact</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prêt à rejoindre l'écosystème The Link ? Contactez-nous pour investir, louer ou en savoir plus
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Parlons de votre projet</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Je suis...
                  </label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Sélectionnez votre profil</option>
                    <option value="entreprise">Une entreprise</option>
                    <option value="investisseur">Un investisseur</option>
                    <option value="startup">Une startup</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet" 
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Adresse email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com" 
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Votre message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez-nous votre projet ou vos besoins..." 
                    rows={6} 
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="btn-primary flex-1 text-center"
                  >
                    Réserver une visite
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                  >
                    Demander une présentation
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:contact@thelink-dz.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        contact@thelink-dz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                      <a href="tel:+213555123456" className="text-green-600 hover:text-green-700 transition-colors">
                        +213 555 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/company/thelink-dz" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        linkedin.com/company/thelink-dz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Actions rapides</h3>
                
                <div className="space-y-4">
                  <a 
                    href="/telechargements" 
                    className="block bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <h4 className="font-semibold">Télécharger la brochure</h4>
                        <p className="text-sm opacity-90">Documentation complète du projet</p>
                      </div>
                    </div>
                  </a>

                  <a 
                    href="/espaces" 
                    className="block bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏢</span>
                      <div>
                        <h4 className="font-semibold">Explorer les espaces</h4>
                        <p className="text-sm opacity-90">Découvrir nos niveaux disponibles</p>
                      </div>
                    </div>
                  </a>

                  <a 
                    href="/galerie" 
                    className="block bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <h4 className="font-semibold">Voir la galerie</h4>
                        <p className="text-sm opacity-90">Rendus 3D et visualisations</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires de bureau</h3>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Jeudi</span>
                    <span className="font-semibold">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendredi</span>
                    <span className="font-semibold">8h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi - Dimanche</span>
                    <span className="text-gray-500">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}