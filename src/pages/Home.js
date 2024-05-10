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
            url: "",
            icon: icons.DashboardSvg,
          },
          {
            text: "Courses",
            url: "/courses",
            icon: icons.CoursesSvg,
          },
        ]}
        userType={UserTypes.STUDENT}
      />
      <Outlet />
    </body>
  );
}
