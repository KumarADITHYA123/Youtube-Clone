import { createSlice } from "@reduxjs/toolkit";

const suggestSlice = createSlice({
  name: "suggest",
  initialState: {
    suggestions:[]
  },
  reducers: {
    setSuggestions:(state,action)=>{
      if(action.payload.length>0)
        state.suggestions.push(action.payload)
    }
  },
});
export const { setSuggestions } = suggestSlice.actions;
export default suggestSlice.reducer;
