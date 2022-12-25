import { useRecoilValue, useSetRecoilState } from "recoil";
import { toggle } from "../../utils/array";
import { getDatesBetween } from "../../utils/date";
import { planDatesAtom, planRegionsAtom } from "./atoms";

export const usePlanRegionsState = () => {
  const regions = useRecoilValue(planRegionsAtom);
  const setRegions = useSetRecoilState(planRegionsAtom);

  const toggleRegion = (region: string) =>
    setRegions((prev) => toggle(prev, region));

  return {
    regions,
    toggleRegion,
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
