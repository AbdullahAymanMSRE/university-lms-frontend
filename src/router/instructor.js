import Courses from "../pages/instructor/Courses";
import Dashboard from "../pages/instructor/Dashboard";

const instructorRoutes = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: 'courses',
    element: <Courses />
  }
];

export default instructorRoutes;
