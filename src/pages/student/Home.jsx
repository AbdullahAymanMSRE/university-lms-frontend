import React from "react";
import SideNav from "../../components/SideNav";
import { UserTypes } from "../../utils/constants";
import * as icons from "../../svgs/sidenav";
import { Outlet } from "react-router";

export default function Home() {
  const student = {
    name: "John Doe",
  };
  return (
    <body className="h-screen bg-pageColor flex">
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
      <div className="flex w-full p-7 flex-col gap-7">
        <div className="font-bold">
          <p className="text-sm text-customBlue mb-3">
            Hi {student.name},
          </p>
          <h1 className="text-4xl text-darkenedBlue">
            Welcome to EUI!
          </h1>
        </div>
        <Outlet />
      </div>
    </body>
  );
}
