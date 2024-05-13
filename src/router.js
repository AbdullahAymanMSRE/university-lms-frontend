import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import Courses from "../src/pages/Courses";

const router = createBrowserRouter([
  {
    path: "student",
    element: <Home />,
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "files",
        element: <div>Files page</div>,
      },
      {
        path: "account",
        element: <div>Account page</div>,
      },
      {
        path: "settings",
        element: <div>Settings page</div>,
      },
      {
        path: "announcements",
        element: <div>Announcements page</div>,
      },
    ],
  },
  {
    path: "/instructor",
    element: <Home />,
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
