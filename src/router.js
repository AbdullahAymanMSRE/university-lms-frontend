import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "/courses",
        element: <div>Courses page</div>,
      },
    ],
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
