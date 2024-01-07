import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/UserPages/RegisterPage";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/map",
        element: <MapPage />,
        loader: () => fetch(`http://localhost:3310/api/artwork/`),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
