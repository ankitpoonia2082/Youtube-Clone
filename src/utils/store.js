import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import searchCache from "./slices/searchCache";

const store = configureStore(
    {
        reducer: {
            sidebar: sidebarSlice,
            searchCache: searchCache,
        },
    }
);

export default store;