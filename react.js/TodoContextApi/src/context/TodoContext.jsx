import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [completedTodos, setCompletedTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("completedTodos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const completedTask = todos.find((todo) => todo.id === id);
    if (!completedTask) return;

    completedTask.completed = true;
    completedTask.completedAt = new Date().toLocaleString();

    let updatedCompletedTodos = [...completedTodos, completedTask];

    if (updatedCompletedTodos.length > 5) {
      updatedCompletedTodos.shift();
    }

    setTodos(updatedTodos);
    setCompletedTodos(updatedCompletedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompletedTasks = () => {
    setCompletedTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, completedTodos, addTodo, completeTodo, deleteTodo, clearCompletedTasks, setTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};
