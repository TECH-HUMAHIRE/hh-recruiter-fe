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
    tagTypes: ['candidates', 'saveCandidate', 'unlockCandidate'],
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
            providesTags: [{ type: 'candidates', id: 2 }]
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
                    url: `/job/invitation/${body.jobseeker_id}/unlock`,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['unlockCandidate']
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
    useGetCountCandidatesQuery
} = candidates;
