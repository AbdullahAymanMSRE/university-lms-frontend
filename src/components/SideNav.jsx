import React from "react";
import { twMerge } from "tailwind-merge";
import { UserTypes } from "../lib/constants";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function SideNav({
  items,
  isStudent,
  className,
  toggle,
  bgClr,
  textClr,
}) {
  return (
    <nav
      className={twMerge(
        `bg-white p-10 flex flex-col gap-16 transition z-[999] min-h-screen ease-in-out max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full`,
        className
      )}
    >
      <div className="logo h-11 flex items-center gap-3">
        <div className={`h-full w-11 rounded-xl ${bgClr}`}></div>
        <div className={`${textClr} text-2xl leading-5 font-bold`}>
          {isStudent ? "Student" : "Instructor"}
          <br />
          <span className="text-xs font-medium uppercase">Dashboard</span>
        </div>
      </div>
      <ul className="w-52 text-base flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index} onClick={toggle} className={twMerge("")}>
            <NavLink end to={item.url}>
              {({ isActive, isPending, isTransitioning }) => (
                <div
                  className={twMerge(
                    "pl-3 gap-3 rounded-md h-11 flex items-center",
                    clsx({
                      [bgClr]: isActive,
                    })
                  )}
                >
                  {item.icon(isActive)}
                  <p
                    className={twMerge(
                      "text-text",
                      clsx({
                        "text-white": isActive,
                      })
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
