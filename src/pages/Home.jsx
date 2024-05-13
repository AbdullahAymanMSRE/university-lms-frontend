import React from "react";
import SideNav from "../components/SideNav";
import { UserTypes } from "../utils/constants";
import * as icons from "../svgs/sidenav";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <body className="bg-[#F4F7FE] flex">
      <SideNav
        items={[
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
            text: "Files",
            url: "/student/files",
            icon: icons.FilesSvg,
          },
          {
            text: "My account",
            url: "/account",
            icon: icons.MyAccountSvg,
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
          }
        ]}
        userType={UserTypes.STUDENT}
      />
      <Outlet />
    </body>
  );
}
