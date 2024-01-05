interface Films {
  title: string;
  episode_id: string;
  director: string;
  producer: string;
  release_date: string;
}

interface Data {
  next: string;
  previous: string;
  results: Films[];
}
export const getFilmsData = async (url: string): Promise<Data> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
