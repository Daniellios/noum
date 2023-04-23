import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Departure from "./pages/Departure";
import Arrival from "./pages/Arrival";
import GlobalStyle from "./styles/globalStyles";
import Flight from "./pages/Flight";
import Error from "./pages/Error";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
