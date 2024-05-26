import { cn } from "../lib/utils";

export default function ActionButton({ children, onClick, className }) {
    return (
        <button
            class={cn(
                "scale-100 rounded px-4 py-2 text-white transition-[scale] duration-200 hover:scale-110 focus:outline-none",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
