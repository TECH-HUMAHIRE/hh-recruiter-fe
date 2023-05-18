import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const walletApi = createApi({
    reducerPath: 'walletApi',
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
    tagTypes: ['huma_point'],
    endpoints: (builder) => ({
        humaPoint: builder.query({
            query: (params) => {
                return {
                    url: `/transaction/wallet`,
                    method: 'GET',
                    params
                };
            },
            providesTags: ['huma_point']
        }),
        getCreditHistory: builder.query({
            query: (params) => {
                return {
                    url: `/wallet/credit`,
                    method: 'GET',
                    params
                };
            },
            providesTags: ['credit_history']
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useHumaPointQuery, useGetCreditHistoryQuery } = walletApi;
