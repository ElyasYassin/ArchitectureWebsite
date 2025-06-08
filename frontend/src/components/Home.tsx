import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


import facade1 from './images/facade1.webp';
import facade2 from './images/facade2.webp';
import facade3 from './images/facade3.webp';
import facade4 from './images/facade4.webp';

export default function Home() {
  return (
    <Parallax pages={4} className="relative">
      {/* Hero Section */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${facade1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="h-screen flex flex-col justify-center items-center text-white text-center px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-shadow tracking-tight">
              The <span className="gradient-text">Link</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light text-shadow">
              The Business Innovation Exchange
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Un hub d'affaires connecté à l'avenir, situé au cœur de Bab Ezzouar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/espaces" className="btn-primary animate-float">
                Explorer les espaces
              </a>
              <a href="/galerie" className="btn-secondary">
                Voir les rendus 3D
              </a>
              <a href="/telechargements" className="btn-secondary">
                Télécharger la brochure
              </a>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Vision Section */}
      <ParallaxLayer
        offset={1}
        speed={0.3}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${facade2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <ParallaxLayer offset={1} speed={0.8}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto text-white text-center">
            <h2 className="text-5xl font-bold mb-8 text-shadow">Notre Vision</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Créer un écosystème d'innovation où les entreprises prospèrent grâce à la connectivité, 
              la durabilité et la flexibilité architecturale de nouvelle génération.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connectivité</h3>
                <p className="opacity-80">Accès optimal aux transports et réseaux intelligents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
                <p className="opacity-80">Matériaux écoresponsables et performance énergétique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexibilité</h3>
                <p className="opacity-80">Espaces modulables adaptés à tous types d'entreprises</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Innovation Section */}
      <ParallaxLayer
        offset={2}
        speed={0.2}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${facade3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <ParallaxLayer offset={2} speed={0.7}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-white text-center">
            <h2 className="text-5xl font-bold mb-12 text-shadow">Innovation & Technologie</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Technologies Avancées</h3>
                <ul className="text-left space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    Façade intelligente à double peau
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-4"></span>
                    Gestion énergétique automatisée
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4"></span>
                    IA et domotique intégrées
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-4"></span>
                    Matériaux durables et allégés
                  </li>
                </ul>
              </div>
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Espaces Innovants</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Des plateaux modulables aux espaces de co-working, en passant par les labs d'innovation, 
                  chaque niveau est conçu pour stimuler la créativité et la collaboration.
                </p>
                <a href="/espaces" className="btn-primary">
                  Découvrir les espaces
                </a>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Call to Action Section */}
      <ParallaxLayer
        offset={3}
        speed={0.1}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${facade4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <ParallaxLayer offset={3} speed={0.6}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-shadow">Rejoignez l'Écosystème</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Que vous soyez une startup innovante, une entreprise établie ou un investisseur visionnaire, 
              The Link vous offre l'environnement idéal pour prospérer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-primary text-lg px-12 py-5">
                Réserver une visite
              </a>
              <a href="/projet" className="btn-secondary text-lg px-12 py-5">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </ParallaxLayer>

</Parallax>
  );
}