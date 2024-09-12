import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../contents";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        comments: [],
    },
    reducers: {
        addComment: (state, action) => {
            if (state.comments.length > 120) state.comments.splice(OFFSET_LIVE_CHAT, 1);
            state.comments.unshift(action.payload);
        },
    },
});

export const { addComment } = chatSlice.actions;
export default chatSlice.reducer;