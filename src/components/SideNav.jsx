import { twMerge } from "tailwind-merge";
import { UserTypes } from "../utils/constants";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function SideNav({ items, userType, className }) {
  const isStudent = userType === UserTypes.STUDENT;
  const bgClr = isStudent ? "bg-primary" : "bg-secondary";
  const textClr = isStudent ? "text-primary" : "text-secondary";

  return (
    <nav
      className={twMerge(
        "bg-white p-10 flex flex-col gap-16",
        className
      )}
    >
      <div className="logo h-11 flex items-center gap-3">
        <div className={`h-full w-11 rounded-xl ${bgClr}`}></div>
        <div
          className={`${textClr} text-2xl leading-5 font-bold`}
        >
          {isStudent ? "Student" : "Instructor"}
          <br />
          <span className="text-xs font-medium uppercase">
            Dashboard
          </span>
        </div>
      </div>
      <ul className=" w-52 text-base flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index} className={twMerge("")}>
            <NavLink end to={item.url}>
              {({ isActive, isPending, isTransitioning }) => (
                <div
                  className={twMerge(
                    "pl-3 gap-3 rounded-md h-11 flex items-center ",
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
