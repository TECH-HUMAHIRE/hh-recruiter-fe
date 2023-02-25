import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL_API,
        prepareHeaders(headers) {
            headers.set(
                'Authorization',
                `Bearer ${window.localStorage.getItem('token')}`
            );

            return headers;
        }
    }),
    tagTypes: ['callback_task'],
    endpoints: (builder) => ({
        getJobsList: builder.query({
            query: (params) => {
                return {
                    url: `/job/all`,
                    params,
                    method: 'GET'
                };
            }
        }),
        addTask: builder.mutation({
            query: (body) => {
                return {
                    url: `/task`,
                    body,
                    method: 'POST'
                };
            },
            invalidatesTags: ['callback_task']
        }),
        getTaskList: builder.query({
            query: (params) => {
                return {
                    url: `/task`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['callback_task']
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobsListQuery, useAddTaskMutation, useGetTaskListQuery } =
    jobApi;
