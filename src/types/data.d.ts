export interface IFlightBoard {
  flights: IFlight[];
  board_type: Direction;
  filters: IFlightBoardFilters;
}

export interface IFlightBoardFilters {
  query: string;
  selected_date: string;
  selected_time_range: string[];
  selected_terminal: Terminal;
}

export interface IFlight {
  id: string;
  city: string;
  direction: Direction;
  terminal: Terminal;
  time: number;
  date: string;
  company: string;
  flight_number: string;
  gate: string;
  flight_status: FligtStatus;
}

export type Direction = "arrival" | "departure";

export type Terminal = "A" | "B" | "C" | "D" | "E" | "F" | "ALL";

export type FligtStatus = "CANCELLED" | "ARRIVED" | "FLYING";
