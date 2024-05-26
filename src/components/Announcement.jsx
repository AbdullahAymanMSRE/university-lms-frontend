import { useState } from "react";
export default function Announcement({ author, subject, content, course }) {
    const authorInitials = author.split(" ")[0][0] + author.split(" ")[1][0];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`flex cursor-pointer justify-between gap-12 border-t-2 px-9 py-6 focus:line-clamp-none max-md:w-screen ${isOpen ? "h-fit" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-1 gap-6">
                <div className="size-fit text-ellipsis rounded-full border border-primary p-2 text-lg font-medium uppercase text-primary">
                    {authorInitials}
                </div>
                <div className="flex flex-1 flex-col items-start">
                    <div className="text-xl font-bold text-darkenedBlue">
                        {subject}
                    </div>
                    <a
                        className="mb-3 ml-1 text-xs text-gray-700 hover:underline"
                        href={`course/${course.id}`}
                    >
                        {course.title}
                    </a>
                    <p
                        className={`${isOpen ? "" : "line-clamp-1"} max-w-lg text-sm text-gray-700`}
                    >
                        {content}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center text-darkenedBlue">
                <p>Posted on:</p>
                <p>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}
