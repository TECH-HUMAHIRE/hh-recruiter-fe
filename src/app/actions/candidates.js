import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const candidates = createApi({
    reducerPath: 'candidates',
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
    tagTypes: [
        'candidates',
        'saveCandidate',
        'unlockCandidate',
        'get_my_company'
    ],
    endpoints: (builder) => ({
        getCandidatesList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['saveCandidate', 'unlockCandidate']
        }),
        getCandidatesAssignedList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate/assigned`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['candidates']
        }),
        getCandidatesSavedList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate/saved`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['saveCandidate']
        }),
        getCandidatesUnlockList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate/unlocked`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['unlockCandidate']
        }),
        saveCandidate: builder.mutation({
            query: (body) => {
                return {
                    url: `/user/candidate/save`,
                    body,
                    method: 'POST'
                };
            },
            invalidatesTags: ['saveCandidate']
        }),
        unlockCandidate: builder.mutation({
            query: (body) => {
                return {
                    url: `/user/candidate/unlock`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: [
                'unlockCandidate',
                'saveCandidate',
                'get_my_company'
            ]
        }),
        getCountCandidates: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate/count`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: ['saveCandidate', 'unlockCandidate']
        }),
        updateStatusJobCandidates: builder.mutation({
            query: ({ code, ...body }) => {
                return {
                    url: `/job/invitation/${code}/status`,
                    method: 'PUT',
                    body
                };
            },
            invalidatesTags: ['saveCandidate', 'unlockCandidate', 'candidates']
        }),
        getProfile: builder.query({
            query: (params) => {
                return {
                    url: `/user/my`,
                    method: 'GET',
                    params
                };
            },
            providesTags: ['get_my_company']
        }),
        referCandidate: builder.mutation({
            query: (body) => {
                return {
                    url: `/job/invitation/refer/bulk`,
                    body,
                    method: 'POST'
                };
            },
            invalidatesTags: ['saveCandidate', 'candidates']
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCandidatesListQuery,
    useGetCandidatesAssignedListQuery,
    useGetCandidatesSavedListQuery,
    useGetCandidatesUnlockListQuery,
    useSaveCandidateMutation,
    useUnlockCandidateMutation,
    useUpdateStatusJobCandidatesMutation,
    useGetCountCandidatesQuery,
    useReferCandidateMutation
} = candidates;
