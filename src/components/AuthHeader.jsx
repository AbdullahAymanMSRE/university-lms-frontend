import { UserTypes } from "../lib/constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

export default function AuthHeader() {
    const setUser = useUserStore((state) => state.setUser);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const _user = JSON.parse(localStorage.getItem("user"));
        if (!_user) {
            navigate("/login");
            return;
        } else {
            setUser(_user);
            if (
                location.pathname.includes(UserTypes.STUDENT) &&
                _user.role !== UserTypes.STUDENT
            ) {
                navigate("/instructor");
            } else if (
                location.pathname.includes(UserTypes.INSTRUCTOR) &&
                _user.role !== UserTypes.INSTRUCTOR
            ) {
                navigate("/student");
            }
        }
    }, []);

    return null;
}
