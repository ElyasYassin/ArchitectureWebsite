import React from 'react';

export default function Project() {
    return (
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          The Eden Complex is a sustainable, mixed-use development located in the heart of downtown Lisbon.
          Designed with biophilic principles and a minimalist European aesthetic, Eden combines residential,
          co-working, and cultural spaces in one cohesive structure.
        </p>
        <p className="text-gray-700 mb-4">
          Commissioned by the Lisbon Urban Development Board in 2024, the project broke ground in March 2025
          and is expected to be completed by Fall 2026.
        </p>
        <p className="text-gray-700">
          Key features include an open-air atrium, modular façades with sun-tracking louvers, and a below-ground
          geothermal cooling system. The building is targeting LEED Platinum certification.
        </p>
      </section>
    );
  }