import React, { useState } from 'react';
import mapImage from './images/site-plan.webp'; 
import marriottImg from './images/hotels/mariot.webp'; 
import mercureImg from './images/hotels/mercure.webp';
import ibisImg from './images/hotels/ibis.webp'; 
import orientalImg from './images/hotels/oriental.webp';
import mallImg from './images/hotels/mall.webp'; 
import bnpImg from './images/hotels/BNPparibas.webp';
import mobilisImg from './images/hotels/mobilis.webp'; 


const hotspots = [
  {
    id: 'marriott',
    name: 'Hôtel Marriott',
    description: 'Luxe moderne au cœur du quartier d’affaires.',
    img: marriottImg,
    top: '40%',
    left: '50%',
    cardDirection: 'right',
  },
  {
    id: 'mercure',
    name: 'Hôtel Mercure',
    description: 'Élégance accessible et confort professionnel.',
    img: mercureImg,
    top: '30%',
    left: '60%',
    cardDirection: 'left',
  },
  {
    id: 'ibis',
    name: 'Hôtel Ibis',
    description: 'Pratique et économique pour les séjours rapides.',
    img: ibisImg,
    top: '25%',
    left: '70%',
    cardDirection: 'right',
  },
  {
    id: 'oriental',
    name: 'Oriental Business Center',
    description: 'Centre d’affaires moderne avec services intégrés.',
    img: orientalImg,
    top: '65%',
    left: '40%',
    cardDirection: 'left',
  },
  {
    id: 'mall',
    name: 'Centre Commercial Bab Ezzouar',
    description: 'Shopping, restauration et divertissement.',
    img: mallImg,
    top: '40%',
    left: '63%',
    cardDirection: 'right',
  },
  {
    id: 'bnp',
    name: 'BNP Paribas',
    description: 'Agence bancaire internationale.',
    img: bnpImg,
    top: '27%',
    left: '83%',
    cardDirection: 'left',
  },
  {
    id: 'mobilis',
    name: 'Mobilis',
    description: 'Siège régional de l’opérateur télécom.',
    img: mobilisImg,
    top: '25%',
    left: '90%',
    cardDirection: 'right',
  },
];

export default function HotelMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <img src={mapImage} alt="Plan du site" className="w-full rounded shadow" />

      {hotspots.map((spot) => {
        const isHovered = hovered === spot.id;
        const cardOffset = spot.cardDirection === 'right' ? 'translate-x-6' : '-translate-x-full -translate-x-6';

        return (
          <div
            key={spot.id}
            className="absolute z-10"
            style={{
              top: spot.top,
              left: spot.left,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHovered(spot.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Dot */}
            <div className="w-12 h-12 bg-grey-600 rounded-full border-2 border-white shadow-md" />

            {/* Hover Card */}
            {isHovered && (
              <div
                className={`absolute top-0 ${spot.cardDirection === 'right' ? 'left-6' : 'right-6'} ${cardOffset} bg-white shadow-xl rounded-lg p-4 w-64 z-20`}
              >
                <img src={spot.img} alt={spot.name} className="w-full h-32 object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">{spot.name}</h3>
                <p className="text-sm text-gray-600">{spot.description}</p>
              </div>
            )}

            {/* Leader Line */}
            {isHovered && (
              <div
                className={`absolute top-2.5 h-px bg-gray-400`}
                style={{
                  width: '48px',
                  left: spot.cardDirection === 'right' ? '20px' : 'auto',
                  right: spot.cardDirection === 'left' ? '20px' : 'auto',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}