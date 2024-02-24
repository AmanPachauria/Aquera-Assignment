import React, { useEffect, useState } from 'react';

export default function PlanetCard({ planet }) {

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="flex flex-col space-y-1.5 p-4 pb-2">
        <h3 className="text-3xl font-semibold whitespace-nowrap leading-none tracking-tight">
          {planet.name}
        </h3>
        <p className="text-md text-muted-foreground flex items-center gap-1">
          Climate: {planet.climate}
        </p>
        <p className="text-md text-muted-foreground flex items-center gap-1">
          Population: {planet.population}
        </p>
        <p className="text-md text-muted-foreground flex items-center gap-1">
          Terrain: {planet.terrain}
        </p>
      </div>
      
    </div>
  );
}
