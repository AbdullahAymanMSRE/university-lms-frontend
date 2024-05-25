import { apiSlice } from './apiSlice';

const baseUrl = 'instructor'

export const instructorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInstructorCourses: builder.query({
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
        url: baseUrl + '/courses/assign_student',
        method: 'POST',
        body: { student_id, course_id },
      }),
      invalidatesTags: ['courses']
    }),
  })
})

export const { useGetInstructorCoursesQuery, useGetStudentsQuery, useAssignStudentToCourseMutation } = instructorApiSlice