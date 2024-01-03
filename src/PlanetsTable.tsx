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

interface Data<T> {
  next: string;
  previous: string;
  results: T;
}

import Button from "./components/Button";
import { useState, useCallback } from "react";
import { useFetch } from "./hooks/fetchData";

export const fetchData = async <T = object,>(url: string): Promise<Data<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
const baseUrl = import.meta.env.VITE_SWAPI_BASE_URL;

const PlanetsTable = () => {
  const [url, setUrl] = useState(`${baseUrl}planets`);
  const makeRequest = useCallback(() => fetchData<Planet[]>(url), [url]);
  const [disabled, setDisabled] = useState(false);

  const { isFetching, error, data } = useFetch<Data<Planet[]>>(makeRequest);

  const handlePrevClick = async () => {
    if (data?.previous) {
      setUrl(data.previous);
    }
  };

  const handleNextClick = async () => {
    if (data?.next) {
      setUrl(data.next);
    }
  };

  if (isFetching)
    return <span className="loading loading-ring loading-xs"></span>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="overflow-x-auto grid grid-flow-row">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Diameter</th>
              <th>Gravity</th>
              <th>Orbital Period</th>
              <th>Rotation Period</th>
              <th>Surface Water</th>
              <th>Terrain</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((planet) => (
              <tr>
                <td key={planet.name}>{planet.name} </td>
                <td key={planet.climate}>{planet.climate}</td>
                <td key={planet.diameter}>{planet.diameter}</td>
                <td key={planet.gravity}>{planet.gravity}</td>
                <td key={planet.orbital_period}>{planet.orbital_period}</td>
                <td key={planet.rotation_period}>{planet.rotation_period}</td>
                <td key={planet.surface_water}>{planet.surface_water}</td>
                <td key={planet.terrain}>{planet.terrain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div>
          <Button
            onClick={handlePrevClick}
            text="Prev"
            disabled={!data?.previous}
          />
        </div>
        <div>
          <Button
            onClick={handleNextClick}
            text="Next"
            disabled={!data?.next}
          />
        </div>
      </div>
    </>
  );
};

export default PlanetsTable;
