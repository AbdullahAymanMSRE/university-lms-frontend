import { UserTypes } from "../../lib/constants";
import * as icons from "../../svgs/sidenav";
import MainLayout from "../../components/MainLayout";

export default function Home() {
  const student = {
    name: "John Doe",
  };

  return (
    <MainLayout
      user={student}
      navUrls={[
        {
          text: "Dashboard",
          url: "/student",
          icon: icons.DashboardSvg,
        },
        {
          text: "Courses",
          url: "/student/courses",
          icon: icons.CoursesSvg,
        },
        {
          text: "My account",
          url: "/student/account",
          icon: icons.MyAccountSvg,
        },
        {
          text: "Files",
          url: "/student/files",
          icon: icons.FilesSvg,
        },
        {
          text: "Settings",
          url: "/student/settings",
          icon: icons.SettingsSvg,
        },
        {
          text: "Announcements",
          url: "/student/announcements",
          icon: icons.AnnouncementsSvg,
        },
      ]}
      userType={UserTypes.STUDENT}
    />
  );
}
