import React from "react";
import dashboard from "../assets/dashboard-li.svg";
import course from "../assets/course-li.svg";
import resources from "../assets/resources-li.svg";
import discussion from "../assets/discussion-li.svg";
import schedules from "../assets/schedules-li.svg";
import account from "../assets/account-li.svg";
import settings from "../assets/settings-li.svg";
import logout from "../assets/logout-li.svg";

export default function Home() {
  return (
    <body className="bg-[#F4F7FE]">
      <nav className=" h-screen w-[290px] bg-white pl-[38px] pt-[47px] relative">
        <div className="logo h-[44px] w-[162px] relative">
          <div className="h-[44px] w-[44px] bg-[#0066FF] rounded-[10px] inline-block"></div>
          <p className="navtitle inline-block text-[#0066FF] h-[39px] w-[106px] ml-3 font-[poppins] text-[26px] font-bold absolute top-[-5px]">
            Student
            <br />
            <span className="text-xs font-medium absolute top-[35px] uppercase">
              Dashboard
            </span>
          </p>
        </div>
        <ul className="absolute top-[139px] nav-page[color: red] w-[214px] text-[16px] flex flex-col gap-[15px]">
          <li className="nav-page 1 pl-[10px] text-white bg-[#0066FF] rounded-[5px] h-[45px] flex items-center">
            <img
              src={dashboard}
              className="h-[18px] w-[18px]  mr-[14px] invert"
              alt="dashboard"
            ></img>
            Dashboard
          </li>
          <li className="nav-page 1 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={course}
              className="h-[19px] w-[18px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%] relative top-[1px]"
              alt="course"
            ></img>
            Course
          </li>
          <li className="nav-page 2 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={resources}
              className="h-[21-px] w-[18px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%] relative top-[2px]"
              alt="resources"
            ></img>
            Resources
          </li>
          <li className="nav-page 3 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={discussion}
              className="h-[21px] w-[18px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%] relative top-[3px]"
              alt="discussion"
            ></img>
            Discussion
          </li>
          <li className="nav-page 4 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={schedules}
              className="h-[22px] w-[20px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%]"
              alt="schedules"
            ></img>
            Schedules
          </li>
          <li className="nav-page 6 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={account}
              className="h-[21.55px] w-[18px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%]"
              alt="account"
            ></img>
            Account
          </li>
          <li className="nav-page 7 pl-[10px] text-[#A3AED0] rounded-[5px] h-[45px] flex items-center">
            <img
              src={settings}
              className="h-[19.45px] w-[20px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%]"
              alt="settings"
            ></img>
            Settings
          </li>
        </ul>
        <div className="text-[#A3AED0] absolute bottom-[45px] h-[45px]">
          <img
            src={logout}
            className="h-[18px] w-[20px]  mr-[14px] invert-[85] sepia-[52%] saturate-[727%] hue-rotate-[182deg] brightness-[88%] inline-block"
            alt="settings"
          ></img>
          Log Out
        </div>
      </nav>
    </body>
  );
}
