import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import settingsReducer from "./settingsSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    settings: settingsReducer,
  },
});
