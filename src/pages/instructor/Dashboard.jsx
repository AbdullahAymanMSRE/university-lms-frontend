import CoursesShortList from "../../components/CoursesShortList";
import { StudentsBoxSvg, StudentsPathSvg } from "../../svgs/box_icons";
import { useGetInstructorCoursesQuery } from "../../api/instructorApiSlice";
import LinkArrow from "../../components/LinkArrow";

export default function Dashboard() {
    const { data: courses, isLoading } = useGetInstructorCoursesQuery();

    return (
        <div className="flex flex-col gap-7">
            <div className="flex gap-5">
                <div className="w-64 max-w-lg gap-5 rounded-2xl bg-white px-6 py-5 max-md:w-full">
                    <p className="text-base font-light text-text">
                        Live Courses
                    </p>
                    <p className="text-2xl font-bold text-darkenedBlue2">
                        {courses?.length ?? 0}
                    </p>
                </div>
                <div className="flex max-w-lg items-center gap-4 rounded-2xl bg-white px-5 py-5 max-md:w-full">
                    <StudentsBoxSvg />
                    <div>
                        <p className="font text-base text-text">Students</p>
                        <p className="text-lg font-bold text-darkenedBlue2">
                            {courses?.reduce(
                                (acc, course) =>
                                    acc + course.students_registered.length,
                                0,
                            )}
                        </p>
                    </div>
                    <StudentsPathSvg />
                </div>
            </div>
            <CoursesShortList courses={courses} instructor />
        </div>
    );
}
