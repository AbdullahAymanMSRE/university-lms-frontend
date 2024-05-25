// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HOST, TOKEN_STORAGE } from "../lib/constants";

export const apiSlice = createApi({
    tagTypes: [],

    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: `${HOST}/api`,
        prepareHeaders: (headers) => {
            headers.set(
                "Authorization",
                `Bearer ${localStorage.getItem(TOKEN_STORAGE)}`,
            );
        },
    }),

    // The "endpoints" represent operations and requests for this server
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "signup",
                method: "POST",
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = apiSlice;
