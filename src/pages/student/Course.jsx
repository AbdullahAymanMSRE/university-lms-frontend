import Accordion from "../../components/Accordion";
import {
    useCourseQuery,
    useCreateWeekMutation,
} from "../../api/instructorApiSlice";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import CustomTable from "../../components/CustomTable";
import { useState } from "react";
import { cn } from "../../lib/utils";
import {
    useCreateAssignmentMutation,
    useCreateAnnouncementMutation,
} from "../../api/instructorApiSlice";
import { format } from "date-fns";
import { useEffect } from "react";
import { CloudUpload } from "lucide-react";
import { toast } from "react-toastify";
import Submission from "../../components/Submission";
import { useGetCourseQuery } from "../../api/studentApiSlice";
import StudentAssignments from "../../components/StudentAssignments";
import StudentAnnouncements from "../../components/StudentAnnouncements";

const TABS = [
    {
        tab: "assignments",
        title: "Assignments",
    },
    {
        tab: "announcements",
        title: "Announcements",
    },
    {
        tab: "weeks",
        title: "Weeks",
    },
    ,
];

export default function Course() {
    const { id } = useParams();
    const { data: course, isLoading } = useGetCourseQuery(id);
    const [tab, setTab] = useState("weeks");
    console.log(course);

    return (
        <div>
            <div className="my-10 flex flex-col">
                {isLoading ? (
                    <div className="flex items-center justify-center p-10">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div>
                            <h2 className="text-5xl font-bold capitalize text-primary">
                                {course.title} Course
                            </h2>
                            <span className="text-2xl font-semibold text-neutral-950">
                                {course.credit_hours} Credit Hours
                            </span>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center gap-5">
                            {TABS.map((t) => (
                                <button
                                    onClick={() => setTab(t.tab)}
                                    className={cn(
                                        "rounded-lg border border-primary px-10 py-2 text-primary",
                                        {
                                            "bg-primary  text-white":
                                                tab === t.tab,
                                        },
                                    )}
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 w-full">
                            {tab === "assignments" && (
                                <StudentAssignments
                                    assignments={course.assignments}
                                    isLoading={isLoading}
                                />
                            )}

                            {tab === "announcements" && (
                                <StudentAnnouncements
                                    announcements={course.announcements}
                                    isLoading={isLoading}
                                />
                            )}

                            {tab === "weeks" &&
                                course?.weeks?.map((week) => (
                                    <Accordion
                                        week={week.name}
                                        key={week.id}
                                        items={week.weekFiles}
                                    />
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
