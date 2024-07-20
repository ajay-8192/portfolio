import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const App = () => <RouterProvider router={createBrowserRouter(routes)} />;
  
export default App;
