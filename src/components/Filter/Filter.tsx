import { today } from "../../constants/data-placeholder";
import React, { KeyboardEvent, useEffect, useState } from "react";
import {
  FilterWrapper,
  InputFilter,
  InputFilterWrapper,
  SelectWrapper,
} from "./FilterStyles";

import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySearch,
  changeBoardFilters,
  applyFilters,
  currentBoardFilters,
  applySearchFilters,
} from "../../redux/slices/flightsSlice";
import { Terminal } from "types/data";
import useDebounce from "../../hooks/useDebounce";
import Select from "../../components/Select/Select";
import SearchSuggestion from "../../components/SearchSuggestion/SearchSuggestion";
import SearchButtons from "./SearchButtons";

const Filter = () => {
  const dispatch = useDispatch();
  const boardFilters = useSelector(currentBoardFilters);

  const [selectDateValue, setSelectDatevalue] = useState<string>(today);
  const [selectTerminalValue, setSelectTerminalValue] =
    useState<Terminal>("ALL");

  const [isSearchButtonVisible, setIsSearchButtonVisible] =
    useState<boolean>(false);

  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);

  const debounceSearch = useDebounce<string>(boardFilters.query, 500);

  useEffect(() => {
    dispatch(
      changeBoardFilters({
        query: debounceSearch,
        selected_date: selectDateValue,
        selected_terminal: selectTerminalValue,
        selected_time_range: boardFilters.selected_time_range,
      })
    );
    dispatch(applyFilters());
    dispatch(filterBySearch());
  }, [
    boardFilters.selected_time_range,
    debounceSearch,
    dispatch,
    selectDateValue,
    selectTerminalValue,
  ]);

  const handleSearchInputChange = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const querySearchValue = e.currentTarget.value;
    dispatch(
      changeBoardFilters({
        ...boardFilters,
        query: querySearchValue,
      })
    );
    setIsSuggestionVisible(!!querySearchValue);
  };

  const handleSelectDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDateValue = e.currentTarget.value;
    setSelectDatevalue(selectedDateValue);
  };

  const handleSelectTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = e.currentTarget.value;
    dispatch(
      changeBoardFilters({
        ...boardFilters,
        selected_time_range: selectedRange,
      })
    );
  };

  const handleSelectTerminalChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTerminal = e.currentTarget.value as Terminal;
    setSelectTerminalValue(selectedTerminal);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsSuggestionVisible(false);
      dispatch(applySearchFilters());
    }
  };

  return (
    <FilterWrapper>
      <InputFilterWrapper>
        <AiOutlineSearch></AiOutlineSearch>
        <InputFilter
          type="text"
          onKeyDown={handleKeyDown}
          value={boardFilters.query}
          onFocus={() => setIsSearchButtonVisible(true)}
          onBlur={() => setIsSearchButtonVisible(false)}
          onChange={handleSearchInputChange}
          placeholder="Поиск по номеру рейса, городу и авиакомпании"
        />
      </InputFilterWrapper>

      <SelectWrapper isVisible={!isSearchButtonVisible}>
        <Select
          value={boardFilters.selected_date}
          name="date"
          id="date"
          isDefaultValue={false}
          onChangeHandle={handleSelectDateChange}
        ></Select>

        <Select
          value={boardFilters.selected_time_range}
          name="timeSpan"
          isDefaultValue={
            boardFilters.selected_time_range === "" ? true : false
          }
          id="time"
          onChangeHandle={handleSelectTimeChange}
        ></Select>

        <Select
          value={boardFilters.selected_terminal}
          isDefaultValue={selectTerminalValue === "ALL" ? true : false}
          name="terminal"
          id="terminal"
          onChangeHandle={handleSelectTerminalChange}
        ></Select>
      </SelectWrapper>

      <SearchButtons isVisible={isSearchButtonVisible}></SearchButtons>

      {isSuggestionVisible && (
        <SearchSuggestion setIsOpen={setIsSuggestionVisible}></SearchSuggestion>
      )}
    </FilterWrapper>
  );
};

export default Filter;
