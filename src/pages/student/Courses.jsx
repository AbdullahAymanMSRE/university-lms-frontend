import CourseCard from "../../components/CourseCard";
import { useGetStudentCoursesQuery } from "../../api/studentApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Courses() {
    const { data: courses, isLoading } = useGetStudentCoursesQuery();

    return (
        <div className="flex min-h-screen flex-wrap items-start gap-7 max-md:p-4 max-sm:w-full max-sm:justify-center">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                courses?.map((course) => (
                    <CourseCard
                        name={course.title}
                        instructor={course["instructor name"]}
                        id={course.id}
                    />
                ))
            )}
            {courses && !courses.length ? (
                <p>You don't have any courses Currently</p>
            ) : null}
        </div>
    );
}
