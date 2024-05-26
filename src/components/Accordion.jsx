import { ChevronDown } from "../svgs/box_icons";
import { FileIcon } from "../svgs/box_icons";
import { useState } from "react";

export default function Accordion({ weekNumber, items }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button
                type="button"
                className={`flex w-full items-center justify-between gap-3 bg-primary text-white ${isOpen ? "rounded-b-none" : ""} rounded-xl border border-gray-200 p-5 font-medium`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span class="flex items-center">Week {weekNumber}</span>
                <ChevronDown isOpen={isOpen} />
            </button>
            <div className={`${isOpen ? "" : "hidden"}`}>
                <div class="rounded-xl rounded-t-none border border-gray-200">
                    {items.map((item) => (
                        <div class="flex items-center gap-3 border-y p-5 font-medium hover:bg-blue-50">
                            <FileIcon />
                            <span className="cursor-pointer hover:underline">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
