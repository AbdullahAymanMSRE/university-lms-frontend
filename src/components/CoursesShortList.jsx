import { Link } from "react-router-dom";
import CourseBar from "./CourseBar";

export default function CoursesShortList({ courses, instructor }) {
    return (
        <div className="relative h-80 max-w-lg flex-1 gap-5 rounded-3xl bg-white px-7 py-5  text-xl max-lg:basis-full">
            <h2 className="mb-5 font-bold">My Courses</h2>
            <div className="flex flex-col gap-5">
                {courses?.map((course) => (
                    <CourseBar
                        course={course.title}
                        author={!instructor ? course["instructor name"] : null}
                    />
                ))}
                <Link text="View all" color="primary" />
            </div>
        </div>
    );
}
