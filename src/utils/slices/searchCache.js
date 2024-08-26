import { createSlice } from "@reduxjs/toolkit";

const searchCache = createSlice({
    name: "searchCacheData",
    initialState: {},
    reducers: {
        // Adding search suggistion data to state...
        addCacheData: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const { addCacheData } = searchCache.actions;
export default searchCache.reducer;