import React, { useEffect, useState } from "react";
import { SWAPI_URL } from "../Utils/Constants";
import PlanetCard from "../components/PlanetCard";
import LoadingPopup from "../components/Loading";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [planetData, setPlanetData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(SWAPI_URL + pageNumber + "&format=json");
        const data = await response.json();
        console.log(data.results);
        setPlanetData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  const handlePageUp = () => {
    setPageNumber((prevPageNumber) => (prevPageNumber < 5 ? prevPageNumber + 1 : 1));
  };
  const handlePageDown = () => {
    setPageNumber((prevPageNumber) => (prevPageNumber > 1 ? prevPageNumber - 1 : 5));
  };

  return (
    <div>
      {loading && <LoadingPopup />}

      <div className="flex justify-center pb-5 pt-6 gap-9 items-center top-16 z-10 text-white">
        <button
          className="bg-yellow-400 border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 hover:text-white transition duration-300 shadow-md"
          onClick={handlePageDown}
        >
          Previous
        </button>
        <h1 className="text-3xl text-black font-bold">{pageNumber}</h1>
        <button
          className="bg-yellow-400 border-2 border-black text-black p-2 rounded-full hover:bg-yellow-300 hover:text-white transition duration-300 shadow-md"
          onClick={handlePageUp}
        >
          Next
        </button>
      </div>

      <div className="p-8 pt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8">
        {planetData && planetData.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
}
