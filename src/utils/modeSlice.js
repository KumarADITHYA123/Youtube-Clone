import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    darkmode:true,
  },
  reducers: {
    toggleMode: (state) => {
          state.darkmode = !state.darkmode;
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
