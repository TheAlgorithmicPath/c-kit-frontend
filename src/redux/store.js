import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

store.subscribe(() => console.log("State updated:", store.getState()));

export default store;
