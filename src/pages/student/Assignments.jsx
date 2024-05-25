import AssignmentToDo from "../../components/AssignmentToDo";
import { useOutletContext } from "react-router-dom";

export default function Assignments() {

  const { modal, setModal } = useOutletContext();
  return (
    <section className="min-h-screen flex flex-col gap-10 w-full">
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