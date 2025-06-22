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
      <section className="pt-32 pb-0 px-6">
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
          <div className="grid lg:grid-cols-1 gap-16 items-start">
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

          </div>
        </div>
      </section>
    </div>
  );
}