import LinkArrow from "./LinkArrow";
import { Link } from "react-router-dom";

export default function CourseCard({ name, instructor, id }) {
    return (
        <Link
            to={`/student/courses/${id}`}
            className="group relative flex size-64 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:translate-x-1 hover:shadow-blue-300 max-md:duration-700 max-sm:w-full"
        >
            <span className="absolute right-0 top-0 z-50 h-full w-6 -translate-y-7 translate-x-12 bg-white opacity-10 transition-all group-hover:animate-shine max-md:group-hover:animate-[shine_0.7s_ease-in-out]"></span>
            <div className="relative h-3/4 w-full bg-primary"></div>
            <div className="p-3 pt-0">
                <div className="">
                    <h2 className="mb-2 text-base font-bold max-md:text-xl">
                        {name}
                    </h2>
                    <p className="mb-2 text-xs font-medium text-text max-md:text-base">{`By ${instructor}`}</p>
                </div>
                <LinkArrow text="" />
            </div>
        </Link>
    );
}
