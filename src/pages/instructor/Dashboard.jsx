import CoursesShortList from "../../components/CoursesShortList";
import WhiteBox from "../../components/WhiteBox";
import { StudentsBoxSvg, StudentsPathSvg } from "../../svgs/box_icons";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-5">
        <div className="w-64 rounded-2xl bg-white px-6 py-5 gap-5 max-w-lg max-md:w-full">
          <p className="text-text text-base font-light">Live Courses</p>
          <p className="text-darkenedBlue2 text-2xl font-bold">13</p>
        </div>
        <div className="flex gap-4 items-center rounded-2xl bg-white px-5 py-5 max-w-lg max-md:w-full">
          <StudentsBoxSvg />
          <div>
            <p className="text-text text-base font">Students</p>
            <p className="text-darkenedBlue2 text-lg font-bold">203</p>
          </div>
          <StudentsPathSvg />
        </div>
      </div>
      <CoursesShortList />
    </div>
  );
}
