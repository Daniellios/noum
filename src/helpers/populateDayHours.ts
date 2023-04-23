import { convertHourFormat } from "./convertToHourFormat";

export interface ITimeSelectorValues {
  range: string[];
  displayValue: string;
}

export const popluateDayHours = (): ITimeSelectorValues[] => {
  const times: ITimeSelectorValues[] = [];
  const anyTime: ITimeSelectorValues[] = [
    {
      range: [],
      displayValue: "Любое время",
    },
  ];

  for (let i = 0; i <= 23; i += 2) {
    const time = convertHourFormat(i);
    const nextTime = convertHourFormat(i + 2);
    const everyHour = convertHourFormat(i + 1);

    times.push({
      range: [time, everyHour, nextTime],
      displayValue: `${time} - ${nextTime}`,
    });
  }

  return [...anyTime, ...times];
};
