import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: [],
});

export const uid = atom({
  key: "uid",
  default: "",
});
