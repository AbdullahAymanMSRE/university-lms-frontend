import AssignmentToDo from "../../components/AssignmentToDo";
import { useOutletContext } from "react-router-dom";
import { useGetAssignmentsQuery } from "../../api/studentApiSlice";

export default function Assignments() {
    const { modal, setModal } = useOutletContext();
    const { data: assignments } = useGetAssignmentsQuery();

    return (
        <section className="flex min-h-screen w-full flex-col gap-10">
            <AssignmentToDo
                courseName="Database Systems"
                number={1}
                dueTime="10:00 AM"
                modal={modal}
                setModal={setModal}
            />
            <AssignmentToDo
                courseName="Data Structures"
                number={1}
                dueTime="10:00 AM"
                modal={modal}
                setModal={setModal}
            />
            <AssignmentToDo
                courseName="Algorithms"
                number={1}
                dueTime="10:00 AM"
                modal={modal}
                setModal={setModal}
            />
            <AssignmentToDo
                courseName="Software Engineering"
                number={1}
                dueTime="10:00 AM"
                modal={modal}
                setModal={setModal}
            />
        </section>
    );
}
