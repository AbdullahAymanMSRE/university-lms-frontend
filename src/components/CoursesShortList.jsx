import { Link } from "react-router-dom";
import CourseBar from "./CourseBar";
import LoadingSpinner from "./LoadingSpinner";
import LinkArrow from "./LinkArrow";
import useUserStore from "../store/userStore";

export default function CoursesShortList({ courses, isLoading }) {
    const role = useUserStore((state) => state.role);
    const instructor = role === "instructor";
    return (
        <div className="relative h-80 max-w-lg flex-1 gap-5 rounded-3xl bg-white px-7 py-5 text-xl  shadow-sm max-lg:basis-full">
            <h2 className="mb-5 font-bold">My Courses</h2>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {courses?.length === 0 ? (
                        <div className="text-center text-xl font-medium text-gray-500">
                            No courses
                        </div>
                    ) : (
                        <>
                            {courses?.slice(0, 3).map((course) => (
                                <CourseBar
                                    key={course.id}
                                    id={course.id}
                                    course={course.title}
                                    author={
                                        !instructor
                                            ? course["instructor name"]
                                            : null
                                    }
                                />
                            ))}
                            <Link to="/instructor/courses">
                                <LinkArrow text="view all courses" />
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
