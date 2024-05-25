import { Link } from "react-router-dom";
import CourseBar from "./CourseBar";

export default function CoursesShortList({ courses, instructor }) {
  return (
    <div className="max-w-lg flex-1 h-80 bg-white rounded-3xl px-7 py-5 text-xl gap-5  relative max-lg:basis-full">
      <h2 className="font-bold mb-5">My Courses</h2>
      <div className="flex flex-col gap-5">
        {courses?.map((course) => (
          <CourseBar
            course={course.title}
            author={instructor ? course.author : null}
          />
        ))}
        <Link text="View all" color="primary" />
      </div>
    </div>
  );
}
