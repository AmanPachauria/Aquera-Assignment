import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUsers, faMap } from "@fortawesome/free-solid-svg-icons";
import ResidentDetails from "./ResidentDetails";

export default function PlanetCard({ planet }) {
  const { name, climate, population, terrain, residents } = planet;
  
  const [loading, setLoading] = useState(false);
  const [showResidentsDetails, setShowResidentDetails] = useState(false);
  const [residentDetails, setResidentDetails] = useState([]);

  const showResidents = () => {
    setShowResidentDetails(true);
  };

  const closeResidents = () => {
    setShowResidentDetails(false);
  };

  useEffect(() => {
    setLoading(true);
    if (showResidentsDetails) {
      const fetchResidentDetails = async () => {
        try {
          const details = await Promise.all(
            residents.map(async (residentUrl) => {
              const response = await fetch(residentUrl);
              const data = await response.json();
              return data;
            })
          );
          console.log(details);
          setResidentDetails(details);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching resident:", error);
          setLoading(false);
        }
      };

      fetchResidentDetails();
    }
  }, [showResidentsDetails, residents]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2" />{" "}
          {name}
        </h3>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" />{" "}
          Climate: {climate}
        </p>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-1" />{" "}
          Population: {population}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1" />{" "}
          Terrain: {terrain}
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
      {showResidentsDetails && (
        <div className="fixed inset-0 overflow-y-auto z-20">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6 w-96 md:w-auto">
                <h2 className="text-2xl font-semibold mb-4">
                  Residents Details
                </h2>
                
                {residentDetails.length > 0 ? (
                  <div className="max-h-96 overflow-y-scroll no-scrollbar">
                    {residentDetails.map((resident, index) => (
                      <ResidentDetails key={index} data={resident} />
                    ))}
                  </div>
                ) : (<div className="text-xl font-semibold mb-4"> 
                              {loading ? ("Loading...") : ("No Resident Found")} 
                  </div>)}
                <button
                  onClick={closeResidents}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-yellow-500 hover:bg-yellow-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
