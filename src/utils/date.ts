import { format, addDays, subDays } from "date-fns";

export const dateFormatter =
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
