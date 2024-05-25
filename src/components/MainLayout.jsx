import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { cn } from "../lib/utils";
import { UserTypes } from "../lib/constants";
import SideNav from "./SideNav";
import Submission from "./Submission";

export default function MainLayout({ user, navUrls, userType }) {
  const [toggle, setToggle] = useState(false);
  const pageName = useLocation().pathname.split("/")[2];
  const [modal, setModal] = useState(false);

  

  const isStudent = userType === UserTypes.STUDENT;
  const bgClr = isStudent ? "bg-primary" : "bg-secondary";
  const textClr = isStudent ? "text-primary" : "text-secondary";

  return (
    <div className="bg-pageColor relative flex max-md:flex-col">
      <SideNav
        items={navUrls}
        isStudent={isStudent}
        className={`${
          toggle ? "max-md:translate-x-0" : "max-md:-translate-x-full"
        }`}
        toggle={() => setToggle(!toggle)}
        bgClr={bgClr}
        textClr={textClr}
      />
      <div
        className={`fixed h-11 flex items-center justify-center max-md:z-[1000] ${
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
                className={cn(
                  "block h-1 w-8 origin-center rounded-full transition-transform ease-in-out bg-white",
                  {
                    [`${bgClr} w-8 translate-y-1.5 rotate-45`]: toggle,
                  }
                )}
              ></span>
              <span
                className={cn(
                  "block h-1 w-6 origin-center rounded-full transition-transform ease-in-out bg-white",
                  {
                    [`${bgClr} w-8 -translate-y-1.5 -rotate-45`]: toggle,
                  }
                )}
              ></span>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`${bgClr} hidden z-50 text-xl h-11 w-full text-white uppercase max-md:flex max-md:justify-center max-md:items-center sticky top-0`}
      >
        {pageName === undefined ? "Dashboard" : pageName}
      </div>
      <div className="flex w-full p-7 flex-col gap-7 max-md:items-center max-md:p-4 md:ml-72">
        <div className="font-bold max-md:self-start max-md:hidden">
          <p className="text-sm text-customBlue mb-3 ">Hi {user.name},</p>
          <h1 className="text-4xl text-darkenedBlue">Welcome to EUI!</h1>
        </div>
        <Submission
        setModal={setModal}
        modal={modal} />
        <Outlet context={{modal, setModal}} />
      </div>
    </div>
  );
}
