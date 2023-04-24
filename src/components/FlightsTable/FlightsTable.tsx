import React from "react";
import { useSelector } from "react-redux";
import {
  boardType,
  selectDisplayedFlights,
} from "../../redux/slices/flightsSlice";
import {
  FlightCity,
  FlightMainInfo,
  FlightNumber,
  FlightRow,
  FlightStatus,
  FlightSubInfo,
  FlightTable,
  FlightTime,
  FlightTerminal,
  FlightGate,
} from "./FlightsTableStyles";
import { BsFillAirplaneFill } from "react-icons/bs";
import { convertHourFormat } from "../../helpers/convertToHourFormat";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FlightsTable: React.FC = () => {
  const flights = useSelector(selectDisplayedFlights);

  const board_type = useSelector(boardType);

  const navigate = useNavigate();

  return (
    <FlightTable>
      {flights.length > 0 ? (
        flights.map((flight) => (
          <FlightRow
            key={flight.id}
            onClick={() => navigate(`/${board_type}/${flight.id}`)}
          >
            <FlightMainInfo>
              <FlightTime>{convertHourFormat(flight.time)}</FlightTime>
              <FlightCity>{flight.city}</FlightCity>
            </FlightMainInfo>

            <FlightSubInfo>
              <FlightNumber>
                <BsFillAirplaneFill
                  style={{ fontSize: "14px" }}
                ></BsFillAirplaneFill>

                <p>{flight.flight_number}</p>
              </FlightNumber>

              <FlightTerminal>
                <p>{flight.terminal}</p>
              </FlightTerminal>

              <FlightGate>
                <p>{flight.gate}</p>
              </FlightGate>

              <FlightStatus>{flight.flight_status}</FlightStatus>

              <AiOutlineArrowRight></AiOutlineArrowRight>
            </FlightSubInfo>
          </FlightRow>
        ))
      ) : (
        <h1>По вашему запросу ничего не найдено.</h1>
      )}
    </FlightTable>
  );
};

export default FlightsTable;
