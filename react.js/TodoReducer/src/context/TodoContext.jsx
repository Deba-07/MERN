import { createContext, useReducer, useEffect } from "react";
import { TodoReducer } from "../reducer/TodoReducer.js";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    completedTodos: JSON.parse(localStorage.getItem("completedTodos")) || [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
    localStorage.setItem("completedTodos", JSON.stringify(state.completedTodos));
  }, [state.todos, state.completedTodos]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
