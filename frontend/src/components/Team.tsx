import React from 'react';

export default function Team() {
    const team = [
      { name: 'Sabri Saadi', role: 'Lead Architect' }
    ];
  
    return (
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }