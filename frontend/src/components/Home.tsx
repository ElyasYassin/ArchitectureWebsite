import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import facade1 from './images/facade1.webp';
import facade2 from './images/facade2.webp';
import facade3 from './images/facade3.webp';
import facade4 from './images/facade4.webp';
import homevid from './video/HomeSection.mp4';

export default function Home() {
  return (
    <Parallax pages={4} className="relative">
      {/* Hero Section Background */}
      <ParallaxLayer offset={0} speed={0.1} factor={1}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={homevid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
      </ParallaxLayer>

      {/* Hero Section Content */}
      <ParallaxLayer offset={0} speed={0.5} factor={1}>
        <div className="h-screen flex flex-col justify-center items-center text-white text-center px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-shadow tracking-tight">
              The <span className="gradient-text-white">Link</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light text-shadow">
              The Business Innovation Exchange
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Un hub d'affaires connecté à l'avenir, situé au cœur de Bab Ezzouar
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/espaces" className="btn-primary animate-float">Explorer les espaces</a>
              <a href="/galerie" className="btn-secondary">Voir les rendus 3D</a>
              <a href="/telechargements" className="btn-secondary">Télécharger la brochure</a>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Vision Section Background */}
      <ParallaxLayer
        offset={1}
        speed={0.2}
        factor={1}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${facade2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Vision Section Content */}
      <ParallaxLayer offset={1} speed={0.6} factor={1}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="glass-effect rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto text-white text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-shadow">Notre Vision</h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
              Créer un écosystème d'innovation où les entreprises prospèrent grâce à la connectivité, la durabilité et la flexibilité architecturale de nouvelle génération.
            </p>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
              {[
                { icon: '🔗', title: 'Connectivité', desc: 'Accès optimal aux transports et réseaux intelligents', bg: 'bg-blue-500/30' },
                { icon: '🌱', title: 'Durabilité', desc: 'Matériaux écoresponsables et performance énergétique', bg: 'bg-green-500/30' },
                { icon: '⚡', title: 'Flexibilité', desc: 'Espaces modulables adaptés à tous types d\'entreprises', bg: 'bg-purple-500/30' }
              ].map(({ icon, title, desc, bg }, idx) => (
                <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="opacity-80 text-sm lg:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Innovation Section Background */}
      <ParallaxLayer
        offset={2}
        speed={0.1}
        factor={1}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${facade3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Innovation Section Content */}
      <ParallaxLayer offset={2} speed={0.5} factor={1}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-white text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-shadow">Innovation & Technologie</h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="glass-effect rounded-2xl p-6 lg:p-8">
                <h3 className="text-2xl font-semibold mb-6">Technologies Avancées</h3>
                <ul className="text-left space-y-4">
                  {[
                    ['Façade intelligente à double peau', 'bg-blue-400'],
                    ['Gestion énergétique automatisée', 'bg-green-400'],
                    ['IA et domotique intégrées', 'bg-purple-400'],
                    ['Matériaux durables et allégés', 'bg-yellow-400'],
                  ].map(([text, color], idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`w-2 h-2 ${color} rounded-full mr-4 flex-shrink-0`}></span>
                      <span className="text-sm lg:text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-effect rounded-2xl p-6 lg:p-8">
                <h3 className="text-2xl font-semibold mb-6">Espaces Innovants</h3>
                <p className="text-base lg:text-lg leading-relaxed mb-6">
                  Des plateaux modulables aux espaces de co-working, en passant par les labs d'innovation, chaque niveau est conçu pour stimuler la créativité et la collaboration.
                </p>
                <a href="/espaces" className="btn-primary inline-block">Découvrir les espaces</a>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Call to Action Section Background */}
      <ParallaxLayer
        offset={3}
        speed={0.2}
        factor={1}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${facade4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Call to Action Section Content */}
      <ParallaxLayer offset={3} speed={0.4} factor={1}>
        <div className="h-screen flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-shadow">Rejoignez l'Écosystème</h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90 leading-relaxed">
              Que vous soyez une startup innovante, une entreprise établie ou un investisseur visionnaire, The Link vous offre l'environnement idéal pour prospérer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-primary text-lg px-12 py-5">Réserver une visite</a>
              <a href="/projet" className="btn-secondary text-lg px-12 py-5">En savoir plus</a>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}