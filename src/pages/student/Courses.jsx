import CourseCard from '../../components/CourseCard';
export default function Courses() {
  return (
    <div className="flex gap-7 flex-wrap items-start min-h-screen max-md:p-4 max-sm:w-full max-sm:justify-center">
      <CourseCard name="History" instructor="30SS" />
      <CourseCard name="History" instructor="30SS" />
      <CourseCard name="History" instructor="30SS" />
    </div>
  );
}
