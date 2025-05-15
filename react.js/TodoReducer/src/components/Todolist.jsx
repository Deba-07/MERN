import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todolist = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      <h2 className="text-xl font-semibold">Pending Tasks</h2>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2">
            {todo.text}
            <div>
              <button
                className="bg-green-500 px-2 py-1 text-white rounded-md hover:bg-green-700"
                onClick={() => dispatch({ type: "COMPLETE_TODO", payload: todo.id })}
              >
                ✅ Complete
              </button>
              <button
                className="bg-red-500 px-2 py-1 text-white rounded-md hover:bg-red-700 ml-2"
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
              >
                ❌ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
