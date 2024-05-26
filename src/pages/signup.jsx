import { useSignupMutation } from "../api/apiSlice";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useUserStore from "../store/userStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TOKEN_STORAGE } from "../lib/constants";

export default function Signup() {
    const [signup, { data, isLoading, isError, error }] = useSignupMutation();
    const [role, setRole] = useState("student");
    const [faculty, setFaculty] = useState("engineering");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        signup({
            role: role,
            name: name,
            email: email,
            faculty: faculty,
            password: password,
        });
    };

    useEffect(() => {
        if (data) {
            setUser(data);
            toast.success("User created successfully");
            localStorage.setItem(TOKEN_STORAGE, data.token);
            localStorage.setItem("user", JSON.stringify(data));
            if (data.role === "student") {
                navigate("/student");
            } else {
                navigate("/instructor");
            }
        }
    }, [data]);

    useEffect(() => {
        if (isError) {
            toast.error(error.data.error);
        }
    }, [isError]);

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
            <div className="relative w-full sm:max-w-md">
                <div className="card absolute h-full w-full -rotate-6 transform rounded-3xl bg-secondary shadow-lg"></div>
                <div className="card absolute h-full w-full rotate-6 transform rounded-3xl bg-primary shadow-lg"></div>
                <div className="relative w-full rounded-3xl bg-gray-100 px-6 py-4 shadow-md">
                    <div className="mt-3 block text-center text-2xl font-semibold text-gray-700">
                        Signup
                    </div>
                    <form
                        onSubmit={handleSignup}
                        className="mt-10 flex flex-col gap-6"
                    >
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="block w-full rounded-lg border-none bg-gray-100 px-4 py-3 shadow focus:outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="block w-full rounded-lg border-none bg-gray-100 px-4 py-3 shadow focus:outline-none"
                        />

                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="block w-full rounded-lg border-none bg-gray-100 px-4 py-3 shadow focus:outline-none"
                        />

                        <div className="grid gap-8 sm:grid-cols-2">
                            <button
                                type="button"
                                className={cn(
                                    "rounded-lg border p-2 text-center text-primary shadow transition hover:border-primary",
                                    {
                                        "border-primary text-primary":
                                            role === "student",
                                    },
                                )}
                                onClick={() => setRole("student")}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "rounded-lg border p-2 text-center text-primary shadow transition hover:border-primary",
                                    {
                                        "border-primary text-primary":
                                            role === "instructor",
                                    },
                                )}
                                onClick={() => setRole("instructor")}
                            >
                                Instructor
                            </button>
                        </div>
                        <div className="grid gap-2">
                            <button
                                type="button"
                                className={cn(
                                    "rounded-lg border p-2 text-center text-primary shadow transition hover:border-primary",
                                    {
                                        "border-primary text-primary":
                                            faculty === "engineering",
                                    },
                                )}
                                onClick={(e) => setFaculty("engineering")}
                            >
                                Engineering
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "rounded-lg border p-2 text-center text-primary shadow transition hover:border-primary",
                                    {
                                        "border-primary text-primary":
                                            faculty === "computer-science",
                                    },
                                )}
                                onClick={() => setFaculty("computer-science")}
                            >
                                Computer Science
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="hover:-translate-x flex w-full transform items-center justify-center rounded-xl bg-primary py-3 text-white shadow-xl transition duration-500 ease-in-out  hover:scale-105 hover:shadow-inner focus:outline-none"
                            >
                                {isLoading ? (
                                    <LoadingSpinner className="fill-primary text-white" />
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="my-3 text-center font-medium">OR</div>
                    <Link
                        to="/login"
                        className="block transform rounded-lg border border-primary py-3 text-center text-primary shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:bg-primary  hover:text-white hover:shadow-inner focus:outline-none"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
