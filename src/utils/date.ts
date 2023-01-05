import { format, addDays, subDays } from "date-fns";

const createDateFormatter =
  (pattern: string) =>
  (date: Date): string =>
    format(date, pattern);

export const getDatesBetween = (start: Date, end: Date): Date[] => {
  const dates: Date[] = [];

  let endBetweenDate = subDays(end, 1);
  let currentDate = addDays(start, 1);

  while (currentDate <= endBetweenDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dates;
};

export const DateFormatter = {
  ["yyyy-MM-dd"]: createDateFormatter("yyyy-MM-dd"),
  ["yyyy.MM.dd"]: createDateFormatter("yyyy.MM.dd"),
  ["dd"]: createDateFormatter("dd"),
};
