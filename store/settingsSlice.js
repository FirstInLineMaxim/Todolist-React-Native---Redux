import { createSlice } from "@reduxjs/toolkit";
/**
 * Starter Guide for redux toolkit : https://redux-toolkit.js.org/introduction/getting-started
 * Good place to find the Documentation for manipulating arrays :https://redux-toolkit.js.org/usage/immer-reducers
 */
const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    account: {
      username: "TestUsername",
      firstname: "Maksim",
      lastname: "Moltchanov",
      email: "test@test.com",
      phone: "+4917663428792",
    },
    notifications: [
      { name: "PUSH", checked: false },
      { name: "SMS", checked: false },
      { name: "EMAIL", checked: false },
    ],
  },

  reducers: {
    setNotification(state, action) {
      const setting = state.find((item) => item.name === action.payload);
      if (setting) {
        // ✅ CORRECT: This object is still wrapped in a Proxy, so we can "mutate" it
        setting.checked = !setting.checked;
      }
    },
  },
});

export const { setNotification } = settingsSlice.actions;
export default settingsSlice.reducer;
