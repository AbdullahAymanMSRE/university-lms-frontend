import Courses from "../pages/student/Courses";
import Dashboard from "../pages/student/Dashboard";
import Account from "../pages/student/Account";

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
    path: "files",
    element: <div>Files page</div>,
  },
  {
    path: "settings",
    element: <div>Settings page</div>,
  },
  {
    path: "announcements",
    element: <div>Announcements page</div>,
  },
];

export default studentRoutes;
