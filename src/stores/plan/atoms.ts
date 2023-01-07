import { atom } from "recoil";

export const planRegionAtom = atom<string | null>({
  key: "plan/regions",
  default: null,
});

export const planDatesAtom = atom<Date[]>({
  key: "plan/dates",
  default: [],
});
