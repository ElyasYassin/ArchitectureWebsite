import React from 'react';

export default function Models() {
    return (
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">3D Models and Floorplans</h2>
        <p className="text-gray-700 mb-8">
          Below are interactive views of Eden's structural and spatial designs. These models showcase the
          modularity of the living units, community-focused public areas, and sustainable mechanical layouts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <iframe
            src="https://sketchfab.com/models/7w7pAfrEgZ9vXvneUGAyOQWTk/embed"
            title="3D Model"
            className="w-full aspect-video rounded shadow-md"
            allow="autoplay; fullscreen; vr"
          ></iframe>
          <div className="aspect-video bg-gray-200 rounded shadow-md flex items-center justify-center text-gray-500">
            Floorplan PDF coming soon
          </div>
        </div>
      </section>
    );
  }
  