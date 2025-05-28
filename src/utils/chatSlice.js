import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_OFFSET_VALUE } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages:[]
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVECHAT_OFFSET_VALUE,1);
            state.messages.unshift(action.payload)
        }
    }
})

export const { addMessage }=chatSlice.actions
export default chatSlice.reducer