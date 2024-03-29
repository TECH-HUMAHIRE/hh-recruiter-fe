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
    tagTypes: ['Post', 'counTask', 'notification'],
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
        getTaskInvitation: builder.query({
            query: (params) => {
                return {
                    url: `/job/job_invitation`,
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
                { type: 'Post', id: 2 },
                { type: 'counTask', id: 1 }
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
                { type: 'Post', id: 2 },
                { type: 'counTask', id: 1 }
            ]
        }),
        getCompanyName: builder.query({
            query: (params) => {
                return {
                    url: `/company`,
                    method: 'GET',
                    params
                };
            }
        }),

        updateStatusJobCandidates: builder.mutation({
            query: ({ code, ...body }) => {
                return {
                    url: `/job/invitation/${code}/status`,
                    method: 'PUT',
                    body
                };
            },
            invalidatesTags: [{ type: 'Post', id: 2 }]
        }),
        sendReferEmail: builder.mutation({
            query: (body) => {
                return {
                    url: `/task/send-referral`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['refer_email']
        }),
        saveFcmToken: builder.mutation({
            query: (body) => {
                return {
                    url: `/notification/store`,
                    method: 'POST',
                    body
                };
            }
        }),
        sendNotification: builder.mutation({
            query: (body) => {
                return {
                    url: `/notification/send`,
                    method: 'POST',
                    body
                };
            }
        }),
        getNotification: builder.query({
            query: (params) => {
                return {
                    url: `/notification`,
                    method: 'GET',
                    params
                };
            },
            providesTags: ['notification']
        }),
        updateNotification: builder.mutation({
            query: (id) => {
                return {
                    url: `/notification/${id}`,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['notification']
        }),
        deleteNotification: builder.mutation({
            query: (id) => {
                return {
                    url: `/notification/${id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['notification']
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetJobsListQuery,
    useAddTaskMutation,
    useGetTaskInvitationQuery,
    useGetTaskIdQuery,
    useGetTaskListQuery,
    useDeleteTaskMutation,
    useGetCompanyNameQuery,
    useUpdateStatusJobCandidatesMutation,
    useSendReferEmailMutation,
    useSaveFcmTokenMutation,
    useSendNotificationMutation,
    useGetNotificationQuery,
    useUpdateNotificationMutation,
    useDeleteNotificationMutation
} = jobApi;
