import { Link } from "react-router-dom";
import CourseBar from "./CourseBar";
import LoadingSpinner from "./LoadingSpinner";
import LinkArrow from "./LinkArrow";

export default function CoursesShortList({ courses, instructor, isLoading }) {
    return (
        <div className="relative h-80 max-w-lg flex-1 gap-5 overflow-auto rounded-3xl bg-white px-7 py-5 text-xl  shadow-sm max-lg:basis-full">
            <h2 className="mb-5 font-bold">My Courses</h2>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {courses?.map((course) => (
                        <CourseBar
                            id={course.id}
                            course={course.title}
                            author={
                                !instructor ? course["instructor name"] : null
                            }
                        />
                    ))}
                    <Link text="View all" color="primary" />
                </div>
            )}
            <LinkArrow text="view all courses" color="secondary" />
        </div>
    );
}
