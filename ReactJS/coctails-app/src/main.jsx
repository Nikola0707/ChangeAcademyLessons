import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Auth from "./components/Auth.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import CocktailDetail from "./components/CocktailDetail.jsx";
import Favorites from "./components/pages/Favorites.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  // Route confg for root path ("/")
  {
    path: "/",
    element: <PublicRoute element={<Auth />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/cocktail/:id",
    element: <ProtectedRoute element={<CocktailDetail />} />,
  },
  {
    path: "/favorites",
    element: <ProtectedRoute element={<Favorites />} />,
  },
  {
    path: "*",
    element: <ProtectedRoute element={<NotFound />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
