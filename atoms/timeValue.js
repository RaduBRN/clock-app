import { atom } from "recoil";

export const timeValueAtom = atom({
  key: "timeValue",
  default: {
    time: "--:--",
    abbreviation: "---",
    hours: undefined,
    minutes: undefined,
  },
});
