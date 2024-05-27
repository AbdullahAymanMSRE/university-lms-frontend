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

const TABS = [
    {
        tab: "students",
        title: "Students",
    },
    {
        tab: "assignments",
        title: "Assignments",
    },
    {
        tab: "create-assignment",
        title: "Create Assignment",
    },
    {
        tab: "announcements",
        title: "Announcements",
    },
    {
        tab: "create-announcement",
        title: "Create Announcement",
    },
    {
        tab: "weeks",
        title: "Weeks",
    },
    {
        tab: "create-week",
        title: "Create Week",
    },
];
export default function Course() {
    const { id } = useParams();
    const { data, isLoading } = useCourseQuery(id);
    const [tab, setTab] = useState("students");
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");
    const [
        createAssignment,
        {
            isLoading: isCreating,
            isSuccess: isAssignmentCreated,
            isError: isAssignmentError,
            error: assignmentError,
        },
    ] = useCreateAssignmentMutation();
    const [
        createAnnouncement,
        {
            isLoading: isCreatingAnnouncement,
            isSuccess: isAnnouncementCreated,
            isError: isAnnouncementError,
            error: announcementError,
        },
    ] = useCreateAnnouncementMutation();
    const [assignmentDueDate, setAssignmentDueDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
    );
    const [announcementTitle, setAnnouncementTitle] = useState("");
    const [announcementContent, setAnnouncementContent] = useState("");
    const [weekName, setWeekName] = useState("");

    const [
        createWeek,
        {
            isLoading: isCreatingWeek,
            isSuccess: isWeekCreated,
            isError: isWeekError,
            error: weekError,
        },
    ] = useCreateWeekMutation();

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        createAssignment({
            id,
            data: {
                name: assignmentName,
                description: assignmentDescription,
                due_date: assignmentDueDate,
            },
        });
    };

    const handleCreateAnnouncement = (e) => {
        e.preventDefault();
        createAnnouncement({
            id,
            data: {
                title: announcementTitle,
                content: announcementContent,
            },
        });
    };

    const handleCreateWeek = (e) => {
        e.preventDefault();
        createWeek({
            id,
            data: {
                name: weekName,
            },
        });
    };

    useEffect(() => {
        if (isAssignmentCreated) {
            setAssignmentName("");
            setAssignmentDescription("");
            setAssignmentDueDate(format(new Date(), "yyyy-MM-dd"));
            setTab("assignments");
            toast.success("Assignment created successfully");
        }
    }, [isAssignmentCreated]);

    useEffect(() => {
        if (isAnnouncementCreated) {
            setAnnouncementTitle("");
            setAnnouncementContent("");
            setTab("announcements");
            toast.success("Announcement created successfully");
        }
    }, [isAnnouncementCreated]);

    useEffect(() => {
        if (isWeekCreated) {
            setWeekName("");
            setTab("weeks");
            toast.success("Week created successfully");
        }
    }, [isWeekCreated]);

    useEffect(() => {
        if (isAssignmentError) {
            toast.error(assignmentError.data.error);
        }
    }, [isAssignmentError]);

    useEffect(() => {
        if (isAnnouncementError) {
            toast.error(announcementError.data.error);
        }
    }, [isAnnouncementError]);

    useEffect(() => {
        if (isWeekError) {
            toast.error(weekError.data.error);
        }
    }, [isWeekError]);

    const [modalOpen, setModalOpen] = useState(false);
    const [weekId, setWeekId] = useState(null);

    return (
        <div className="my-10 flex flex-col">
            {isLoading ? (
                <div className="flex items-center justify-center p-10">
                    <LoadingSpinner className="fill-secondary" />
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div>
                        <h2 className="text-5xl font-bold capitalize text-secondary">
                            {data.course_data.title} Course
                        </h2>
                        <span className="text-2xl font-semibold text-neutral-950">
                            {data.course_data.credit_hours} Credit Hours
                        </span>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        {TABS.map((t) => (
                            <button
                                onClick={() => setTab(t.tab)}
                                className={cn(
                                    "rounded-lg border border-secondary px-10 py-2 text-secondary",
                                    {
                                        "bg-secondary  text-white":
                                            tab === t.tab,
                                    },
                                )}
                            >
                                {t.title}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 w-full">
                        {tab === "students" && (
                            <CustomTable
                                titles={["Id", "Name", "Email", "Faculty"]}
                                data={data.course_data.students?.map((s) => {
                                    return {
                                        ...s,
                                    };
                                })}
                            />
                        )}

                        {tab === "assignments" && (
                            <CustomTable
                                titles={[
                                    "Id",
                                    "Name",
                                    "Description",
                                    "Due Date",
                                ]}
                                data={data.course_data.assignments?.map((a) => {
                                    return {
                                        ...a,
                                        due_date: format(
                                            new Date(a.due_date),
                                            "dd MMM yyyy",
                                        ),
                                    };
                                })}
                            />
                        )}

                        {tab === "create-assignment" && (
                            <form
                                onSubmit={handleCreateAssignment}
                                className="mx-auto flex w-full max-w-2xl flex-col gap-6"
                            >
                                <div>
                                    <label
                                        htmlFor="assignment-name"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Course Name
                                    </label>
                                    <input
                                        required
                                        id="assignment-name"
                                        type="text"
                                        value={assignmentName}
                                        onChange={(e) =>
                                            setAssignmentName(e.target.value)
                                        }
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="assignment-description"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Description
                                    </label>
                                    <input
                                        required
                                        id="assignment-description"
                                        type="text"
                                        value={assignmentDescription}
                                        onChange={(e) =>
                                            setAssignmentDescription(
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="assignment-due-date"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Due Date
                                    </label>
                                    <input
                                        required
                                        id="assignment-due-date"
                                        type="date"
                                        value={assignmentDueDate}
                                        onChange={(e) => {
                                            setAssignmentDueDate(
                                                e.target.value,
                                            );
                                        }}
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full max-w-xs items-center justify-center self-center rounded bg-secondary px-5 py-3 text-xl text-white shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                                >
                                    {isCreating ? (
                                        <LoadingSpinner className="fill-white text-white" />
                                    ) : (
                                        "Create Assignment"
                                    )}
                                </button>
                            </form>
                        )}

                        {tab === "announcements" && (
                            <CustomTable
                                titles={["Id", "Title", "Content", "Date"]}
                                data={data.course_data.announcements?.map(
                                    (a) => {
                                        return {
                                            id: a.id,
                                            title: a.title,
                                            content: a.content,
                                            date: format(
                                                new Date(a.announcement_date),
                                                "dd MMM yyyy",
                                            ),
                                        };
                                    },
                                )}
                            />
                        )}
                        {tab === "create-announcement" && (
                            <form
                                onSubmit={handleCreateAnnouncement}
                                className="mx-auto flex w-full max-w-2xl flex-col gap-6"
                            >
                                <div>
                                    <label
                                        htmlFor="announcement-title"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Title
                                    </label>
                                    <input
                                        required
                                        id="announcement-title"
                                        type="text"
                                        value={announcementTitle}
                                        onChange={(e) =>
                                            setAnnouncementTitle(e.target.value)
                                        }
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="announcement-content"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Content
                                    </label>
                                    <input
                                        required
                                        id="announcement-content"
                                        type="text"
                                        value={announcementContent}
                                        onChange={(e) =>
                                            setAnnouncementContent(
                                                e.target.value,
                                            )
                                        }
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full max-w-xs items-center justify-center self-center rounded bg-secondary px-5 py-3 text-xl text-white shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                                >
                                    {isCreatingAnnouncement ? (
                                        <LoadingSpinner className="fill-white text-white" />
                                    ) : (
                                        "Create Announcement"
                                    )}
                                </button>
                            </form>
                        )}

                        {tab === "weeks" && (
                            <CustomTable
                                titles={["Id", "Name", "Actions"]}
                                data={data.course_data.weeks?.map((w) => {
                                    return {
                                        ...w,
                                        actions: (
                                            <button
                                                onClick={() => {
                                                    setModalOpen(true);
                                                    setWeekId(w.id);
                                                }}
                                                className="rounded bg-secondary px-5 py-3 text-white shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                                            >
                                                <CloudUpload />
                                            </button>
                                        ),
                                    };
                                })}
                            />
                        )}

                        {tab === "create-week" && (
                            <form
                                onSubmit={handleCreateWeek}
                                className="mx-auto flex w-full max-w-2xl flex-col gap-6"
                            >
                                <div>
                                    <label
                                        htmlFor="week-name"
                                        className="mb-1 block font-bold text-secondary"
                                    >
                                        Week Name
                                    </label>
                                    <input
                                        required
                                        id="week-name"
                                        type="text"
                                        value={weekName}
                                        onChange={(e) =>
                                            setWeekName(e.target.value)
                                        }
                                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full max-w-xs items-center justify-center self-center rounded bg-secondary px-5 py-3 text-xl text-white shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                                >
                                    {isCreatingWeek ? (
                                        <LoadingSpinner className="fill-white text-white" />
                                    ) : (
                                        "Create Week"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
            <Submission
                modal={modalOpen}
                setModal={setModalOpen}
                courseId={id}
                weekId={weekId}
            />
        </div>
    );
}
