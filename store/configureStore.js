import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
