import { Plus } from "lucide-react";
import CustomTable from "../../components/CustomTable";
import { Link } from "react-router-dom";

export default function Courses() {
    const titles = ["Id", "Name", "Credit Hours", "Number of Students"];
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="mb-4 text-2xl text-darkenedBlue2">
                    List Of Courses
                </h3>

                <Link
                    to="/instructor/create-course"
                    class="flex gap-2 rounded bg-secondary px-4 py-2 text-white transition-all duration-200 hover:scale-110 focus:outline-none"
                >
                    <span className="flex size-6 items-center justify-center rounded-full bg-white text-secondary ">
                        <Plus size={16} />
                    </span>
                    <span>New Course</span>
                </Link>
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
