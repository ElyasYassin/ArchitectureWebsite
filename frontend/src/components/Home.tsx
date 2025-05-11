import React from 'react';

import vid from './video/HomeVid.mp4';

export default function Home() {
    return (
  <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-black">
    {/* Background video or image */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black/60 z-0" />

    {/* Foreground content */}
    <div className="z-10 px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">The Link</h1>
      <p className="text-xl md:text-2xl mb-4">The Business Innovation Exchange – Bab Ezzouar</p>
      <p className="text-lg md:text-xl italic mb-10">Un hub d’affaires connecté à l’avenir.</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/espaces" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Explorer les espaces</a>
        <a href="/gallerie" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Voir les rendus 3D</a>
        <a href="/telechargements/brochure.pdf" target="_blank" className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition">Télécharger la brochure</a>
      </div>
    </div>
  </section>
    );
  }
  