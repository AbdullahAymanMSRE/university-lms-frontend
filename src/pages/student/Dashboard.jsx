import Coursebar from "../../components/Coursebar";
import WhiteBox from "../../components/Whitebox";
import * as icons from "../../svgs/box_icons";


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
      <div className="flex flex-col w-[510px] h-80 bg-white rounded-3xl px-7 py-5 text-xl gap-5">
        <h2 className="font-bold">My Courses</h2>
        <Coursebar course={"History"} author={"30SS"} />
        <Coursebar course={"Math"} author={"Amarico"} />
        <Coursebar course={"Science"} author={"Abood"} />
      </div>
    </section>
  );
}
