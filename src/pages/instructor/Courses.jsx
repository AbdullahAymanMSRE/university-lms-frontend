import { Plus } from "lucide-react";
import CustomTable from "../../components/CustomTable";
import { useGetCoursesQuery } from "../../api/instructorApiSlice";
import ActionButton from "../../components/ActionButton";

export default function Courses() {
  const titles = [
    "Id",
    "Title",
    "Credit Hours",
    "Number of Students",
    "Actions",
  ];
  const { data: courses } = useGetCoursesQuery();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl mb-4 text-darkenedBlue2">List Of Courses</h3>

        <button class="bg-secondary text-white px-4 py-2 rounded duration-200 hover:scale-110 transition-all gap-2 focus:outline-none flex">
          <span className="bg-white text-secondary rounded-full flex items-center justify-center size-6 ">
            <Plus size={16} />
          </span>
          <span>New Course</span>
        </button>
      </div>

      <CustomTable
        titles={titles}
        actions={[
          {
            label: "Delete",
            className: "bg-red-500",
            handle: (item) => console.log("Delete", item),
          },
          {
            label: "Edit",
            className: "bg-blue-500",
            handle: (item) => console.log("Edit", item),
          },
        ]}
        data={courses?.map((course) => ({
          ...course,
          number_of_students: course.students_registered.length,
          actions: (
            <div class="flex items-center gap-x-4">
              {/*  TODO: Add onClick               */}
              <ActionButton className="bg-red-500">Delete</ActionButton>
              <ActionButton className="bg-red-500">Edit</ActionButton>
            </div>
          ),
        }))}
      />
    </div>
  );
}
