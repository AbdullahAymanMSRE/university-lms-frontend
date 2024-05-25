import CourseCard from "../../components/CourseCard";
import { useGetStudentCoursesQuery } from "../../api/studentApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Courses() {
  const { data: courses, isLoading } = useGetStudentCoursesQuery();

  return (
    <div className="flex gap-7 flex-wrap items-start min-h-screen max-md:p-4 max-sm:w-full max-sm:justify-center">
      {isLoading
      ? <LoadingSpinner />
      : courses?.map((course) => (
        <CourseCard name={course.title} instructor={course.author} />
      ))}
      {(courses && !courses.length)  ? <p>You don't have any courses Currently</p> : null }
    </div>
  );
}
