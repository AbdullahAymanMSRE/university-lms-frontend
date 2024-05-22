import WhiteBox from "../../components/WhiteBox";
import * as icons from "../../svgs/box_icons";
import Link from "../../components/Link";
import Task from "../../components/Task";
import CoursesShortList from "../../components/CoursesShortList";

export default function Dashboard() {
  const tasks = 21;
  return (
    <section className="h-screen flex flex-col gap-6 rounded-3xl max-md:items-center">
      <WhiteBox
        icon={icons.BoxIconsSvg()}
        header="My Activities"
        text={`${tasks} Tasks`}
        showGraph
      />
      <div className="flex flex-wrap w-full gap-7 max-md:justify-center">
        <CoursesShortList />
        <div className="max-w-lg flex-1 h-80 bg-white rounded-3xl px-7 py-5 text-xl relative max-lg:basis-full">
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
