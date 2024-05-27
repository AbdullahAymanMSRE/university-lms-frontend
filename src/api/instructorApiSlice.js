import { apiSlice } from "./apiSlice";

const baseUrl = "instructor";

export const instructorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getInstructorCourses: builder.query({
            query: () => baseUrl + "/courses",
            providesTags: ["courses"],
        }),

        getStudents: builder.query({
            query: () => baseUrl + "/allstudents",
            providesTags: ["students"],
        }),

        assignStudentToCourse: builder.mutation({
            query: ({ student_id, course_id }) => ({
                url: baseUrl + "/courses/assign_student",
                method: "POST",
                body: { student_id, course_id },
            }),
            invalidatesTags: ["courses", "students"],
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
            query: (id) => `instructor/getCourseDetails/${id}`,
            providesTags: (result, error, id) => [{ type: "courses", id }],
        }),

        createAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: "instructor/createAssignment/" + id,
                method: "POST",
                body: data,
            }),
            invalidatesTags: (result, error, id) => [{ type: "courses", id }],
        }),

        createAnnouncement: builder.mutation({
            query: ({ id, data }) => ({
                url: "instructor/announcements/" + id,
                method: "POST",
                body: data,
            }),
            invalidatesTags: (result, error, id) => [{ type: "courses", id }],
        }),

        createWeek: builder.mutation({
            query: ({ id, data }) => ({
                url: "instructor/createNewWeek/" + id,
                method: "POST",
                body: data,
            }),
            invalidatesTags: (result, error, id) => [{ type: "courses", id }],
        }),

        uploadFile: builder.mutation({
            query: ({ courseId, weekId, data }) => ({
                url: "instructor/uploadWeekFile/" + courseId + "/" + weekId,
                method: "POST",
                body: data,
                formData: true,
            }),
            invalidatesTags: (result, error, courseId, weekId) => [
                { type: "courses", courseId },
            ],
        }),
    }),
});

export const {
    useGetInstructorCoursesQuery,
    useGetStudentsQuery,
    useAssignStudentToCourseMutation,
    useCreateCourseMutation,
    useCourseQuery,
    useCreateAssignmentMutation,
    useCreateAnnouncementMutation,
    useCreateWeekMutation,
    useUploadFileMutation,
} = instructorApiSlice;
