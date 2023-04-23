import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Direction,
  IFlight,
  IFlightBoard,
  IFlightBoardFilters,
} from "types/data";
import { flightBoard } from "../../constants/data-placeholder";
import { RootState } from "redux/store";
import { convertHourFormat } from "../../helpers/convertToHourFormat";

const initialState: IFlightBoard = flightBoard;

export const flightSlice = createSlice({
  name: "flightBoard",
  initialState,
  reducers: {
    applyFilters: (state) => {
      const checkIfTerminalValue = (flight: IFlight) => {
        if (state.filters.selected_terminal === "ALL") {
          return flight.terminal !== "ALL";
        } else {
          return flight.terminal === state.filters.selected_terminal;
        }
      };

      const checkIfMathesTimeSpanValue = (flight: IFlight) => {
        if (state.filters.selected_time_range.length === 1) return true;
        else {
          return state.filters.selected_time_range.includes(
            convertHourFormat(flight.time)
          );
        }
      };

      const checkIfMathcesDateValue = (flight: IFlight) => {
        if (flight.date === state.filters.selected_date) return true;
        else {
          return false;
        }
      };

      state.flights = initialState.flights.filter((flight) => {
        const mathesTerminalValue = checkIfTerminalValue(flight);

        const mathesTimeSpanValue = checkIfMathesTimeSpanValue(flight);

        const mathesDateValue = checkIfMathcesDateValue(flight);

        if (mathesTerminalValue && mathesTimeSpanValue && mathesDateValue) {
          return flight;
        }
      });
    },
    filterBySearch: (state) => {
      state.flights = state.flights.filter(
        (flight) =>
          flight.city.toLowerCase().includes(state.filters.query) ||
          flight.company.toLowerCase().includes(state.filters.query) ||
          flight.flight_number.toLowerCase().includes(state.filters.query)
      );
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
      console.log("FILTERS", action.payload);
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  applyFilters,
  filterById,
  changeBoardType,
  changeBoardFilters,
  filterBySearch,
} = flightSlice.actions;

export const selectDisplayedFlights = (state: RootState) =>
  state.flightBoard.flights.filter(
    (flight) => flight.direction === state.flightBoard.board_type
  );

export const boardType = (state: RootState) => state.flightBoard.board_type;

export const currentBoardFilters = (state: RootState) =>
  state.flightBoard.filters;

export default flightSlice.reducer;
