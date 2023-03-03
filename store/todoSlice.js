import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    setTasks(state, action) {
      state.push(action.payload);
    },
    setChecked(state, action) {
      //TODO:Make checked of individual id
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        // ✅ CORRECT: This object is still wrapped in a Proxy, so we can "mutate" it
        todo.checked = !todo.checked;
      }
    },
  },
});

export const { setTasks, setChecked } = todoSlice.actions;
export default todoSlice.reducer;
