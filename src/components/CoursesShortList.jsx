import { Link } from "react-router-dom";
import CourseBar from "./CourseBar";

export default function CoursesShortList() {
  return (
    <div className="max-w-lg flex-1 h-80 bg-white rounded-3xl px-7 py-5 text-xl gap-5  relative max-lg:basis-full">
      <h2 className="font-bold mb-5">My Courses</h2>
      <div className="flex flex-col gap-5">
        <CourseBar course="History" author="30SS" />
        <CourseBar course="Math" author="Amarico" />
        <CourseBar course="Science" author="Abood" />
        <Link text="View all" color="primary" />
      </div>
    </div>
  );
}
