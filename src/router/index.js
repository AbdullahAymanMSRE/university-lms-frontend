import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/student/Home";
import instructorRoutes from "./instructor";
import studentRoutes from "./student";
import Login from "../pages/login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
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
