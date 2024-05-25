import Courses from "../pages/instructor/Courses";
import Dashboard from "../pages/instructor/Dashboard";
import Students from "../pages/instructor/Students";

const instructorRoutes = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: 'courses',
    element: <Courses />
  },
  {
    path: 'students',
    element: <Students />
  }
];

export default instructorRoutes;
