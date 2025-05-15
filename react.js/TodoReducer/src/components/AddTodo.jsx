import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="flex-1 p-2 rounded-md text-black placeholder-gray-400"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition duration-300"
        type="submit"
      >
        ➕ Add
      </button>
    </form>
  );
};

export default AddTodo;
