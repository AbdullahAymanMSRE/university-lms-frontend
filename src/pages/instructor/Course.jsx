import {
    useGetInstructorCoursesQuery,
    useCourseQuery,
} from "../../api/instructorApiSlice";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Course() {
    const { id } = useParams();
    const { data: _data } = useCourseQuery(id);

    const { data, isSuccess } = useGetInstructorCoursesQuery();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        if (isSuccess) {
            setCourse(data.find((c) => c.id === +id));
        }
    }, [isSuccess]);

    useEffect(() => {
        if (_data) {
            console.log(_data);
        }
    }, [_data]);

    return (
        <div className="my-10 flex flex-col items-center">
            {!course ? (
                <LoadingSpinner className="fill-secondary" />
            ) : (
                <div>
                    <h2 className="text-5xl font-bold capitalize text-secondary">
                        {course.title} Course
                    </h2>
                    <span className="text-2xl font-semibold text-neutral-950">
                        {course.credit_hours} Credit Hours
                    </span>
                </div>
            )}
        </div>
    );
}
