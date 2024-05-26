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
                    className="flex h-9 w-28 items-center justify-center rounded-[70px] border border-solid border-primary text-xs text-primary"
                >
                    View Course
                </Link>
            ) : (
                ""
            )}
        </div>
    );
}
