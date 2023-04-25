import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const FlightsLayout: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Filter></Filter>
      <Outlet />
    </>
  );
};

export default FlightsLayout;
