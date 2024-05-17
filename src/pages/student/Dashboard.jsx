import Coursebar from "../../components/Coursebar";
import WhiteBox from "../../components/Whitebox";
import * as icons from "../../svgs/box_icons";
import Link from "../../components/Link";
import Task from "../../components/Task";

export default function Dashboard() {
  const tasks = 21;
  return (
    <section className="h-screen flex flex-col gap-6 rounded-3xl">
      <WhiteBox
        icon={icons.BoxIconsSvg()}
        header="My Activities"
        text={`${tasks} Tasks`}
        showGraph
      />
      <div className="flex gap-7">
        <div className="w-[510px] h-80 bg-white rounded-3xl px-7 py-5 text-xl gap-5 relative">
          <h2 className="font-bold mb-5">My Courses</h2>
          <div className="flex flex-col gap-5">
            <Coursebar course="History" author="30SS" />
            <Coursebar course="Math" author="Amarico" />
            <Coursebar course="Science" author="Abood" />
            <Link text="View all" color="primary" />
          </div>
        </div>
        <div className="w-[510px] h-80 bg-white rounded-3xl px-7 py-5 text-xl relative">
          <h2 className="font-bold text-3xl mb-7">Upcoming Task</h2>
          <div className="flex flex-col gap-5">
            <Task
              taskName={"History Assignment"}
              beforeColor={"primary"}
              startTime={"10:00 AM"}
              endTime={"11:00 AM"}
            />
            <Task
              taskName={"History Assignment"}
              beforeColor={"primary"}
              startTime={"10:00 AM"}
              endTime={"11:00 AM"}
            />
            <Task
              taskName={"History Assignment"}
              beforeColor={"primary"}
              startTime={"10:00 AM"}
              endTime={"11:00 AM"}
            />
          </div>
          <Link text="View all tasks" color="primary" />
        </div>
      </div>
    </section>
  );
}
