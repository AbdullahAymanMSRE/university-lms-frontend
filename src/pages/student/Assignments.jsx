import AssignmentToDo from "../../components/AssignmentToDo";
// import { useState } from "react";
// import Submission from "./Submission";

export default function Assignments() {
    //   const [toggle, setToggle] = useState(false);
  return (
    <section className="min-h-screen flex flex-col gap-10 w-full">
      <AssignmentToDo
        courseName="Database Systems"
        number={1}
        dueTime="10:00 AM"
      />
      <AssignmentToDo
        courseName="Data Structures"
        number={1}
        dueTime="10:00 AM"
      />
      <AssignmentToDo courseName="Algorithms" number={1} dueTime="10:00 AM" />
      <AssignmentToDo
        courseName="Software Engineering"
        number={1}
        dueTime="10:00 AM"
      />
      {/* <Submission toggle/> */}
    </section>
  );
}