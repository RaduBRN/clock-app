import { atom } from "recoil";

export const locationDataAtom = atom({
  key: "locationData",
  default: {
    city: undefined,
    countryCode: undefined,
  },
});
