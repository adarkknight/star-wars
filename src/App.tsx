import PlanetsTable from "./components/PlanetsTable";
import Films from "./components/Films";
import Heading from "./components/Heading";
import People from "./components/People";
import LinkGrid from "./components/LinkGrid";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/planets" element={<PlanetsTable />} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<LinkGrid />} />
      </Routes>
    </>
  );
}

export default App;
