import { apiSlice } from './apiSlice';

const baseUrl = 'student'

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentCourses: builder.query({
      query: () => baseUrl + '/courses',
    }),

    getAssignments: builder.query({
      query: () => baseUrl + '/allAssignments',
      transformResponse: (responseData) =>
        responseData.data,
    }),

    getAnnouncements: builder.query({
      query: () => baseUrl + '/announcements',
      transformResponse: (responseData) =>
        responseData.data,
    }),
    
  })
})

export const { useGetStudentCoursesQuery, useGetAssignmentsQuery, useGetAnnouncementsQuery } = studentApiSlice