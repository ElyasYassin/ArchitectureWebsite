import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Footer from './Footer.tsx';

import vid from './video/HomeVid.mp4';
import facade1 from './images/facade1.webp'
import facade2 from './images/facade2.webp'
import facade3 from './images/facade3.webp'
import facade4 from './images/facade4.webp'

export default function Home() {
  return (
    <>
    <Parallax pages={3} style={{}} className="relative">

      {/* Background layer (slow scroll) */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          backgroundImage: `url(${facade1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Foreground text (normal scroll) */}
      <ParallaxLayer offset={0} speed={4}        style={{
          backgroundImage: `url(${facade2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-black/60">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">The Link</h1>
          <p className="text-xl md:text-2xl mb-4">The Business Innovation Exchange – Bab Ezzouar</p>
          <p className="text-lg md:text-xl italic mb-10">Un hub d’affaires connecté à l’avenir.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="/espaces" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Explorer les espaces</a>
            <a href="/gallery" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Voir les rendus 3D</a>
            <a href="/brochure.pdf" target="_blank" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Télécharger la brochure</a>
          </div>
        </div>
      </ParallaxLayer>

      {/* Second page layer */}
      <ParallaxLayer offset={1} speed={1}         style={{
          backgroundImage: `url(${facade3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="h-screen flex items-center justify-center text-3xl text-gray-800">
          🚧 Placeholder for next section (e.g., Le Projet)
        </div>
      </ParallaxLayer>

          {/* Third page layer */}
          <ParallaxLayer offset={2} speed={1}         style={{
          backgroundImage: `url(${facade4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="h-screen flex items-center justify-center text-3xl text-gray-800">
          🚧 Placeholder for next section (e.g., Le Projet)
        </div>
      </ParallaxLayer>

    </Parallax>
    </>
  );
}