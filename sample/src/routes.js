import React from "react";
import ErrorPage from "./pages/404.jsx";
import HomePage from "./pages/Home.jsx";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECT_ROUTE } from "./constants/routeConstants.js";
import { getRoutes } from "./utils/routeUtils.js";
import AboutPage from "./pages/About.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";

export const routes = [
  {
    path: getRoutes(HOME_ROUTE),
    exact: true,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: getRoutes(ABOUT_ROUTE),
    exact: true,
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: getRoutes(PROJECT_ROUTE),
    exact: true,
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: getRoutes(CONTACT_ROUTE),
    exact: true,
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
];