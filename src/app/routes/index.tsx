import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes.public";
import { authRoutes } from "./routes.auth";

export const appRouter = createBrowserRouter([
  ...publicRoutes,
  ...authRoutes,
  {
    path: "*",
    element: <div className="p-20 text-center font-serif text-3xl">404 - Page Not Found</div>,
  },
]);