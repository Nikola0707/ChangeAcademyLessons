import { useState } from "react";
import { Priority } from "../Types";
import { useTodoStore } from "../store/useTodoStore";

const AddTodo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("medium");

  const addTodo = useTodoStore((state) => state.addTodo);
  const handleAddClick = () => {
    if (todoText.trim()) {
      addTodo(todoText, priority);
      setTodoText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        className="border p-2 rounded"
        placeholder="Add a new todo!"
      />
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value as Priority)}
        className="ml-2 border p-2 rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        onClick={handleAddClick}
        className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
