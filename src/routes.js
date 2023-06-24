import React from "react";
import ErrorPage from "./pages/404.jsx";
import HomePage from "./pages/Home.jsx";

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/a',
    element: <ErrorPage />
  }
];