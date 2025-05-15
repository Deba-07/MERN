import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const {addTodo} = useContext(TodoContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded-md text-white"
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
    </div>
  );
};

export default AddTodo;