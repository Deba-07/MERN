import { useState, useEffect } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";
import CompletedTasks from "./components/CompletedTasks";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">✅ Todo App</h1>
      <AddTodo />
      <Todolist />
      <CompletedTasks />
    </div>
    </TodoProvider>
  );
}

export default App;
