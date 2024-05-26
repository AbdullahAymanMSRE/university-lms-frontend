import WhiteBox from "../../components/WhiteBox";
import * as icons from "../../svgs/box_icons";
import LinkArrow from "../../components/LinkArrow";
import Task from "../../components/Task";
import CoursesShortList from "../../components/CoursesShortList";
import {
    useGetAssignmentsQuery,
    useGetStudentCoursesQuery,
} from "../../api/studentApiSlice";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Dashboard() {
    const { data: courses } = useGetStudentCoursesQuery();
    const { data: assignments } = useGetAssignmentsQuery();

    return (
        <section className="flex h-full flex-col gap-6 rounded-3xl max-md:items-center">
            <WhiteBox
                icon={icons.BoxIconsSvg()}
                header="My Activities"
                text={`${assignments?.length ?? 0} Task${assignments?.length !== 1 ? "s" : ""}`}
                showGraph
            />
            <div className="flex w-full flex-wrap gap-7 max-md:justify-center">
                <CoursesShortList courses={courses} />
                <div className="relative h-80 max-w-lg flex-1 rounded-3xl bg-white px-7 py-5 text-xl max-lg:basis-full">
                    <h2 className="mb-7 text-3xl font-bold">Upcoming Task</h2>
                    <div className="flex flex-col gap-5">
                        {assignments?.slice(0, 3).map((assignment) => (
                            <Task
                                taskName={assignment.name}
                                beforeColor="primary"
                                deadLine={`${format(new Date(assignment.due_date), "MM/dd")} 11:59 PM`}
                            />
                        ))}
                    </div>
                    <Link
                        to="/student/assignments"
                        className="hover:translate-x-1 hover:scale-110"
                    >
                        <LinkArrow text="View all tasks" color="primary" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
