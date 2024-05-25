import { apiSlice } from './apiSlice';

const baseUrl = 'instructor'

export const instructorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => baseUrl + '/courses',
      providesTags: ['courses']
    }),

    getAssignments: builder.query({
      query: () => baseUrl + '/assignments',
    }),
    getStudents: builder.query({
      query: () => baseUrl + '/allstudents',
    }),

    assignStudentToCourse: builder.mutation({
      query: (student_id, course_id) => ({
        url: baseUrl + '/assign_student',
        method: 'POST',
        body: { student_id, course_id },
      }),
      invalidatesTags: ['courses']
    }),
  })
})

export const { useGetCoursesQuery, useGetStudentsQuery, useAssignStudentToCourseMutation } = instructorApiSlice