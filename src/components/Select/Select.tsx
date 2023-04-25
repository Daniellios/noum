import { SelectInput, SelectOption } from "./SelectStyles";
import React from "react";
import {
  selectDates,
  selectTimes,
  terminals,
} from "../../constants/data-placeholder";

interface ISelectProps<V> {
  name: string;
  id: string;
  isDefaultValue: boolean;
  value: V;
  onChangeHandle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// How to improve

// ЗНАЧИТЕЛЬНОЕ

// 1. Создать Union или Enum для вида Select'a
// enum SelectType {
// name === "timeSpan";
//  name === "date";
//  name === "terminal";
// }

// 2. Убрать из пропсов функию изменения и текущее значение и брать их из глобального состояния

// ПОБОЧНОЕ

// 1. Убрать все оставшееся из пропсов и опираясь на тип Select'a устанавливать значения из глобального состояния

const Select = <V extends string | string[]>({
  value,
  name,
  isDefaultValue,
  id,
  onChangeHandle,
}: ISelectProps<V>) => {
  const isTime = name === "timeSpan";
  const isDates = name === "date";
  const isTerminal = name === "terminal";

  return (
    <SelectInput
      name={name}
      id={id}
      isDefaultValue={isDefaultValue}
      value={value}
      onChange={onChangeHandle}
    >
      {isTime &&
        selectTimes.map((optionValue, idx) => (
          <SelectOption key={idx} value={optionValue.range}>
            {optionValue.displayValue}
          </SelectOption>
        ))}

      {isDates &&
        selectDates.map((date, idx) => (
          <SelectOption key={idx} value={date}>
            {date}
          </SelectOption>
        ))}

      {isTerminal &&
        terminals.map((terminal, idx) => (
          <SelectOption key={terminal} value={terminal}>
            {idx === 0 ? "Все терминалы" : `Терминал ${terminal}`}
          </SelectOption>
        ))}
    </SelectInput>
  );
};

export default Select;
