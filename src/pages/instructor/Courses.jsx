import { Plus } from "lucide-react";
import CustomTable from "../../components/CustomTable";

export default function Courses() {
  const titles = ["Id", "Name", "Credit Hours", "Number of Students"];
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
        data={[
          {
            id: 1,
            name: "Datastructures & Algorithms",
            creditHours: 4,
            numberOfStudents: 78,
          },
        ]}
      />
    </div>
  );
}
