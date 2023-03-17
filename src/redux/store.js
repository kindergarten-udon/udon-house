import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userDataSlice";

const store = configureStore({
  reducer: { name: userDataSlice.reducer },
});

export default store;
