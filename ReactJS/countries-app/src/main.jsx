import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CountryDetails from "./components/CountryDetails/CountryDetails.jsx";
import CountryList from "./components/CountryList/CountryList.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CountryList />, // root path for country list
      },
      {
        path: "country/:countryName",
        element: <CountryDetails />, // Dynamic path for country details
      },
      {
        path: "*",
        element: <h1>Page not found!!!</h1>, // Catch-all route for 404 Not Found
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
