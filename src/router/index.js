import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentHome from "../pages/student/Home";
import InstructorHome from "../pages/instructor/Home";
import instructorRoutes from "./instructor";
import studentRoutes from "./student";
import Login from "../pages/login";
import Signup from "../pages/signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "student",
		element: <StudentHome />,
		children: studentRoutes,
	},
	{
		path: "instructor",
		element: <InstructorHome />,
		children: instructorRoutes,
	},
	{
		path: "login",
		element: <Login />,
		children: instructorRoutes,
	},
	{
		path: "signup",
		element: <Signup />,
		children: instructorRoutes,
	},
]);

export default function MyRouter() {
	return <RouterProvider router={router} />;
}
