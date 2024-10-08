import { FormEvent, useState } from "react";
import { Priority } from "../Types";
import { useTodoStore } from "../store/useTodoStore";

const AddTodo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("medium");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText, priority);
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-6">
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
      <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
