interface Films {
  title: string;
  episode_id: string;
  director: string;
  producer: string;
  release_date: string;
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

const Films = () => {
  const [url, setUrl] = useState(`${baseUrl}films`);
  const makeRequest = useCallback(() => fetchData<Films[]>(url), [url]);

  const { isFetching, error, data } = useFetch<Data<Films[]>>(makeRequest);

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
        {data?.results.map((film) => (
          <div className="w-full md:w-64 mt-3 mb-3 bg-secondary-content shadow-xl rounded-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Episode {film.episode_id}</h2>
              <h1 className="font-bold">{film.title}</h1>
              <p className="text-xs">Director: {film.director}</p>
              <p className="text-xs">Producers: {film.producer}</p>
              <p className="text-xs">Release Date: {film.release_date}</p>
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

export default Films;
