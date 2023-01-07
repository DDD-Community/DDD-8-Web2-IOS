import { useRecoilValue, useSetRecoilState } from "recoil";
import { getDatesBetween } from "../../utils/date";
import { planDatesAtom, planRegionAtom } from "./atoms";

export const usePlanRegionState = () => {
  const region = useRecoilValue(planRegionAtom);
  const setRegion = useSetRecoilState(planRegionAtom);
  return {
    region,
    setRegion,
  } as const;
};

export const usePlanDatesState = () => {
  const dates = useRecoilValue(planDatesAtom);
  const setDates = useSetRecoilState(planDatesAtom);

  const setDateRange = (range: [Date, Date]) => {
    const [start, end] =
      range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]];

    const datesBetween = getDatesBetween(start, end);
    setDates(datesBetween);
  };

  return {
    dates,
    setDateRange,
  } as const;
};
