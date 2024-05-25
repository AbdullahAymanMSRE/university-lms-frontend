import React from "react";
import { twMerge } from "tailwind-merge";
import { UserTypes } from "../lib/constants";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { isAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

export default function SideNav({
    items,
    isStudent,
    className,
    toggle,
    bgClr,
    textClr,
}) {
    const [activeItemName, setActiveItemName] = useState("");

    useEffect(() => {
        // Set the initial active item based on the current URL
        const activeItem = items.find((item) =>
            window.location.pathname.endsWith(item.url),
        );
        if (activeItem) {
            setActiveItemName(activeItem.text);
        }
    }, [items]);

    return (
        <nav
            className={twMerge(
                `fixed z-[999] flex min-h-screen flex-col gap-16 bg-white p-10 shadow transition ease-in-out max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full`,
                className,
            )}
        >
            <div className="logo flex h-11 items-center gap-3">
                <div className={`h-full w-11 rounded-xl ${bgClr}`}></div>
                <div className={`${textClr} text-2xl font-bold leading-5`}>
                    {isStudent ? "Student" : "Instructor"}
                    <br />
                    <span className="text-xs font-medium uppercase">
                        {activeItemName}
                    </span>
                </div>
            </div>
            <ul className="flex w-52 flex-col gap-4 text-base">
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            toggle();
                            setActiveItemName(item.text);
                        }}
                        className={twMerge("")}
                    >
                        <NavLink end to={item.url}>
                            {({ isActive, isPending, isTransitioning }) => (
                                <div
                                    className={twMerge(
                                        "flex h-11 items-center gap-3 rounded-md pl-3",
                                        clsx({
                                            [bgClr]: isActive,
                                        }),
                                    )}
                                >
                                    {item.icon(isActive)}
                                    <p
                                        className={twMerge(
                                            "text-text",
                                            clsx({
                                                "text-white": isActive,
                                            }),
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
