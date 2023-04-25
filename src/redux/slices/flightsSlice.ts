import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { flightBoard } from "../../constants/data-placeholder";
import { convertHourFormat } from "../../helpers/convertToHourFormat";
import dayjs from "../../utils/dayjs.config";
import { RootState } from "../store";
import {
  Direction,
  IFlight,
  IFlightBoard,
  IFlightBoardFilters,
} from "types/data";

// How to improve

// Значительное
// 1. Если Асинхронные данные, то создать asyncThunk
// 2. Для взаимодействия между reducerami можно использовать extraReducers

// Побочное
// 1. По мере добавления новой логики управления состояниями, можно разделить на несколько слайсов, кадый из которых иммет своюб зону ответственности
// 2. combineReducers для объединения в одно состояние

const initialState: IFlightBoard = flightBoard;

export const flightSlice = createSlice({
  name: "flightBoard",
  initialState,
  reducers: {
    applyFilters: (state) => {
      let filteredFlights = [];

      const { selected_date, selected_terminal, selected_time_range } =
        state.filters;

      const checkIfMathesTerminalValue = (flight: IFlight) => {
        if (selected_terminal === "ALL") {
          return flight.terminal !== "ALL";
        } else {
          return flight.terminal === selected_terminal;
        }
      };

      const checkIfMathesTimeSpanValue = (flight: IFlight) => {
        if (selected_time_range === "") return true;
        else {
          return selected_time_range
            .split(",")
            .includes(convertHourFormat(flight.time));
        }
      };

      const checkIfMathcesDateValue = (flight: IFlight) => {
        if (flight.date === selected_date) return true;
        else {
          return false;
        }
      };

      filteredFlights = initialState.flights.filter((flight) => {
        const mathesTerminalValue = checkIfMathesTerminalValue(flight);

        const mathesTimeSpanValue = checkIfMathesTimeSpanValue(flight);

        const mathesDateValue = checkIfMathcesDateValue(flight);

        if (mathesTerminalValue && mathesTimeSpanValue && mathesDateValue) {
          return flight;
        }
      });

      state.flights = filteredFlights;
      state.suggested_flights = filteredFlights;
    },
    //Для применения найденных результатов из рекомендованного списка
    applySearchFilters: (state) => {
      state.flights = state.suggested_flights;
    },
    filterBySearch: (state) => {
      let filteredFlights = [];

      filteredFlights = state.flights.filter(
        (flight) =>
          flight.city
            .toLowerCase()
            .includes(state.filters.query.toLowerCase()) ||
          flight.company
            .toLowerCase()
            .includes(state.filters.query.toLowerCase()) ||
          flight.flight_number
            .toLowerCase()
            .includes(state.filters.query.toLowerCase())
      );
      state.suggested_flights = filteredFlights;
    },
    filterById: (state, action: PayloadAction<string>) => {
      state.flights = state.flights.filter(
        (flight) => flight.id === action.payload
      );
    },
    changeBoardType: (state, action: PayloadAction<Direction>) => {
      state.board_type = action.payload;
    },
    changeBoardFilters: (state, action: PayloadAction<IFlightBoardFilters>) => {
      state.filters = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  applyFilters,
  filterById,
  changeBoardType,
  applySearchFilters,
  changeBoardFilters,
  filterBySearch,
} = flightSlice.actions;

///

export const selectDisplayedFlights = (state: RootState) =>
  state.flightBoard.flights
    .filter((flight) => flight.direction === state.flightBoard.board_type)
    .sort((a, b) => +dayjs(a.time) - +dayjs(b.time));

export const selectSuggestedFlights = (state: RootState) =>
  state.flightBoard.suggested_flights.filter(
    (flight) => flight.direction === state.flightBoard.board_type
  );

export const boardType = (state: RootState) => state.flightBoard.board_type;

export const currentBoardFilters = (state: RootState) =>
  state.flightBoard.filters;

export default flightSlice.reducer;
