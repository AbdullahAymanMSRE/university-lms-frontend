import { Arrow } from "../svgs/box_icons";
export default function Link({ text, color }) {
  return (
    <button
      className={`text-${color} flex gap-2 items-center text-base absolute bottom-5 right-7`}
    >
      <p>{text}</p>
      <Arrow color={color} />
    </button>
  );
}
