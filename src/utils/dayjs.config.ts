import dayjs from "dayjs";
import "dayjs/locale/ru";
import localized from "dayjs/plugin/localizedFormat";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(localized);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);

export default dayjs;
