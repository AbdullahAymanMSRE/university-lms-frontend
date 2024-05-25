import { toCamelCase } from "../lib/utils";
import { cn } from "../lib/utils";

export default function CustomTable({
  titles,
  dataKeys,
  data,
  actions,
  handleDelete,
  handleUpdate,
}) {
  return (
    <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow">
      <thead class="bg-gray-50 ">
        <tr>
          {titles.map((title) => (
            <th
              scope="col"
              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
            >
              {title}
            </th>
          ))}

          {actions ? (
            <th scope="col" class="relative py-3.5 px-4">
              <span class="sr-only">Actions</span>
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 ">
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((key) => (
              <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                {item[toCamelCase(key)]}
              </td>
            ))}
            {actions && (
              <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-4">
                  {actions.map((action) => (
                    <button
                      class={cn(
                        "text-white px-4 py-2 rounded transition-all duration-200 hover:scale-110 focus:outline-none",
                        action.className
                      )}
                      onClick={() => action.handle(item)}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
