import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import { useTodoStore } from "./store/useTodoStore";

function App() {
  // Use the 'useTodoStore' hook to get the list of todos from the store.
  const todos = useTodoStore((state) => state.todos);

  // Calculate the number of completed todos by filtering the todos array
  const completedTodos = todos.filter((todo) => todo.completed).length;

  // Calculate the number of uncompleted todos.
  const uncompletedTodos = todos.length - completedTodos;

  console.log("completedTodos", completedTodos);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
      <div className="max-w-lg bg-white shadow-xl rounded-lg p-6">
        <h1>My Todo List</h1>
        <AddTodo />
        <TodoList />
        <TodoStats
          completedCount={completedTodos}
          unCompletedCount={uncompletedTodos}
        />
      </div>
    </div>
  );
}

export default App;
