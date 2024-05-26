import { Arrow } from "../svgs/box_icons";
export default function LinkArrow({ text, color }) {
    return (
        <button
            className={`text-${color} absolute bottom-5 right-7 flex items-center gap-2 text-base
hover:translate-x-1 hover:scale-110
            `}
        >
            <p>{text}</p>
            <Arrow color={color} />
        </button>
    );
}
