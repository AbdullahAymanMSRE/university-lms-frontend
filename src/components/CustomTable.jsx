import { useLocation } from "react-router";
import { toSnakeCase } from "../lib/utils";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export default function CustomTable({
    titles,
    dataKeys,
    data,
    actions,
    handleDelete,
    handleUpdate,
}) {
    return (
        <table class="min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg shadow">
            <thead class="bg-gray-50 ">
                <tr>
                    {titles.map((title) => (
                        <th
                            scope="col"
                            class="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right "
                        >
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white ">
                {data?.map((item, index) => {
                    const tr = (
                        <tr key={index}>
                            {titles.map((key) => (
                                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                    {item[toSnakeCase(key)]}
                                </td>
                            ))}
                        </tr>
                    );
                    if (item.link)
                        return (
                            <Link to={item.link} className="contents">
                                {tr}
                            </Link>
                        );
                    return tr;
                })}
            </tbody>
        </table>
    );
}
