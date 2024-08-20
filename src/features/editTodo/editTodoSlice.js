import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editTodo: {},
};

export const editTodoSlice = createSlice({
  name: "editTodoSlice",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      state.editTodo = action.payload;
    },
  },
});

export const { editTodo } = editTodoSlice.actions;
export default editTodoSlice.reducer;
