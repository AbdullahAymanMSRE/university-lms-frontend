import { format } from "date-fns";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import LinkArrow from "./LinkArrow";
import Task from "./Task";

export default function UpcomingTasks({ assignments, isAssignmentsLoading }) {
    return (
        <div className="relative h-80 max-w-lg flex-1 rounded-3xl bg-white px-7 py-5 text-xl shadow-sm max-lg:basis-full">
            <h2 className="mb-7 font-bold">Upcoming Tasks</h2>
            {isAssignmentsLoading ? (
                <div className="flex items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {assignments?.length === 0 ? (
                        <div className="text-center text-xl font-medium text-gray-500">
                            No tasks
                        </div>
                    ) : (
                        assignments
                            ?.slice(0, 3)
                            .map((assignment) => (
                                <Task
                                    taskName={assignment.name}
                                    beforeColor="primary"
                                    deadLine={`${format(new Date(assignment.due_date), "MM/dd")} 11:59 PM`}
                                />
                            ))
                    )}
                    <Link to="/student/assignments">
                        <LinkArrow text="view all tasks" />
                    </Link>
                </div>
            )}
        </div>
    );
}
