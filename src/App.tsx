import PlanetsTable from "./components/PlanetsTable";
import Films from "./components/Films";
import Heading from "./components/Heading";
import People from "./components/People";
import LinkGrid from "./components/LinkGrid";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SpeciesTable from "./components/SpeciesTable";
import StarshipsTable from "./components/StarshipsTable";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/planets" element={<PlanetsTable />} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
        <Route path="/species" element={<SpeciesTable />} />
        <Route path="/starships" element={<StarshipsTable />} />
        <Route path="/" element={<LinkGrid />} />
      </Routes>
    </>
  );
}

export default App;
