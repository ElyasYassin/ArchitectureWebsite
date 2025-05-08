import React from 'react';

export default function Home() {
    return (
      <section
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529429611270-18e1f91d7d0d?auto=format&fit=crop&w=1650&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">Eden Architecture</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-sm">
            Shaping cities with sustainable elegance. Explore the intersection of light, form, and life.
          </p>
          <div className="mt-12 animate-bounce text-3xl">⬇</div>
        </div>
      </section>
    );
  }
  