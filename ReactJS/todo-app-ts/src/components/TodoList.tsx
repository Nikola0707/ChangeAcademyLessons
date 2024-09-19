import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();
  return (
    <div>
      <ul className="mt-8 space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-4 rounded-lg shadow-lg transition-all ${
              todo.completed ? "bg-green-100 text-green-800" : "bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 rounded"
              />
              <span
                className={`ml-3 cursor-pointer text-lg ${
                  todo.completed
                    ? "line-through text-green-600"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <span className="ml-2">Priority: {todo.priority}</span>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
