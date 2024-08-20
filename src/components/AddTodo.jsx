import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { editTodo } from "../features/editTodo/editTodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const newTodo = useSelector((state) => state.editTodo.editTodo);
  const dispatch = useDispatch();

  // const isNewTodoEmpty = JSON.stringify(newTodo) === "{}";

  const [newTodoState, setNewTodoState] = useState({});

  // if (!isNewTodoEmpty) {
  //   // if newTodo exists

  //   dispatch(editTodo({}));
  //   setNewTodoState(newTodo);

  //   setInput(newTodo.text);
  // }

  useEffect(() => {
    if (Object.keys(newTodo).length !== 0) {
      setNewTodoState(newTodo);
      setInput(newTodo.text);

      dispatch(editTodo({})); // Reset the editTodo state after setting the input
    }
  }, [newTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (JSON.stringify(newTodoState) === "{}") {
      dispatch(addTodo(input));
    } else {
      dispatch(updateTodo({ id: newTodoState.id, text: input }));
      setNewTodoState({});
    }
    // dispatch uses reducers to makes changes to the state

    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {JSON.stringify(newTodoState) === "{}" ? "Add Todo" : "Update Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
