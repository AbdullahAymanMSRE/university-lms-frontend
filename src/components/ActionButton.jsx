import { cn } from "../lib/utils";

export default function ActionButton({ children, onClick, className }) {
  return (
    <button
      class={cn(
        "text-white px-4 py-2 rounded transition-all duration-200 hover:scale-110 focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
