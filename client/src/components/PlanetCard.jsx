import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faMap } from '@fortawesome/free-solid-svg-icons';
import LoadingPopup from './Loading';

export default function PlanetCard({ planet }) {
  const { name, climate, population, terrain, residents } = planet;
  
  const [loading, setLoading] = useState(false);
  const [showResidentsDetails, setShowResidentDetails] = useState(false);
  const [residentDetails, setResidentDetails] = useState([]);

  const showResidents = () => {
    setShowResidentDetails(true);
  }

  useEffect(() => {
    setLoading(true);
    const fetchResidentDetails = async () => {
      try {
        const details = await Promise.all(
          residents.map(async (residentUrl) => {
            const response = await fetch(residentUrl);
            const data = await response.json();
            return data;
          })
        );
        setResidentDetails(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resident:", error);
        setLoading(false);
      }
    }

    fetchResidentDetails();
  }, [showResidentsDetails, residents]);

  return (
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      {loading && <LoadingPopup/>}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2" /> {name}
        </h3>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" /> Climate: {climate}
        </p>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-1" /> Population: {population}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" /> Terrain: {terrain}
        </p>
      </div>
      <div className="flex justify-center p-4">
        <button
          onClick={showResidents}
          className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-500 text-black hover:bg-yellow-400 h-8 rounded-md px-2"
        >
          VIEW RESIDENTS
        </button>
      </div>
    </div>
  );
}
