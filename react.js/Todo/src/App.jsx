import { useState, useEffect } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";
import CompletedTasks from "./components/CompletedTasks";

function App() {
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
    completedTask.completed = true;
    completedTask.completedAt = new Date().toLocaleString();

    let updatedCompletedTodos = [...completedTodos, completedTask];

    // **Auto-delete oldest completed task if list exceeds 5**
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">✅ Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <Todolist todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      <CompletedTasks completedTodos={completedTodos} clearCompletedTasks={clearCompletedTasks} />
    </div>
  );
}

export default App;
