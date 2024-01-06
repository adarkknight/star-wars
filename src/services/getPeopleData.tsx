interface People {
  name: string;
  height: string;
  mass: string;
}

interface Data {
  next: string;
  previous: string;
  results: People[];
}
export const getPeopleData = async (url: string): Promise<Data> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
