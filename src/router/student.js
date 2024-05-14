import Courses from "../pages/student/Courses";
import Dashboard from "../pages/student/Dashboard";

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
];

export default studentRoutes;
