import { TOKEN_STORAGE, UserTypes } from "../lib/constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/apiSlice";
import useUserStore from "../store/userStore";
import { useState } from "react";

export default function AuthHeader() {
    const [login, { data, isSuccess, isError }] = useLoginMutation();
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useUserStore((state) => state);
    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        console.log(email);
        if (!email || !password) {
            navigate("/login");
            return;
        } else {
            login({
                email: email,
                password: password,
            });
        }
    }, []);

    useEffect(() => {
        if (data) {
            setUser(data);
            setLoading(false);
            console.log(location.pathname);
            if (
                location.pathname.includes(UserTypes.STUDENT) &&
                data.role !== UserTypes.STUDENT
            ) {
                navigate("/instructor");
            } else if (
                location.pathname.includes(UserTypes.INSTRUCTOR) &&
                data.role !== UserTypes.INSTRUCTOR
            ) {
                navigate("/student");
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
            setLoading(false);
        }
    }, [isError]);

    return null;
}
