import AssignmentToDo from "../../components/AssignmentToDo";
import { useOutletContext } from "react-router-dom";
import { useGetAssignmentsQuery } from "../../api/studentApiSlice";
import { format } from "date-fns";

export default function Assignments() {
    const { modal, setModal } = useOutletContext();
    const { data: assignments } = useGetAssignmentsQuery();

    return (
        <section className="flex min-h-screen w-full flex-col gap-10">
            {assignments?.map((assignment) => (
                <AssignmentToDo
                    courseName={assignment.course_title}
                    name={assignment.name}
                    dueTime={`${format(new Date(assignment.due_date), "MM/dd")} 11:59 PM`}
                    modal={modal}
                    setModal={setModal}
                />
            ))}
        </section>
    );
}
