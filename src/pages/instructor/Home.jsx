import { UserTypes } from "../../lib/constants";
import * as icons from "../../svgs/sidenav";
import MainLayout from "../../components/MainLayout";

export default function Home() {
  const user = {
    name: "Abdullah Ayman",
  };

  return (
    <MainLayout
      user={user}
      navUrls={[
        {
          text: "Dashboard",
          url: "/instructor",
          icon: icons.DashboardSvg,
        },
        {
          text: "Courses",
          url: "/instructor/courses",
          icon: icons.CoursesSvg,
        },
        {
          text: "Students",
          url: "/instructor/students",
          icon: icons.StudentsSvg,
        },
        {
          text: "Assignments",
          url: "/instructor/assignments",
          icon: icons.CalendarSvg,
        },
        {
          text: "Announcements",
          url: "/instructor/announcements",
          icon: icons.AnnouncementsSvg,
        },
      ]}
      userType={UserTypes.INSTRUCTOR}
    />
  );
}
