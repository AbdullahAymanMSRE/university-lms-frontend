export default function Task({
  taskName,
  beforeColor,
  deadLine,
  assignmentPage,
}) {
  return (
    <div className="flex gap-3">
      <span className={`bg-${beforeColor} h-10 w-1 rounded-2xl`}></span>
      <div className="flex flex-col">
        <h5 className="text-base">{taskName}</h5>
        <p className="text-text text-xs">
          DUE: {deadLine}
        </p>
      </div>
    </div>
  );
}
