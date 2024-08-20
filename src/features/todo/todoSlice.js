import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "A new todo" }],
  // editTodo: {},
};

export const todoSlice = createSlice({
  name: "todo", // name is a given property of createSlice
  initialState, // initialState is a given property of createSlice which we have already created above
  reducers: {
    // its the syntax of using reducers that each property gets 2 arguments, state and action. State is the initialstate and action is the value that we pass to the function.eg - to remove a todo we pass the id of the todo object that we can get from the payload of the action object

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // creates a unique id
        text: action.payload, // payload is the object that we get from action, payload has a text object and therefore the contents of the text object is stored in the text property of the todo object
      };
      state.todos.push(todo); // pushes the todo object into the todos array which is defined in the initialState
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // here payload also has the id of the todo object that we want to remove and directly compares the id
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
    // editTodo: (state, action) => {
    //   state.editTodo = action.payload;
    // },
  },
});

export const { addTodo, removeTodo, updateTodo, loadTodos } = todoSlice.actions; // these functions are exported so that it can be used individually in the components

export default todoSlice.reducer; // it is exported so that it is passed to configureStore
