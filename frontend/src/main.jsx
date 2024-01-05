import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtworksListPage from "./pages/Administration/ArtworksListPage";
import App from "./App";
import AdminPage from "./pages/Administration/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/administration",
        element: <AdminPage />,
        children: [
          {
            path: "/administration/artworks",
            element: <ArtworksListPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`),
          },
        ],
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
