import { useOutletContext } from "react-router-dom";
import { useGetAssignmentsQuery } from "../../api/studentApiSlice";
import StudentAssignments from "../../components/StudentAssignments";

export default function Assignments() {
    const { modal, setModal } = useOutletContext();
    const { data: assignments, isLoading } = useGetAssignmentsQuery();

    return (
        <StudentAssignments assignments={assignments} isLoading={isLoading} />
    );
}
