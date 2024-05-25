import Courses from "../pages/instructor/Courses";
import Dashboard from "../pages/instructor/Dashboard";

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
    element: <div>Students</div>,
  },

  {
    path: "assignments",
    element: <div>Assignments</div>,
  },

  {
    path: "announcements",
    element: <div>Announcements</div>,
  },
];

export default instructorRoutes;
