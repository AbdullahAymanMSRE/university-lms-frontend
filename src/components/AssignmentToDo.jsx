// import { useState } from "react";

export default function AssignmentToDo({ courseName, number, dueTime }) {
//   const [toggle, setToggle] = useState(false);
  return (
    <section className="">
      <div className="flex max-sm:flex-col">
        <div className="flex flex-col w-44 items-center justify-center bg-primary rounded-s-md p-4 max-sm:w-full max-sm:rounded-none max-sm:rounded-t-md">
          <p className="text-md text-white text-wrap text-center uppercase font-semibold">
            {courseName}
          </p>
        </div>
        <div className="relative flex basis-full items-center bg-white rounded-e-md p-4 overflow-hidden max-sm:rounded-none max-sm:rounded-b-md">
          <span className="absolute top-0 left-0 bg-primary h-1 w-full"></span>
          <div className="flex gap-10 w-full">
            <div className="flex flex-col justify-center">
              <h5 className="text-base">Assignment {number}</h5>
              <p className="text-text text-sm">DUE: {dueTime}</p>
            </div>
          </div>
          <button
            //   onClick={() => setToggle(!toggle)}
            className={`h-fit bg-primary text-white rounded-lg px-4 py-2`}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
