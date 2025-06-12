import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Footer from './components/ui/Footer';
import { useLocation } from 'react-router';
import { ThemeModeProvider } from './components/ui/ThemeModeProvider';

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideFooter = location.pathname === '/auth/login' || location.pathname === '/auth/signup';
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kalbas</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeModeProvider>
          {children}
          {!hideFooter && <Footer />}
        </ThemeModeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Error";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold">{message}</h1>
      <p className="mt-2">{details}</p>
      {stack && (
        <pre className="w-full mt-4 p-4 overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
