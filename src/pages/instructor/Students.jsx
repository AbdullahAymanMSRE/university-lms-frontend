import { useState } from "react";
import CustomTable from "../../components/CustomTable";
import { cn } from "../../lib/utils";
import {
  useGetCoursesQuery,
  useGetStudentsQuery,
  useAssignStudentToCourseMutation,
} from "../../api/instructorApiSlice";
import ActionButton from "../../components/ActionButton";

export default function Students() {
  const { data: courses } = useGetCoursesQuery();
  const { data: students } = useGetStudentsQuery();
  const [assignStudentToCourse, {}] = useAssignStudentToCourseMutation();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const titles = ["Id", "Name", "Email", "Faculty"];

  return (
    <div>
      <div className="flex gap-3 mb-4 items-center">
        <div>Select Course:</div>
        <select
          onChange={(e) => {
            setSelectedCourse(courses.find((c) => c.id === +e.target.value));
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
            (rs) => rs.id === s.id
          );
          return {
            ...s,
            actions: (
              <div class="flex items-center gap-x-4">
                {selectedCourse ? (
                  <ActionButton
                    className={cn("bg-secondary", {
                      "bg-transparent text-darkblue hover:scale-100 pointer-events-none":
                        registered,
                    })}
                    onClick={() =>
                      assignStudentToCourse({
                        course_id: selectedCourse.id,
                        student_id: s.id,
                      })
                    }
                  >
                    {registered ? "Already Assigned" : "Assign to Course"}
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
