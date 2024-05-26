import useUserStore from "../store/userStore";
import { TOKEN_STORAGE } from "../lib/constants";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { cn } from "../lib/utils";

export default function LogoutButton() {
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem(TOKEN_STORAGE);
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="mt-auto flex h-11 items-center gap-3 rounded-md pl-3 text-text transition hover:bg-red-500 hover:text-white"
        >
            <LogOut className="w-6" />
            <span>Logout</span>
        </button>
    );
}
