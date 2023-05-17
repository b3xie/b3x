import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Guestbook from "./routes/Guestbook.tsx";
import MainPage from "./routes/Root.tsx";
import Error from "./routes/Error.tsx";
import AboutMe from "./routes/AboutMe.tsx";
import Hrt from "./routes/Hrt.tsx";
import Memories from "./routes/Memories.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
  },
  {
    path: "bex",
    element: <AboutMe />,
  },
  {
    path: "memories",
    element: <Memories />,
  },
  {
    path: "guestbook",
    element: <Guestbook />,
  },
  {
    path: "project",
    element: <Hrt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
