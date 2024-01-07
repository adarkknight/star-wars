interface People {
  name: string;
  height: string;
  mass: string;
}

interface Data<T> {
  next: string;
  previous: string;
  results: T;
}

import Button from "./Button";
import { useState, useCallback } from "react";
import { useFetch } from "../hooks/fetchData";
import DataLinkCardContainer from "./DataLinkCardContainer";

export const fetchData = async <T = object,>(url: string): Promise<Data<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
const baseUrl = import.meta.env.VITE_SWAPI_BASE_URL;

const People = () => {
  const [url, setUrl] = useState(`${baseUrl}people`);
  const makeRequest = useCallback(() => fetchData<People[]>(url), [url]);
  const { isFetching, error, data } = useFetch<Data<People[]>>(makeRequest);

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
      <DataLinkCardContainer>
        {data?.results.map((person) => (
          <div className="card w-full md:w-64 mt-3 mb-3 bg-secondary-content shadow-xl rounded-xl">
            <div className="card-body">
              <h3 className="card-title">{person.name}</h3>
              <p className="text-xs">Height: {person.height}</p>
              <p className="text-xs">Mass: {person.mass}</p>
            </div>
          </div>
        ))}
      </DataLinkCardContainer>
      {data?.next && (
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
      )}
    </>
  );
};

export default People;
