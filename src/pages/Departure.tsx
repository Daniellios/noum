import Filter from "../components/Filter/Filter";
import FlightsTable from "../components/FlightsTable/FlightsTable";
import Navbar from "../components/Navbar/Navbar";

const Departure = () => {
  return (
    <>
      <Navbar></Navbar>
      <Filter></Filter>
      <FlightsTable></FlightsTable>
    </>
  );
};

export default Departure;
