import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapPage from "./pages/MapPage";
import ValidationRoomPage from "./pages/ValidationRoomPage";
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
        path: "/ValidationRoomPage",
        element: <ValidationRoomPage />,
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
