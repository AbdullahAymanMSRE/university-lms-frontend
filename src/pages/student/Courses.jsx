import CourseCard from "../../components/CourseCard";
import { useGetCoursesQuery } from "../../api/studentApiSlice";

export default function Courses() {
  const { data: courses } = useGetCoursesQuery();

  return (
    <div className="flex gap-7 flex-wrap items-start min-h-screen max-md:p-4 max-sm:w-full max-sm:justify-center">
      {courses?.map((course) => (
        <CourseCard name={course.title} instructor={course.author} />
      ))}
    </div>
  );
}
