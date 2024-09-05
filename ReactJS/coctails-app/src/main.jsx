import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Auth from "./components/Auth.jsx";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  // Route confg for root path ("/")
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
