import { today } from "../../constants/data-placeholder";
import React, { KeyboardEvent, useCallback, useEffect, useState } from "react";
import {
  FilterButton,
  FilterButtonWrapper,
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

const Filter = () => {
  const dispatch = useDispatch();
  const boardFilters = useSelector(currentBoardFilters);

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectDateValue, setSelectDatevalue] = useState<string>(today);
  const [selectTimeValue, setSelectTimeValue] = useState<string | string[]>([
    "",
  ]);
  const [selectTerminalValue, setSelectTerminalValue] =
    useState<Terminal>("ALL");

  const [isSearchButtonVisible, setIsSearchButtonVisible] =
    useState<boolean>(false);

  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);

  const debounceSearch = useDebounce<string>(searchValue, 500);

  const dispatchFilters = useCallback(() => {
    dispatch(
      changeBoardFilters({
        query: debounceSearch.toLowerCase(),
        selected_date: selectDateValue,
        selected_terminal: selectTerminalValue,
        selected_time_range: [...selectTimeValue],
      })
    );
    dispatch(applyFilters());
    dispatch(filterBySearch());
  }, [
    debounceSearch,
    dispatch,
    selectDateValue,
    selectTerminalValue,
    selectTimeValue,
  ]);

  useEffect(() => {
    dispatchFilters();
  }, [dispatchFilters]);

  const handleSearchInputChange = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const querySearchValue = e.currentTarget.value;
    setSearchValue(querySearchValue);
    setIsSuggestionVisible(!!querySearchValue);
  };

  const handleSelectDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDateValue = e.currentTarget.value;
    setSelectDatevalue(selectedDateValue);
  };

  const handleSelectTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = e.currentTarget.value.split(",");
    setSelectTimeValue(selectedRange);
  };

  const handleSelectTerminalChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTerminal = e.currentTarget.value as Terminal;
    setSelectTerminalValue(selectedTerminal);
  };

  const handleCancelSearch = () => {
    setSearchValue("");
    dispatch(
      changeBoardFilters({
        ...boardFilters,
        query: "",
      })
    );
  };

  const handleApplySerch = () => {
    dispatch(applySearchFilters());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsSuggestionVisible(false);
      handleApplySerch();
    }
  };

  return (
    <FilterWrapper>
      <InputFilterWrapper>
        <AiOutlineSearch></AiOutlineSearch>
        <InputFilter
          type="text"
          onKeyDown={handleKeyDown}
          value={searchValue}
          onFocus={() => setIsSearchButtonVisible(true)}
          onBlur={() => setIsSearchButtonVisible(false)}
          onChange={handleSearchInputChange}
          placeholder="Поиск по номеру рейса, городу и авиакомпании"
        />
      </InputFilterWrapper>

      <SelectWrapper isVisible={!isSearchButtonVisible}>
        <Select
          value={selectDateValue}
          name="date"
          id="date"
          isDefaultValue={false}
          onChangeHandle={handleSelectDateChange}
        ></Select>

        <Select
          value={selectTimeValue}
          name="timeSpan"
          isDefaultValue={selectTimeValue[0] === "" ? true : false}
          id="time"
          onChangeHandle={handleSelectTimeChange}
        ></Select>

        <Select
          value={selectTerminalValue}
          isDefaultValue={selectTerminalValue === "ALL" ? true : false}
          name="terminal"
          id="terminal"
          onChangeHandle={handleSelectTerminalChange}
        ></Select>
      </SelectWrapper>

      <FilterButtonWrapper isVisible={isSearchButtonVisible}>
        <FilterButton onClick={handleCancelSearch}>Отменить</FilterButton>
        <FilterButton onClick={handleApplySerch}>Искать</FilterButton>
      </FilterButtonWrapper>

      {isSuggestionVisible && (
        <SearchSuggestion setIsOpen={setIsSuggestionVisible}></SearchSuggestion>
      )}
    </FilterWrapper>
  );
};

export default Filter;
