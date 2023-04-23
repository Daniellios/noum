import { today } from "../../constants/data-placeholder";
import React, { useEffect, useState } from "react";
import {
  FilterWrapper,
  InputFilter,
  InputFilterWrapper,
  SelectWrapper,
} from "./FilterStyles";

import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  filterBySearch,
  changeBoardFilters,
  applyFilters,
} from "../../redux/slices/flightsSlice";
import { Terminal } from "types/data";
import dayjs from "../../utils/dayjs.config";
import useDebounce from "../../hooks/useDebounce";
import Select from "../../components/Select/Select";
import SearchSuggestion from "../../components/SearchSuggestion/SearchSuggestion";

const Filter = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectDateValue, setSelectDatevalue] = useState<string>(today);
  const [selectTimeValue, setSelectTimeValue] = useState<string | string[]>([
    "",
  ]);
  const [selectTerminalValue, setSelectTerminalValue] =
    useState<Terminal>("ALL");

  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);

  const debounceSearch = useDebounce<string>(searchValue, 500);

  useEffect(() => {
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
    selectTerminalValue,
    selectTimeValue,
    debounceSearch,
    selectDateValue,
    dispatch,
  ]);

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

  return (
    <FilterWrapper>
      <InputFilterWrapper>
        <AiOutlineSearch></AiOutlineSearch>
        <InputFilter
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder="Поиск по номеру рейса, городу и авиакомпании"
        />
      </InputFilterWrapper>

      <SelectWrapper>
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

      {isSuggestionVisible && (
        <SearchSuggestion setIsOpen={setIsSuggestionVisible}></SearchSuggestion>
      )}
    </FilterWrapper>
  );
};

export default Filter;
