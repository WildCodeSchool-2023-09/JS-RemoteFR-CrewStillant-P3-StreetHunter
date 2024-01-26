import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import ValidationPage from "./pages/Administration/ValidationRoomPage";
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
import ScoreBoard from "./pages/RankingPage";
import MessagingPage from "./pages/Administration/MessagingPage";
import LoginPage from "./pages/UserPages/LoginPage";
import ArtworkPage from "./pages/Game/ArtworkPage";

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
            path: "validationroom",
            element: <ValidationPage />,
            loader: () =>
              fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/artwork/notvalidated`
              ),
          },
          {
            path: "artworks",
            element: <ArtworksListPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/user`),
          },
          {
            path: "users",
            element: <UsersListPage />,
            loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`),
          },
          {
            path: "/administration/messages",
            element: <MessagingPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messaging`),
          },
        ],
      },
      {
        path: "/user",
        children: [
          {
            path: "signup",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "profile/",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "/game",
        children: [
          {
            path: "map",
            element: <MapPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/user`),
          },
          {
            path: "gallery",
            element: <GalleryPage />,
            loader: () =>
              fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/user`),
          },
          {
            path: "artwork/:id",
            element: <ArtworkPage />,
          },
          {
            path: "submitartwork",
            element: <SendPicturePage />,
          },
          {
            path: "scoreboard",
            element: <ScoreBoard />,
          },
          {
            path: "instructions",
            element: <InstructionsPage />,
          },
        ],
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
        path: "/contact",
        element: <ContactPage />,
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
