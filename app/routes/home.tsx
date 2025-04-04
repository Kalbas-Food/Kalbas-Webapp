import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kalbas App" },
    { name: "description", content: "Welcome to Kalbas!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
