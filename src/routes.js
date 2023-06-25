import React from "react";
import ErrorPage from "./pages/404.jsx";
import HomePage from "./pages/Home.jsx";
import { HOME_ROUTE } from "./constants/routeConstants.js";
import { getRoutes } from "./utils/routeUtils.js";

export const routes = [
  {
    path: getRoutes(HOME_ROUTE),
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '',
    element: <ErrorPage />
  }
];