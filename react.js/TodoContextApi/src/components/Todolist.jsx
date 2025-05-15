import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todolist = () => {
    const {todos, completeTodo, deleteTodo} = useContext(TodoContext)
    return (
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-3">📝 Pending Tasks</h2>
        {todos.length > 0 ? (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-md shadow-md transition duration-300 hover:scale-105"
              >
                <div>
                  <p className="text-lg">{todo.text}</p>
                  <span className="text-xs text-gray-400">
                    Created: {todo.createdAt}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className="bg-green-500 px-3 py-1 text-white rounded-md hover:bg-green-700 transition duration-300"
                  >
                    ✅ Complete
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 px-3 py-1 text-white rounded-md hover:bg-red-700 transition duration-300"
                  >
                    ❌ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No pending tasks 🎉</p>
        )}
      </div>
    );
  };
  
  export default Todolist;  