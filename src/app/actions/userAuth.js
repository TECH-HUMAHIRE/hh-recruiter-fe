import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userAuth = createApi({
    reducerPath: 'userAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL_API,
        prepareHeaders(headers) {
            headers.set('Access-Control-Allow-Origin', '*');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            })
        }),
        getHumaHireJob: builder.query({
            query: (refferal_code) => ({
                url: `/job/public/${refferal_code}`,
                method: 'GET'
            })
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserLoginMutation, useGetHumaHireJobQuery } = userAuth;
