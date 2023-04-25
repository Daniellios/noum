import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Departure from "./pages/Departure";
import Arrival from "./pages/Arrival";
import Flight from "./pages/Flight";
import Error from "./pages/Error";
import FlightsLayout from "./pages/FlightsLayout";

// Changed from this
// <Route path={"/arrival"} element={<Arrival />} />
// <Route path={"/departure"} element={<Departure />} />
// <Route path={"/arrival/:id"} element={<Flight />} />
// <Route path={"/departure/:id"} element={<Flight />} />

//To current setup

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/departure" />} />

        <Route path={"/arrival"}>
          <Route element={<FlightsLayout />}>
            <Route index element={<Arrival />} />
          </Route>
          <Route path={":id"} element={<Flight />} />
        </Route>

        <Route path={"/departure"}>
          <Route element={<FlightsLayout />}>
            <Route index element={<Departure />} />
          </Route>
          <Route path={":id"} element={<Flight />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
