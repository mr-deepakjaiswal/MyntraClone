import { createSlice } from "@reduxjs/toolkit";

const fatchStatusSlice = createSlice({
  name: "fatchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      {
        state.fetchDone = true;
      }
    },
    markFetchingStarted: (state) => {
      {
        state.currentlyFetching = true;
      }
    },
    markFetchingFinished: (state) => {
      {
        state.currentlyFetching = false;
      }
    },
  },
});

export const fatchStatusAction = fatchStatusSlice.actions;

export default fatchStatusSlice;
