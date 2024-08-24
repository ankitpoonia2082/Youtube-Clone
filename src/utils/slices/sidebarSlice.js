import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isSidebarVisible: false,
    },
    reducers: {
        toggle: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible;
        },
        close: (state) => {
            state.isSidebarVisible = false;
        },
    }
});

export const { toggle, close } = SidebarSlice.actions;
export default SidebarSlice.reducer;