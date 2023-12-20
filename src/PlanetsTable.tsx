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

import Button from "./components/Button";
import { useFetch } from "./hooks/fetchData";
import { getPlanetData } from "./services/getPlanetData";

const PlanetsTable: React.FC = () => {
  const { isFetching, error, data, setData, setError } =
    useFetch<Data>(getPlanetData);

  if (isFetching)
    return <span className="loading loading-ring loading-xs"></span>;
  if (error) return <div>Error: {error}</div>;

  console.log("this is data", data);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>
              {/* {data?.results.map((planet, index) => (
                <th className="text-wrap" key={index}>
                  {Object.keys(planet)}
                </th>
              ))} */}
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
      <div className="flex items-center justify-center mt-5 bg-slate-600">
        <div>
          <Button onClick={() => console.log("I was clicked!")} text="Prev" />
        </div>
        <div>
          <Button onClick={() => console.log("I was clicked!")} text="Next" />
        </div>
      </div>
    </>
  );
};

export default PlanetsTable;
