import useOnClickOutside from "../../hooks/useClickOutside";
import React, { memo, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBoardFilters,
  currentBoardFilters,
  filterById,
  selectSuggestedFlights,
} from "../../redux/slices/flightsSlice";
import {
  SuggestionBox,
  SuggestionBoxRow,
  SuggestionBoxWrapper,
} from "./SearchSuggestionStyles";

// How to improve

// Значительное
// 1. Изменить способ подставления рекомендованных значений
// 2. Продумать алгоритм подстановки в значение поиска

// Побочное
// 1. Можно добавить состояние видимости в отдельный Slice исключительно для UI

interface SearchSuggestionProps {
  setIsOpen: (value: boolean) => void;
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = memo(
  ({ setIsOpen }) => {
    const suggestBoxRef = useRef(null);
    const dispatch = useDispatch();

    const suggestedFlights = useSelector(selectSuggestedFlights);
    const boardFilters = useSelector(currentBoardFilters);

    const suggestedValue = (value: string) => {
      return boardFilters.query.includes(value) || value;
    };

    const handleClickOutside = useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

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
          {suggestedFlights.map((flight) => (
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
  }
);

export default SearchSuggestion;
