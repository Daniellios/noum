import useOnClickOutside from "../../hooks/useClickOutside";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBoardFilters,
  currentBoardFilters,
  filterById,
  selectDisplayedFlights,
} from "../../redux/slices/flightsSlice";
import {
  SuggestionBox,
  SuggestionBoxRow,
  SuggestionBoxWrapper,
} from "./SearchSuggestionStyles";

interface SearchSuggestionProps {
  setIsOpen: (value: boolean) => void;
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({ setIsOpen }) => {
  const suggestBoxRef = useRef(null);
  const dispatch = useDispatch();

  const flights = useSelector(selectDisplayedFlights);
  const boardFilters = useSelector(currentBoardFilters);

  const suggestedValue = (value: string) => {
    return boardFilters.query.includes(value) || value;
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const selectSuggestedValue = (id: string) => {
    setIsOpen(false);

    dispatch(
      changeBoardFilters({
        ...boardFilters,
      })
    );

    dispatch(filterById(id));
  };

  useOnClickOutside(suggestBoxRef, handleClickOutside);

  return (
    <SuggestionBoxWrapper ref={suggestBoxRef}>
      <SuggestionBox>
        {flights.map((flight) => (
          <SuggestionBoxRow
            key={flight.id + "sg"}
            onClick={() => selectSuggestedValue(flight.id)}
          >
            <p>{suggestedValue(flight.city)} - </p>
            <p>{suggestedValue(flight.flight_number)} - </p>
            <p> {suggestedValue(flight.company)}</p>
          </SuggestionBoxRow>
        ))}
      </SuggestionBox>
    </SuggestionBoxWrapper>
  );
};

export default SearchSuggestion;
