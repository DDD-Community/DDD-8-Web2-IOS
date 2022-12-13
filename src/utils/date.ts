import { format, addDays } from "date-fns";

export const dateFormatter =
  (pattern: string) =>
  (date: Date): string =>
    format(date, pattern);

export const getDatesBetween = (start: Date, end: Date): Date[] => {
  const dates: Date[] = [];

  let currentDate = start;

  while (currentDate <= end) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dates;
};
