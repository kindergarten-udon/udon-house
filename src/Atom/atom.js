import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: [],
});

export const uid = atom({
  key: "uid",
  default: "",
});

export const chooseContent = atom({
  key: "chooseContent",
  default: "",
});
