import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faMap } from '@fortawesome/free-solid-svg-icons';

export default function PlanetCard({ planet }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2" /> {planet.name}
        </h3>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" /> Climate: {planet.climate}
        </p>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-1" /> Population: {planet.population}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" /> Terrain: {planet.terrain}
        </p>
      </div>
    </div>
  );
}
