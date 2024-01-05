
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

export const getPlanetData = async (url: string): Promise<Data> =>{
     const response = await fetch(url);
     if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
     }
     return await response.json();

}
