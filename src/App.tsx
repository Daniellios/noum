import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Departure from "./pages/Departure";
import Arrival from "./pages/Arrival";
import Flight from "./pages/Flight";
import Error from "./pages/Error";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Filter></Filter>

      <Routes>
        <Route index element={<Navigate to="/departure" />} />
        <Route path={"/arrival"} element={<Arrival />} />
        <Route path={"/departure"} element={<Departure />} />
        <Route path={"/arrival/:id"} element={<Flight />} />
        <Route path={"/departure/:id"} element={<Flight />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
