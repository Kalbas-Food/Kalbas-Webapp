import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link to="/" className="flex items-center py-2 px-3 text-gray-700 dark:text-white font-bold">
                Kalbas
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <Link to="/" className="py-2 px-3 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                Home
              </Link>
              <Link to="/about" className="py-2 px-3 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                About
              </Link>
              <Link to="/todos" className="py-2 px-3 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                Todos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 