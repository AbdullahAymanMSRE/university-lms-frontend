import { useLoginMutation } from "../api/apiSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { TOKEN_STORAGE } from "../lib/constants";

export default function Login() {
    const [login, { data, isLoading, isError, error }] = useLoginMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        login({
            email: email,
            password: password,
        });
    };

    useEffect(() => {
        if (data) {
            setUser(data);
            toast.success("User logged in successfully");
            localStorage.setItem(TOKEN_STORAGE, data.token);
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
                        Login
                    </div>
                    <form
                        onSubmit={handleLogin}
                        className="mt-10 flex flex-col gap-7"
                    >
                        <input
                            required
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter your email"
                            className="block w-full rounded-lg border-none bg-gray-100 px-4 py-3 shadow focus:outline-none"
                        />
                        <input
                            required
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Enter your password"
                            className="block w-full rounded-lg border-none bg-gray-100 px-4 py-3 shadow focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="hover:-translate-x flex w-full transform items-center justify-center rounded-xl bg-primary py-3 text-white shadow-xl transition duration-500 ease-in-out  hover:scale-105 hover:shadow-inner focus:outline-none"
                        >
                            {isLoading ? (
                                <LoadingSpinner className="fill-primary text-white" />
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                    <div className="my-3 text-center font-medium">OR</div>
                    <Link
                        to="/signup"
                        className="block transform rounded-xl border border-primary py-3 text-center text-primary shadow-xl transition duration-500 ease-in-out hover:scale-105 hover:bg-primary  hover:text-white hover:shadow-inner focus:outline-none"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
