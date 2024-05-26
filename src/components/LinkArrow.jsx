import { Arrow } from "../svgs/box_icons";
export default function LinkArrow({ text, color }) {
    return (
        <button
            className={`text-${color} group absolute bottom-5 right-7 flex items-center gap-2 text-base`}
        >
            <p className="font-medium leading-none">{text}</p>
            <Arrow color={color} />
        </button>
    );
}
