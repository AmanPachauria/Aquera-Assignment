import React from "react";

const ResidentDetails = (props) => {
  const { name, gender, mass, hair_color, birth_year } = props.data;

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-1 ">{name}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-bold">Gender:</span> {gender}
          </p>
          <p className="text-sm text-gray-700">
            {" "}
            <span className="font-bold">Mass:</span> {mass}
          </p>
          <p className="text-sm text-gray-700">
            {" "}
            <span className="font-bold">Hair Color:</span> {hair_color}
          </p>
          <p className="text-sm text-gray-700">
            {" "}
            <span className="font-bold">Birth Year:</span> {birth_year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentDetails;
