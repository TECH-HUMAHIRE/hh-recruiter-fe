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
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getCandidatesList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: [{ type: 'candidates', id: 1 }]
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
            providesTags: [{ type: 'candidates', id: 2 }]
        }),
        getCandidatesUnlockList: builder.query({
            query: (params) => {
                return {
                    url: `/user/candidate/unlocked`,
                    params,
                    method: 'GET'
                };
            },
            providesTags: [{ type: 'candidates', id: 3 }]
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCandidatesListQuery,
    useGetCandidatesAssignedListQuery,
    useGetCandidatesSavedListQuery,
    useGetCandidatesUnlockListQuery
} = candidates;
