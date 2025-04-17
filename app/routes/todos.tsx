import { TodoList } from "../components/Todo";

export function meta() {
  return [
    { title: "Todo List | Kalbas" },
    { name: "description", content: "Manage your tasks with Kalbas Todo List" },
  ];
}

export default function Todos() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
      <TodoList />
    </div>
  );
} 