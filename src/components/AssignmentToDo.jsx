export default function AssignmentToDo({
    courseName,
    name,
    dueTime,
    modal,
    setModal,
}) {
    return (
        <section className="">
            <div className="flex max-sm:flex-col">
                <div className="flex w-44 flex-col items-center justify-center rounded-s-md bg-primary p-4 max-sm:w-full max-sm:rounded-none max-sm:rounded-t-md">
                    <p className="text-md text-wrap text-center font-semibold uppercase text-white">
                        {courseName}
                    </p>
                </div>
                <div className="relative flex basis-full items-center overflow-hidden rounded-e-md bg-white p-4 max-sm:rounded-none max-sm:rounded-b-md">
                    <span className="absolute left-0 top-0 h-1 w-full bg-primary"></span>
                    <div className="flex w-full gap-10">
                        <div className="flex flex-col justify-center">
                            <h5 className="text-base">{name}</h5>
                            <p className="text-sm text-text">DUE: {dueTime}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setModal(!modal)}
                        className={`h-fit rounded-lg bg-primary px-4 py-2 text-white`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
