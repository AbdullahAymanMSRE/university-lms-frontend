import { Plus } from "lucide-react";
import CustomTable from "../../components/CustomTable";
import { useGetInstructorCoursesQuery } from "../../api/instructorApiSlice";
import ActionButton from "../../components/ActionButton";
import { Link } from "react-router-dom";
import { Pencil, X } from "lucide-react";

export default function Courses() {
    const titles = [
        "Id",
        "Title",
        "Credit Hours",
        "Number of Students",
        "Actions",
    ];
    const { data: courses } = useGetInstructorCoursesQuery();

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-darkenedBlue">
                    Courses
                </h3>

                <Link
                    to="/instructor/create-course"
                    class="flex gap-2 rounded bg-secondary px-4 py-2 text-white shadow transition-all duration-500 hover:scale-105 hover:shadow-md focus:outline-none"
                >
                    <span className="flex size-6 items-center justify-center rounded-full bg-white text-secondary ">
                        <Plus size={16} />
                    </span>
                    <span>New Course</span>
                </Link>
            </div>

            <CustomTable
                titles={titles}
                data={courses?.map((course) => ({
                    ...course,
                    number_of_students: course.students_registered.length,
                    link: `/instructor/course/${course.id}`,
                    actions: (
                        <div class="flex items-center gap-x-4">
                            {/*  TODO: Add onClick               */}
                            <ActionButton className="bg-red-500 shadow transition duration-500 hover:scale-105 hover:shadow-md">
                                <X className="size-4" />
                            </ActionButton>
                            <ActionButton className="bg-secondary shadow transition duration-500 hover:scale-105 hover:shadow-md">
                                <Pencil className="size-4" />
                            </ActionButton>
                        </div>
                    ),
                }))}
            />
        </div>
    );
}
