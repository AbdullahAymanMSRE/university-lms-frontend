import useUserStore from "../store/userStore";
import { Arrow } from "../svgs/box_icons";

export default function LinkArrow({ text }) {
    const role = useUserStore((state) => state.user?.role);
    const color = role === "student" ? "primary" : "secondary";

    return (
        <button
            className={`text-${color} group absolute bottom-5 right-7 flex items-center gap-2 text-base`}
        >
            <p className="font-medium leading-none">{text}</p>
            <Arrow color={color} />
        </button>
    );
}
