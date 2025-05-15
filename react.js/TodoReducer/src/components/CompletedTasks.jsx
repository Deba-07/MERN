import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const CompletedTasks = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      <h2 className="text-xl font-semibold">Completed Tasks</h2>
      <ul>
        {state.completedTodos.map((todo) => (
          <li key={todo.id} className="p-2">
            {todo.text} (Completed: {todo.completedAt})
          </li>
        ))}
      </ul>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-700 mt-2"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        🗑️ Clear Completed Tasks
      </button>
    </div>
  );
};

export default CompletedTasks;
