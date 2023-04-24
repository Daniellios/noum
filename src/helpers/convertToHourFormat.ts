import dayjs from "../utils/dayjs.config";

export const convertHourFormat = (hour: number): string => {
  return dayjs().hour(hour).minute(0).format("HH:mm");
};
