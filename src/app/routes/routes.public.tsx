import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { MainLayout } from "@/app/layouts/MainLayout";
import { SuspenseWrapper } from "./routeUtils";

// Lazy Load Pages
const LandingPage = lazy(() => import("@/app/pages/public/Landing"));
const PortfolioPage = lazy(() => import("@/app/pages/public/Portfolio"));



export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: SuspenseWrapper(LandingPage),
      },
      {
        path: "portfolio",
        element: SuspenseWrapper(PortfolioPage),
      },
    ],
  },
];