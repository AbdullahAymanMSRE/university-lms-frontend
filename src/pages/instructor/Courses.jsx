import { Plus } from "lucide-react";

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

      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            {titles.map((title) => (
              <th
                scope="col"
                class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                {title}
              </th>
            ))}

            <th scope="col" class="relative py-3.5 px-4">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          <tr>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              1
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              Datastructures & Algorithms
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              4
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              78
            </td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
              <div class="flex items-center gap-x-4">
                <button class="bg-red-600 text-white px-4 py-2 rounded transition-all duration-200 hover:scale-110 focus:outline-none">
                  Delete
                </button>

                <button class="bg-blue-500 text-white px-4 py-2 rounded duration-200 hover:scale-110 transition-all focus:outline-none">
                  Update
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
