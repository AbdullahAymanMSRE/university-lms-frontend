import { CourseIconSvg } from "../svgs/box_icons";

export default function Coursebar({course, author}) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <CourseIconSvg />
        <div>
          <h2 className="text-base font-bold">{course}</h2>
          <p className="text-xs text-text font-medium">{`By ${author}`}</p>
        </div>
      </div>
      <button className="text-primary text-xs flex justify-center items-center border-primary border border-solid rounded-[70px] w-28 h-9">
        View Course
      </button>
    </div>
  );
}
