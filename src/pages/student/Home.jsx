import React from "react";
import SideNav from "../../components/SideNav";
import { UserTypes } from "../../lib/constants";
import * as icons from "../../svgs/sidenav";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";

export default function Home() {
  const student = {
    name: "John Doe",
  };
  const [toggle, setToggle] = React.useState(false);
  const toggleNav = () => setToggle(!toggle);
  const pageName = useLocation().pathname.split("/")[2];
  return (
    <body className="bg-pageColor relative flex max-md:flex-col">
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
        className={`${
          toggle ? "max-md:translate-x-0" : "max-md:-translate-x-full"
        }`}
        toggle={toggleNav}
      />
      <div
        className={`fixed h-20 flex items-center justify-center max-md:z-[1000] ${
          toggle ? "max-md:right-4" : "max-md:left-4"
        }`}
      >
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`flex items-center justify-center
          `}
        >
          <div className="hidden h-10 w-10 cursor-pointer rounded-3xl bg-transparent p-2 max-md:flex max-md:items-center max-md:justify-center">
            <div className="space-y-2">
              <span
                className={`block h-1 w-8 origin-center rounded-full ${
                  toggle
                    ? "bg-primary w-8 translate-y-1.5 rotate-45"
                    : "bg-white"
                } transition-transform ease-in-out`}
              ></span>
              <span
                className={`block h-1 w-6 origin-center rounded-full ${
                  toggle
                    ? "bg-primary w-8 -translate-y-1.5 -rotate-45"
                    : "bg-white"
                } transition-transform ease-in-out`}
              ></span>
            </div>
          </div>
        </button>
      </div>
      <div className="hidden z-50 bg-primary text-3xl h-20 w-full text-white uppercase max-md:flex max-md:justify-center max-md:items-center sticky top-0">
        {pageName === undefined ? "Dashboard" : pageName}
      </div>
      <div className="flex w-full p-7 flex-col gap-7 max-md:items-center max-md:p-4">
        <div className="font-bold max-md:self-start max-md:hidden">
          <p className="text-sm text-customBlue mb-3 ">Hi {student.name},</p>
          <h1 className="text-4xl text-darkenedBlue">Welcome to EUI!</h1>
        </div>
        <Outlet />
      </div>
    </body>
  );
}
