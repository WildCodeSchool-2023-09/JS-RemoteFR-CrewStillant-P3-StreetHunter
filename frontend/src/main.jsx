import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapPage from "./pages/MapPage";
import ScoreBoardPage from "./pages/ScoreBoardPage";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/scoreboard",
        element: <ScoreBoardPage />,
        loader: () =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mapping_art_db`),
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
