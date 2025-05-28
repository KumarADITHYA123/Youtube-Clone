import { createSlice } from "@reduxjs/toolkit";

const searchKeySlice = createSlice({
  name: "key",
  initialState: {
    searchKey:"",
  },
  reducers: {
    setSearchKey : (state, action) => {
          state.searchKey = action.payload;
    },
  },
});

export const { setSearchKey } = searchKeySlice.actions;
export default searchKeySlice.reducer;
