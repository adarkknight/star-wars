interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  language: string;
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

const SpeciesTable = () => {
  const [url, setUrl] = useState(`${baseUrl}species`);
  const makeRequest = useCallback(() => fetchData<Species[]>(url), [url]);
  const [disabled, setDisabled] = useState(false);

  const { isFetching, error, data } = useFetch<Data<Species[]>>(makeRequest);

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
              <th>Classification</th>
              <th>Designation</th>
              <th>Average Height</th>
              <th>Average Lifespan</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((species) => (
              <tr>
                <td key={species.name}>{species.name} </td>
                <td key={species.classification}>{species.classification}</td>
                <td key={species.designation}>{species.designation}</td>
                <td key={species.average_height}>{species.average_height}</td>
                <td key={species.average_lifespan}>
                  {species.average_lifespan}
                </td>
                <td key={species.language}>{species.language}</td>
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

export default SpeciesTable;
