import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const downloadCv = createApi({
    reducerPath: 'downloadCv',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL_API,
        prepareHeaders(headers) {
            headers.set('Access-Control-Allow-Origin', '*');
            // headers.set('Content-Type', 'application/pdf');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        downloadCv: builder.query({
            query: (params) => {
                return {
                    url: `/download`,
                    method: 'GET',
                    params
                };
            }
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDownloadCvQuery } = downloadCv;
