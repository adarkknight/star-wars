import PlanetsTable from "./PlanetsTable";
import Heading from "./components/Heading";
import LinkGrid from "./components/LinkGrid";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/planets" element={<PlanetsTable />} />
        <Route path="/" element={<LinkGrid />} />
      </Routes>
    </>
  );
}

export default App;
