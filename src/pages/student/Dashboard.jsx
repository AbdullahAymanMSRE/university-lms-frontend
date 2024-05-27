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
import LoadingSpinner from "../../components/LoadingSpinner";
import UpcomingTasks from "../../components/UpcomingTasks";

export default function Dashboard() {
    const { data: courses, isLoading: isCoursesLoading } =
        useGetStudentCoursesQuery();
    const { data: assignments, isLoading: isAssignmentsLoading } =
        useGetAssignmentsQuery();

    return (
        <section className="flex h-full flex-col gap-6 rounded-3xl max-md:items-center">
            <WhiteBox
                icon={icons.BoxIconsSvg()}
                header="My Activities"
                text={`${assignments?.length ?? 0} Task${assignments?.length !== 1 ? "s" : ""}`}
                showGraph
            />
            <div className="flex w-full flex-wrap gap-7 max-md:justify-center">
                <CoursesShortList
                    courses={courses}
                    isLoading={isCoursesLoading}
                />
                <UpcomingTasks
                    assignments={assignments}
                    isAssignmentsLoading={isAssignmentsLoading}
                />
            </div>
        </section>
    );
}
