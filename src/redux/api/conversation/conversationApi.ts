// import { IMeta } from "@/types";
import { tagTypes } from "@/redux/teg-types";
import { baseApi } from "../baseApi";

const CONVERSATION_URL = "/conversations";

export const conversationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createConversation: builder.mutation({
      query: (data) => ({
        url: `${CONVERSATION_URL}/create-conversation`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.conversations, tagTypes.messages],
    }),

    // get all
    getAllConversation: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `${CONVERSATION_URL}`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.conversations],
    }),

    // get single
    getSingleConversation: builder.query({
      query: (id: string) => ({
        url: `${CONVERSATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.conversation],
    }),

    // update
    updateConversation: builder.mutation({
      query: (data) => ({
        url: `${CONVERSATION_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.conversations],
    }),
  }),
});

export const {
  useCreateConversationMutation,
  useGetAllConversationQuery,
  useGetSingleConversationQuery,
  useUpdateConversationMutation,
} = conversationApi;
