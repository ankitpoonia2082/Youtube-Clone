import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import searchCache from "./slices/searchCache";
import chatSlice from "./slices/chatSlice";

const store = configureStore(
    {
        reducer: {
            sidebar: sidebarSlice,
            searchCache: searchCache,
            liveChat: chatSlice,
        },
    }
);

export default store;