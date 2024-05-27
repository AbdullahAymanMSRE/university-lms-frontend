import { useState } from "react";
import { Link } from "react-router-dom";
export default function Announcement({ author, subject, content, course }) {
    const authorInitials =
        author && author.split(" ")[0][0] + author.split(" ")[0][1];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`flex cursor-pointer justify-between gap-12 border-t-2 px-9 py-6 focus:line-clamp-none max-md:w-screen ${isOpen ? "h-fit" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-1 gap-6">
                {authorInitials && (
                    <div className="flex size-11 items-center justify-center text-ellipsis rounded-full border border-primary text-lg font-medium uppercase text-primary">
                        {authorInitials}
                    </div>
                )}
                <div className="flex flex-1 flex-col items-start">
                    <div className="text-xl font-bold text-darkenedBlue">
                        {subject}
                    </div>
                    {course.title && (
                        <Link
                            className="mb-3 ml-1 text-xs text-gray-700 hover:underline"
                            to={`/student/courses/${course.id}`}
                        >
                            {course.title}
                        </Link>
                    )}
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
