import "./App.css"
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import Todolist from "./components/Todolist";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  return (
    <TodoProvider>
      <div className="to-do-App">
        <h1 className="text-center text-2xl font-bold">Todo App</h1>
        <AddTodo />
        <Todolist />
        <CompletedTasks />
      </div>
    </TodoProvider>
  );
}

export default App;
