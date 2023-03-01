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
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getJobsList: builder.query({
            query: (params) => {
                return {
                    url: `/job/all`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: [{ type: 'Post', id: 1 }]
        }),
        getTaskList: builder.query({
            query: (params) => {
                return {
                    url: `/task`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: [{ type: 'Post', id: 2 }]
        }),
        getTaskId: builder.query({
            query: (id) => {
                return {
                    url: `/task/${id}`,
                    method: 'GET'
                };
            },
            providesTags: [{ type: 'TaskId', id: 1 }]
        }),
        addTask: builder.mutation({
            query: (body) => {
                return {
                    url: `/task`,
                    body,
                    method: 'POST'
                };
            },
            invalidatesTags: [
                { type: 'Post', id: 1 },
                { type: 'Post', id: 2 }
            ]
        }),
        deleteTask: builder.mutation({
            query: (id) => {
                return {
                    url: `/task/${id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: [
                { type: 'Post', id: 1 },
                { type: 'Post', id: 2 }
            ]
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetJobsListQuery,
    useAddTaskMutation,
    useGetTaskIdQuery,
    useGetTaskListQuery,
    useDeleteTaskMutation
} = jobApi;
