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
    tagTypes: ['get_my_company', 'getBankList'],
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
        getExperienceCandidate: builder.query({
            query: (id) => {
                return {
                    url: `/experience/${id}`,
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
        }),
        postBank: builder.mutation({
            query: (body) => ({
                url: '/bank_account',
                method: 'POST',
                body
            }),
            invalidatesTags: ['getBankList']
        }),
        getBankList: builder.query({
            query: (params) => ({
                url: '/bank_account',
                method: 'GET',
                params
            }),
            providesTags: ['getBankList']
        }),
        getBankListName: builder.query({
            query: (params) => ({
                url: '/bank',
                method: 'GET',
                params
            })
        }),
        getCertificate: builder.query({
            query: (id) => ({
                url: `/certificate/${id}`,
                method: 'GET'
                // params
            })
        }),
        updatePhotoProfile: builder.mutation({
            query: (body) => ({
                url: '/user/change_photo_profile',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['get_my_company']
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
    useGetExperienceCandidateQuery,
    useUploadeImageMutation,
    usePostBankMutation,
    useGetBankListQuery,
    useGetBankListNameQuery,
    useGetCertificateQuery,
    useUpdatePhotoProfileMutation
} = profileAuth;
