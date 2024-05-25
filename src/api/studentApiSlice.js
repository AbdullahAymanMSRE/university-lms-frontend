import { apiSlice } from './apiSlice';

const baseUrl = 'student'

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentCourses: builder.query({
      query: () => baseUrl + '/courses',
    }),

    getAssignments: builder.query({
      query: () => baseUrl + '/assignments',
    }),
  })
})

export const { useGetStudentCoursesQuery } = studentApiSlice