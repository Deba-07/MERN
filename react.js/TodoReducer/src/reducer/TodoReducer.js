export const TodoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: action.payload,
              createdAt: new Date().toLocaleString(),
              completed: false,
            },
          ],
        };
  
      case "COMPLETE_TODO":
        const completedTask = state.todos.find((todo) => todo.id === action.payload);
        completedTask.completed = true;
        completedTask.completedAt = new Date().toLocaleString();
  
        let updatedCompleted = [...state.completedTodos, completedTask];
        if (updatedCompleted.length > 5) updatedCompleted.shift(); // Auto-delete oldest completed
  
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
          completedTodos: updatedCompleted,
        };
  
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  
      case "CLEAR_COMPLETED":
        return {
          ...state,
          completedTodos: [],
        };
  
      default:
        return state;
    }
  };
  