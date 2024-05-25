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
        <div
            className={cn(
                "relative flex min-h-screen bg-pageColor max-md:flex-col",
                { "bg-secondary/5": !isStudent },
            )}
        >
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
                className={`fixed flex h-11 items-center justify-center max-md:z-[1000] ${
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
                                    "block h-1 w-8 origin-center rounded-full bg-white transition-transform ease-in-out",
                                    {
                                        [`${bgClr} w-8 translate-y-1.5 rotate-45`]:
                                            toggle,
                                    },
                                )}
                            ></span>
                            <span
                                className={cn(
                                    "block h-1 w-6 origin-center rounded-full bg-white transition-transform ease-in-out",
                                    {
                                        [`${bgClr} w-8 -translate-y-1.5 -rotate-45`]:
                                            toggle,
                                    },
                                )}
                            ></span>
                        </div>
                    </div>
                </button>
            </div>
            <div
                className={`${bgClr} sticky top-0 z-50 hidden h-11 w-full text-xl uppercase text-white max-md:flex max-md:items-center max-md:justify-center`}
            >
                {pageName === undefined ? "Dashboard" : pageName}
            </div>
            <div className="flex w-full flex-col gap-7 p-7 max-md:items-center max-md:p-4 md:ml-72">
                <div className="font-bold max-md:hidden max-md:self-start">
                    <p className="mb-3 text-sm text-darkenedBlue ">
                        Hi {user.name},
                    </p>
                    <h1 className={`text-4xl ${textClr}`}>Welcome to EUI!</h1>
                </div>
                <Submission setModal={setModal} modal={modal} />
                <Outlet context={{ modal, setModal }} />
            </div>
        </div>
    );
}
