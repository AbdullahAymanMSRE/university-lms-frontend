import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/student/Home";
import instructorRoutes from "./instructor";
import studentRoutes from "./student";

const router = createBrowserRouter([
  {
    path: "student",
    element: <Home />,
    children: studentRoutes,
  },
  {
    path: "instructor",
    element: <Home />,
    children: instructorRoutes,
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
