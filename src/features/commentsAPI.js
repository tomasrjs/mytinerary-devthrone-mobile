import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from "../../api";
import { useSelector } from 'react-redux';
export const commentsAPI = createApi({
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiurl}`
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getComments: builder.mutation({
            query: (id) => ({
                url: `/comments?itinerary=${id}`,
                method: 'GET',
            }),
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${() => {
                        let token = useSelector((state) => state.logged.token)
                        return token
                    }
                        }`
                }
            }),
        }),
        editComment: builder.mutation({
            query: (body) => ({
                url: `/comments/${body.id}`,
                method: 'PATCH',
                body: body,
                headers: {
                    Authorization: `Bearer ${() => {
                        let token = useSelector((state) => state.logged.token)
                        return token
                    }
                        }`
                }
            }),
        }),
        createComment: builder.mutation({
            query: (body) => ({
                url: '/comments',
                method: 'POST',
                body: body,
                headers: {
                    Authorization: `Bearer ${() => {
                        let token = useSelector((state) => state.logged.token)
                        return token
                    }
                        }`
                }
            }),
            invalidatesTags: ['Post'],
        }),
    })
})
export default commentsAPI
export const { useGetCommentsMutation, useCreateCommentMutation, useDeleteCommentMutation, useEditCommentMutation } = commentsAPI