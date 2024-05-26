import Courses from "../pages/student/Courses";
import Dashboard from "../pages/student/Dashboard";
import Account from "../pages/student/Account";
import Assignments from "../pages/student/Assignments";
import Announcements from "../pages/student/Announcements";
import Course from "../pages/student/Course";

const studentRoutes = [
    {
        path: "",
        element: <Dashboard />,
    },
    {
        path: "courses",
        element: <Courses />,
    },
    {
        path: "account",
        element: <Account />,
    },
    {
        path: "assignments",
        element: <Assignments />,
    },
    {
        path: "announcements",
        element: <Announcements />,
    },
    {
        path: "courses/:id",
        element: <Course />,
    },
];

export default studentRoutes;
