import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fatchStatusSlice from "./fatchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fatchStatus: fatchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
