import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import MapPage from "./pages/MapPage";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/Administration/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArtworksListPage from "./pages/Administration/ArtworksListPage";
import RequestValidationPage from "./pages/Administration/RequestValidationPage";
import UserListPage from "./pages/Administration/UserListPage";
import LoginPage from "./pages/User/LoginPage";
import ProfilePage from "./pages/User/ProfilePage";
import GalleryPage from "./pages/Game/GalleryPage";
import RanksPage from "./pages/Game/RanksPage";
import SendPicturePage from "./pages/Game/SendPicturePage";

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
        path: "/subscribe",
        element: <SubscribePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/administration",
        element: <Outlet />,
        children: [
          {
            path: "/administration/main",
            element: <AdminPage />,
          },
          {
            path: "/administration/artworks",
            element: <ArtworksListPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`),
          },
          {
            path: "/administration/users",
            element: <UserListPage />,
          },
          {
            path: "/administration/validation",
            element: <RequestValidationPage />,
          },
        ],
      },
      {
        path: "/users",
        element: <Outlet />,
        children: [
          {
            path: "/users/login",
            element: <LoginPage />,
          },
          {
            path: "/users/profile",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "/game",
        element: <Outlet />,
        children: [
          {
            path: "/game/gallery",
            element: <GalleryPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`),
          },
          {
            path: "/game/ranks",
            element: <RanksPage />,
          },
          {
            path: "/game/submit",
            element: <SendPicturePage />,
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
