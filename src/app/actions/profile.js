import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const profileAuth = createApi({
    reducerPath: 'profileAuth',
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
    tagTypes: ['get_my_company'],
    endpoints: (builder) => ({
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
        updateProfile: builder.mutation({
            query: (body) => ({
                url: '/user',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['get_my_company']
        }),
        changePassword: builder.mutation({
            query: (body) => {
                return {
                    url: `/user/change-password`,
                    method: 'PUT',
                    body
                };
            }
        }),
        sendOTPEmail: builder.mutation({
            query: ({ uid, ...body }) => ({
                url: `/user/${uid}/verified_email`,
                method: 'PUT',
                body
            })
        }),
        resendOTPEmail: builder.mutation({
            query: () => ({
                url: `/auth/resend_email_verification`,
                method: 'PUT'
            })
        }),
        getEducationCandidate: builder.query({
            query: (id) => {
                return {
                    url: `/education/${id}`,
                    method: 'GET'
                };
            }
        }),
        uploadeImage: builder.mutation({
            query: (body) => ({
                url: '/upload/image',
                method: 'POST',
                body
            })
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProfileQuery,
    useUpdateProfileMutation,
    useChangePasswordMutation,
    useSendOTPEmailMutation,
    useResendOTPEmailMutation,
    useGetEducationCandidateQuery,
    useUploadeImageMutation
} = profileAuth;
