interface Vessels {
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

interface Props {
  path: string;
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

const VesselsTable = ({ path }: Props) => {
  const [url, setUrl] = useState(`${baseUrl}${path}`);
  const makeRequest = useCallback(() => fetchData<Vessels[]>(url), [url]);

  const { isFetching, error, data } = useFetch<Data<Vessels[]>>(makeRequest);

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
            {data?.results.map((Vessel) => (
              <tr>
                <td key={Vessel.name}>{Vessel.name} </td>
                <td key={Vessel.model}>{Vessel.model}</td>
                <td key={Vessel.manufacturer}>{Vessel.manufacturer}</td>
                <td key={Vessel.cost_in_credits}>{Vessel.cost_in_credits}</td>
                <td key={Vessel.length}>{Vessel.length}</td>
                <td key={Vessel.max_atmosphering_speed}>
                  {Vessel.max_atmosphering_speed}
                </td>
                <td key={Vessel.crew}>{Vessel.crew}</td>
                <td key={Vessel.passengers}>{Vessel.passengers}</td>
                <td key={Vessel.hyperdrive_rating}>
                  {Vessel.hyperdrive_rating}
                </td>
                <td key={Vessel.starship_class}>{Vessel.starship_class}</td>
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

export default VesselsTable;
