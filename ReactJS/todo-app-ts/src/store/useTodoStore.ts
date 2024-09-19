import { create } from "zustand";
import { Priority } from "../Types";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string, priority: Priority) => void;
  updateTodo: (id: number, text: string, priority: Priority) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string, priority: Priority) =>
    set((state) => {
      console.log("state", state.todos);
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text,
            completed: false,
            priority,
          },
        ],
      };
    }),
  updateTodo: (id: number, text: string, priority: Priority) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text,
              priority,
            }
          : todo
      ),
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
