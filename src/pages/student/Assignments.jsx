import AssignmentToDo from "../../components/AssignmentToDo";
import { useOutletContext } from "react-router-dom";
import { useGetAssignmentsQuery } from "../../api/studentApiSlice";
import { format } from "date-fns";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Assignments() {
    const { modal, setModal } = useOutletContext();
    const { data: assignments, isLoading } = useGetAssignmentsQuery();

    return (
        <section className="flex size-full flex-col gap-10">
            {isLoading ? (
                <LoadingSpinner />
            ) : assignments?.length === 0 ? (
                <div className="flex-1 py-16 text-center text-xl font-medium text-gray-500">
                    No assignments to do
                </div>
            ) : (
                assignments?.map((assignment) => (
                    <AssignmentToDo
                        courseName={assignment.course_title}
                        name={assignment.name}
                        dueTime={`${format(new Date(assignment.due_date), "MM/dd")} 11:59 PM`}
                        modal={modal}
                        setModal={setModal}
                    />
                ))
            )}
        </section>
    );
}
