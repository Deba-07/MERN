const CompletedTasks = ({ completedTodos, clearCompletedTasks }) => {
  return (
    <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-3">🎯 Completed Tasks</h2>

      {completedTodos.length > 0 ? (
        <>
          <ul className="space-y-2">
            {completedTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-md shadow-md transition duration-300 hover:scale-105"
              >
                <div>
                  <p className="text-lg line-through">{todo.text}</p>
                  <span className="text-xs text-gray-400">
                    Completed: {todo.completedAt}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Clear History Button */}
          <button
            onClick={clearCompletedTasks}
            className="mt-4 w-full bg-red-600 px-4 py-2 text-white rounded-md hover:bg-red-800 transition duration-300"
          >
            ❌ Clear Completed Tasks
          </button>
        </>
      ) : (
        <p className="text-gray-400">No completed tasks yet.</p>
      )}
    </div>
  );
};

export default CompletedTasks;
