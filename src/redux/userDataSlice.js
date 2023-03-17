import { createSlice } from "@reduxjs/toolkit";

// name, initialState, reducers는 반드시 포함시켜야함

const userDataSlice = createSlice({
  name: "contents",
  initialState: [],
  reducers: {
    updataContents: (state, action) => {
      console.log(state);
      return action.payload;
    },
  },
});

export default userDataSlice.reducer;
export const { updataContents } = userDataSlice.actions;
