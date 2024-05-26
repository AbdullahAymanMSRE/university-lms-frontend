import { apiSlice } from "./apiSlice";

const baseUrl = "instructor";

export const instructorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getInstructorCourses: builder.query({
            query: () => baseUrl + "/courses",
            providesTags: ["courses"],
        }),

        getAssignments: builder.query({
            query: () => baseUrl + "/assignments",
        }),
        getStudents: builder.query({
            query: () => baseUrl + "/allstudents",
            providesTags: ['students']
        }),

        assignStudentToCourse: builder.mutation({
            query: ({student_id, course_id}) => ({
                url: baseUrl + "/courses/assign_student",
                method: "POST",
                body: { student_id, course_id },
            }),
            invalidatesTags: ["courses", 'students'],
        }),

        createCourse: builder.mutation({
            query: (data) => ({
                url: "instructor/courses",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["courses"],
        }),
        course: builder.query({
            query: (id) => `instructor/courses/${id}`,
        }),

        // createAssignment: builder.mutation({
        //     query: (data) => ({
        //         url: "instructor/assignments",
        //         method: "POST",
        //         body: data,
        //     }),
        // }),
        // createAnnouncement: builder.mutation({
        //     query: (data) => ({
        //         url: "instructor/announcements",
        //         method: "POST",
        //         body: data,
        //     }),
        // }),
    }),
});

export const {
    useGetInstructorCoursesQuery,
    useGetStudentsQuery,
    useAssignStudentToCourseMutation,
    useCreateCourseMutation,
    useCourseQuery,
} = instructorApiSlice;
