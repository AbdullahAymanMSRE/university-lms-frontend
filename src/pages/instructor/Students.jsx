import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import { cn } from "../../lib/utils";
import {
    useGetInstructorCoursesQuery,
    useGetStudentsQuery,
    useAssignStudentToCourseMutation,
} from "../../api/instructorApiSlice";
import ActionButton from "../../components/ActionButton";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Students() {
    const { data: courses } = useGetInstructorCoursesQuery();
    const { data: students } = useGetStudentsQuery();
    const [assignStudentToCourse, {}] = useAssignStudentToCourseMutation();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loadingId, setLoadingId] = useState(null);

    const titles = ["Id", "Name", "Email", "Faculty"];

    useEffect(() => {
        if (courses && selectedCourse)
            setSelectedCourse((course) =>
                courses.find((c) => c.id === course.id),
            );
    }, [courses]);

    return (
        <div>
            <div className="mb-4 flex items-center gap-3">
                <div>Select Course to Assign Students:</div>
                <select
                    onChange={(e) => {
                        setSelectedCourse(
                            courses.find((c) => c.id === +e.target.value),
                        );
                    }}
                >
                    <option value="">Select Course</option>
                    {courses?.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.title}
                        </option>
                    ))}
                </select>
            </div>

            <CustomTable
                titles={selectedCourse ? [...titles, "Actions"] : titles}
                showActions={true}
                data={students?.map((s) => {
                    const registered = selectedCourse?.students_registered.find(
                        (rs) => rs.id === s.id,
                    );

                    return {
                        ...s,
                        actions: (
                            <div class="flex items-center justify-center gap-x-4">
                                {selectedCourse ? (
                                    <ActionButton
                                        className={cn(
                                            "bg-secondary shadow transition duration-500 hover:scale-105 hover:shadow-lg",
                                            {
                                                "text-darkblue pointer-events-none bg-transparent hover:scale-100":
                                                    registered,
                                                "pointer-events-none":
                                                    loadingId === s.id &&
                                                    !registered,
                                            },
                                        )}
                                        onClick={() => {
                                            assignStudentToCourse({
                                                course_id: selectedCourse.id,
                                                student_id: s.id,
                                            });
                                            setLoadingId(s.id);
                                        }}
                                    >
                                        {loadingId === s.id && !registered ? (
                                            <LoadingSpinner />
                                        ) : registered ? (
                                            "Already Assigned"
                                        ) : (
                                            "Assign to Course"
                                        )}
                                    </ActionButton>
                                ) : null}
                            </div>
                        ),
                    };
                })}
            />
        </div>
    );
}
