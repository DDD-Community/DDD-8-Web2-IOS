import { atom } from "recoil";

export const planRegionsAtom = atom<string[]>({
  key: "plan/regions",
  default: [],
});

export const planDatesAtom = atom<Date[]>({
  key: "plan/dates",
  default: [],
});
