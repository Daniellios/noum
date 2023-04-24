import { selectTimes } from "../../constants/data-placeholder";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  filterBySearch,
  changeBoardFilters,
  currentBoardFilters,
} from "../../redux/slices/flightsSlice";
import { SelectNextTimeSpanButton } from "./SelectStyles";
import { ITimeSelectorValues } from "../../helpers/populateDayHours";

const SelectNextTimeSpan = () => {
  const dispatch = useDispatch();
  const boardFilters = useSelector(currentBoardFilters);

  const [nextTimeSpan, setNextTimeSpan] = useState<ITimeSelectorValues>({
    displayValue: "",
    range: [" "],
  });

  useEffect(() => {
    const calculateNextTimeSpan = () => {
      for (let i = 0; i < selectTimes.length - 1; i++) {
        const isEqualCurrentRange =
          selectTimes[i].range.join(",") === boardFilters.selected_time_range;

        if (isEqualCurrentRange && i < selectTimes.length) {
          console.log(selectTimes[i + 1]);

          setNextTimeSpan(selectTimes[i + 1]);
        }
      }
    };
    calculateNextTimeSpan();
  }, [boardFilters.selected_time_range]);

  const showNextTimeSpan = () => {
    dispatch(
      changeBoardFilters({
        ...boardFilters,
        selected_time_range: nextTimeSpan.range.join(","),
      })
    );
    dispatch(applyFilters());
    dispatch(filterBySearch());
  };

  return (
    <SelectNextTimeSpanButton onClick={() => showNextTimeSpan()}>
      Показать рейсы на {nextTimeSpan?.displayValue}
    </SelectNextTimeSpanButton>
  );
};

export default SelectNextTimeSpan;
