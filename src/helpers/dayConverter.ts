import dayjs from "../utils/dayjs.config";

export const dayConverter = (date: Date, days_to_calculate: number): string => {
  if (days_to_calculate < 0) {
    return dayjs(date)
      .locale("ru")
      .subtract(Math.abs(days_to_calculate), "day")
      .format("LL");
  } else {
    return dayjs(date).locale("ru").add(days_to_calculate, "day").format("LL");
  }
};
