import { useState, useEffect } from "react";
import { useCreateCourseMutation } from "../../api/instructorApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
    const [courseName, setCourseName] = useState("");
    const [creditsHours, setCreditsHours] = useState("");
    const [createCourse, { isLoading, isSuccess }] = useCreateCourseMutation();
    const navigate = useNavigate();

    const handleCreateCourse = async (e) => {
        e.preventDefault();
        createCourse({
            title: courseName,
            credit_hours: creditsHours,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Course created successfully");
            navigate("/instructor/courses");
        }
    }, [isSuccess]);

    return (
        <div className="my-10 flex flex-col items-center">
            <h2 className="mb-10 text-5xl font-bold text-secondary">
                Create Course
            </h2>
            <form
                onSubmit={handleCreateCourse}
                className="mx-auto flex w-full max-w-2xl flex-col gap-6"
            >
                <div>
                    <label
                        htmlFor="course-name"
                        className="mb-1 block font-bold text-secondary"
                    >
                        Course Name
                    </label>
                    <input
                        required
                        id="course-name"
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="course-name"
                        className="mb-1 block font-bold text-secondary"
                    >
                        Credits Hours
                    </label>
                    <input
                        required
                        id="course-name"
                        type="number"
                        value={creditsHours}
                        onChange={(e) => setCreditsHours(e.target.value)}
                        className="w-full rounded px-5 py-3 text-xl text-neutral-950 shadow [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                </div>

                <button
                    type="submit"
                    className="flex w-full max-w-xs items-center justify-center self-center rounded bg-secondary px-5 py-3 text-xl text-white shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                    {isLoading ? (
                        <LoadingSpinner className="fill-white text-white" />
                    ) : (
                        "Create Course"
                    )}
                </button>
            </form>
        </div>
    );
}
