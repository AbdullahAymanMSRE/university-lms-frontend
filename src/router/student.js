import Courses from "../pages/student/Courses";
import Dashboard from "../pages/student/Dashboard";
import Account from "../pages/student/Account";
import Assignments from "../pages/student/Assignments";
import Announcements from "../pages/student/Announcements";

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
];

export default studentRoutes;
