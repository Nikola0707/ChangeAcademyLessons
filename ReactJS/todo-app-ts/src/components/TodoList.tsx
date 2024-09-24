import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();
  // GET (Getter), SET (Setter) => useState()
  // const [XXXX, setXXXX] = useState(1);
  // XXXX= 1 => getValue
  // setXXX(34) => setValue to 34
  //XXXX = 34 => getValue

  //      GET State value, SET State value
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Number of todos to display per page
  const todosPerPage = 5;

  const totalPages = Math.ceil(todos.length / todosPerPage);

  // Calculate indices for slicing the todos array
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  // Slice the todos array to get todos for current page
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  return (
    <div>
      <ul className="mt-8 space-y-4">
        {currentTodos.map((todo) => (
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
      {/* Pagination controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => {
            console.log("previous btn click");
            setCurrentPage((prev) => Math.max(prev - 1, 1));
          }}
          disabled={currentPage === 1}
          className={` py-2 px-4 rounded-lg text-white ${
            currentPage !== 1 ? "bg-slate-500" : "bg-slate-300"
          }`}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`py-2 px-4 rounded-lg text-white ${
            currentPage !== totalPages ? "bg-slate-500" : "bg-slate-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default TodoList;
