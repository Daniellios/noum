import dayjs from "dayjs";

export const convertHourFormat = (hour: number): string => {
  return dayjs().hour(hour).minute(0).format("HH:mm");
};
