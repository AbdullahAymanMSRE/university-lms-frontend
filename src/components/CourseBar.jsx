import { CourseIconSvg } from "../svgs/box_icons";
import { Link } from "react-router-dom";

export default function Coursebar({ id, course, author }) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <CourseIconSvg />
                <div>
                    <h2 className="text-base font-bold">{course}</h2>
                    {author ? (
                        <p className="text-xs font-medium text-text">{`By ${author}`}</p>
                    ) : null}
                </div>
            </div>
            {author ? (
                <Link
                    to={`/student/courses/${id}`}
                    className="self-center rounded-full bg-primary px-3 py-2 text-xs font-medium text-white shadow transition duration-500 hover:scale-105 hover:shadow-lg"
                >
                    View Course
                </Link>
            ) : (
                <Link
                    to={`/instructor/courses/${id}`}
                    className="self-center rounded-full bg-secondary px-3 py-2 text-xs font-medium text-white shadow transition duration-500 hover:scale-105 hover:shadow-lg"
                >
                    View Course
                </Link>
            )}
        </div>
    );
}
