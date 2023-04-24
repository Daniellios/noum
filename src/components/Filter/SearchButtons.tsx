import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applySearchFilters,
  changeBoardFilters,
  currentBoardFilters,
} from "../../redux/slices/flightsSlice";
import { FilterButton, FilterButtonWrapper } from "./FilterStyles";

interface SearchButtons {
  isVisible: boolean;
}

const SearchButtons: React.FC<SearchButtons> = ({ isVisible }) => {
  const dispatch = useDispatch();
  const boardFilters = useSelector(currentBoardFilters);

  const handleApplySerch = () => {
    dispatch(applySearchFilters());
  };

  const handleCancelSearch = () => {
    dispatch(
      changeBoardFilters({
        ...boardFilters,
        query: "",
      })
    );
  };

  return (
    <FilterButtonWrapper isVisible={isVisible}>
      <FilterButton onClick={handleCancelSearch}>Отменить</FilterButton>
      <FilterButton onClick={handleApplySerch}>Искать</FilterButton>
    </FilterButtonWrapper>
  );
};

export default SearchButtons;
