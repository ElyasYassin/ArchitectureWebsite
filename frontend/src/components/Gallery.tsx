import React from 'react';

export default function Gallery() {
    const images = [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585152633-59c8bcf67e33?auto=format&fit=crop&w=800&q=80'
    ];
  
    return (
      <section className="px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Render ${index + 1}`} className="rounded shadow-md w-full h-auto" />
          ))}
        </div>
      </section>
    );
  }
  