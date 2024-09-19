import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
      <div className="max-w-lg bg-white shadow-xl rounded-lg p-6">
        <h1>My Todo List</h1>
        <AddTodo />
        <TodoList />
        {/* Todo Stats */}
      </div>
    </div>
  );
}

export default App;
