// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todo/todoSlice";

// export const store = configureStore({
//   reducer: todoReducer,
// });

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import editTodoReducer from "../features/editTodo/editTodoSlice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    editTodo: editTodoReducer,
  },
});

export default store;
