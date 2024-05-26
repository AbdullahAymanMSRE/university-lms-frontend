import WhiteBox from "../../components/WhiteBox";
import * as icons from "../../svgs/box_icons";
import Link from "../../components/Link";
import Task from "../../components/Task";
import CoursesShortList from "../../components/CoursesShortList";
import { useGetStudentCoursesQuery } from "../../api/studentApiSlice";

export default function Dashboard() {
    const tasks = 21;

    const { data: courses } = useGetStudentCoursesQuery();
    console.log(courses);

    return (
        <section className="flex h-screen flex-col gap-6 rounded-3xl max-md:items-center">
            <WhiteBox
                icon={icons.BoxIconsSvg()}
                header="My Activities"
                text={`${tasks} Tasks`}
                showGraph
            />
            <div className="flex w-full flex-wrap gap-7 max-md:justify-center">
                <CoursesShortList courses={courses} />
                <div className="relative h-80 max-w-lg flex-1 rounded-3xl bg-white px-7 py-5 text-xl max-lg:basis-full">
                    <h2 className="mb-7 text-3xl font-bold">Upcoming Task</h2>
                    <div className="flex flex-col gap-5">
                        <Task
                            taskName={"History Assignment"}
                            beforeColor={"primary"}
                            deadLine={"10:00 AM"}
                        />
                        <Task
                            taskName={"History Assignment"}
                            beforeColor={"primary"}
                            deadLine={"10:00 AM"}
                        />
                        <Task
                            taskName={"History Assignment"}
                            beforeColor={"primary"}
                            deadLine={"10:00 AM"}
                        />
                    </div>
                    <Link text="View all tasks" color="primary" />
                </div>
            </div>
        </section>
    );
}
