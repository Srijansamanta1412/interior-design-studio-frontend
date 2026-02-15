import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { MainLayout } from "@/app/layouts/MainLayout";
import { SuspenseWrapper } from "./routeUtils";

// Lazy Load Pages
const LandingPage = lazy(() => import("@/app/pages/public/Landing"));
const PortfolioPage = lazy(() => import("@/app/pages/public/Portfolio"));
const HowItWorksPage = lazy(() => import("@/app/pages/public/HowItWorksPage"));



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
      {
        path: "how-it-works",
        element: SuspenseWrapper(HowItWorksPage),
      },
    ],
  },
];