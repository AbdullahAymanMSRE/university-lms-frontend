import Link from "./Link";
export default function CourseCard({ name, instructor, time }) {
  return (
    <div className="cursor-pointer group relative flex flex-col size-64 gap-4 max-sm:w-full rounded-xl bg-white overflow-hidden shadow-lg transition-all duration-500 hover:translate-x-1 hover:-translate-y-1 hover:shadow-blue-300 max-md:duration-700">
      <span className="absolute z-50 right-0 top-0 h-full w-6 translate-x-12 transition-all -translate-y-7 bg-white opacity-10 group-hover:animate-shine max-md:group-hover:animate-[shine_0.7s_ease-in-out]"></span>
      <div className="bg-primary h-3/4 w-full relative"></div>
      <div className="p-3 pt-0">
        <div className="">
          <h2 className="text-base font-bold mb-2 max-md:text-xl">{name}</h2>
          <p className="text-xs text-text font-medium mb-2 max-md:text-base">{`By ${instructor}`}</p>
        </div>
        <Link text="" color="customBlue" />
      </div>
    </div>
  );
}
