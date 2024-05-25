import { apiSlice } from './apiSlice';

const baseUrl = 'student'

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => baseUrl + '/courses',
    }),

    getAssignments: builder.query({
      query: () => baseUrl + '/assignments',
    }),
  })
})

export const { useGetCoursesQuery } = studentApiSlice