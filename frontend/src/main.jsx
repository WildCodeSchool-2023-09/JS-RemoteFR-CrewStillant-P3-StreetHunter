import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import InstructionsPage from "./pages/InstructionsPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/UserPages/RegisterPage";
import ProfilePage from "./pages/UserPages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import App from "./App";
import AdminPage from "./pages/Administration/AdminPage";
import ArtworksListPage from "./pages/Administration/ArtworksListPage";
import GalleryPage from "./pages/Game/GalleryPage";
import UsersListPage from "./pages/Administration/UsersListPage";
import SendPicturePage from "./pages/SendPicture";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
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
          {
            path: "/administration/users",
            element: <UsersListPage />,
            loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`),
          },
        ],
      },
      {
        path: "/map",
        element: <MapPage />,
        loader: () =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/user`),
      },
      {
        path: "/instructions",
        element: <InstructionsPage />,
      },
      {
        path: "/mentions",
        element: <TermsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      { path: "/submitartwork", element: <SendPicturePage /> },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/game",
        children: [
          {
            path: "artworks",
            element: <GalleryPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/user`),
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
