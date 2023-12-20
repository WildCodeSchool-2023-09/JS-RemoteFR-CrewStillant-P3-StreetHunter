import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ArtworksPage from "./pages/ArtworksPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/artwork",
        element: <ArtworksPage />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`),
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
