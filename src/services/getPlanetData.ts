import axios from 'axios';
import { useState, useEffect } from 'react';

interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
  }

  interface Data {
    next: string;
    previous: string;
    results: Planet[];
  }

export const getPlanetData = async (): Promise<Data> =>{
     const response = await fetch('http://swapi.dev/api/planets');
     if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
     }
     return await response.json();

}
