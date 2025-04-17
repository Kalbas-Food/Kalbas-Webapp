import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Kalbas" },
    { name: "description", content: "Learn more about Kalbas" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Kalbas</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Kalbas is a modern web application built with React Router.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        This is where you can add more information about your project.
      </p>
    </div>
  );
} 