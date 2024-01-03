import PlanetsTable from "./PlanetsTable";
import Heading from "./components/Heading";
import LinkGrid from "./components/LinkGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <LinkGrid />
      {/* <div className="grid gridcols-1">{<PlanetsTable />}</div> */}
    </>
  );
}

export default App;
