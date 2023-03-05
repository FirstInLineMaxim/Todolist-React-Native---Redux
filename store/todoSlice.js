import { createSlice } from "@reduxjs/toolkit";
/**
 * Starter Guide for redux toolkit : https://redux-toolkit.js.org/introduction/getting-started
 * Good place to find the Documentation for manipulating arrays :https://redux-toolkit.js.org/usage/immer-reducers
 */
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    //Create like useState function where action is the value we send and state is our state
    setTasks(state, action) {
      state.push(action.payload);
    },
    setChecked(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        // ✅ CORRECT: This object is still wrapped in a Proxy, so we can "mutate" it
        todo.checked = !todo.checked;
      }
    },
    delTask(state, action) {
      const id = action.payload;

      return state.filter((ele) => ele.id !== id);
    },
    editTask(state, action) {
      const { newValue, id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.task = newValue;
    },
  },
});

export const { setTasks, setChecked, delTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
