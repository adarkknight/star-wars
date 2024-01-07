interface Starships {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  hyperdrive_rating: string;
  starship_class: string;
}

interface Data<T> {
  next: string;
  previous: string;
  results: T;
}

import Button from "./Button";
import { useState, useCallback } from "react";
import { useFetch } from "../hooks/fetchData";

export const fetchData = async <T = object,>(url: string): Promise<Data<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
const baseUrl = import.meta.env.VITE_SWAPI_BASE_URL;

const StarshipsTable = () => {
  const [url, setUrl] = useState(`${baseUrl}starships`);
  const makeRequest = useCallback(() => fetchData<Starships[]>(url), [url]);

  const { isFetching, error, data } = useFetch<Data<Starships[]>>(makeRequest);

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
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Credit Cost</th>
              <th>Length</th>
              <th>Max Atmosphering Speed</th>
              <th>Crew</th>
              <th>Passengers</th>
              <th>Hyperdrive Rating</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((starship) => (
              <tr>
                <td key={starship.name}>{starship.name} </td>
                <td key={starship.model}>{starship.model}</td>
                <td key={starship.manufacturer}>{starship.manufacturer}</td>
                <td key={starship.cost_in_credits}>
                  {starship.cost_in_credits}
                </td>
                <td key={starship.length}>{starship.length}</td>
                <td key={starship.max_atmosphering_speed}>
                  {starship.max_atmosphering_speed}
                </td>
                <td key={starship.crew}>{starship.crew}</td>
                <td key={starship.passengers}>{starship.passengers}</td>
                <td key={starship.hyperdrive_rating}>
                  {starship.hyperdrive_rating}
                </td>
                <td key={starship.starship_class}>{starship.starship_class}</td>
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

export default StarshipsTable;
