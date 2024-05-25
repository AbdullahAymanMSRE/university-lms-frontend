import Course from "../pages/instructor/Course";
import Courses from "../pages/instructor/Courses";
import CreateCourse from "../pages/instructor/CreateCourse";
import Dashboard from "../pages/instructor/Dashboard";
import Students from "../pages/instructor/Students";

const instructorRoutes = [
    {
        path: "",
        element: <Dashboard />,
    },
    {
        path: "courses",
        element: <Courses />,
    },
    {
        path: "students",
        element: <Students />,
    },
    {
        path: "create-course",
        element: <CreateCourse />,
    },
    {
        path: "course/:id",
        element: <Course />,
    },
];

export default instructorRoutes;
