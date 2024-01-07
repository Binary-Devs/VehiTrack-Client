// import { IMeta } from "@/types";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { tagTypes } from "@/redux/teg-types";
import io from "socket.io-client";
import { baseApi } from "../baseApi";

const CONVERSATION_URL = "/conversations";

export const conversationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all
    getAllConversation: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `${CONVERSATION_URL}`,
        method: "GET",
        params: arg,
      }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create socket
        const socket = io("http://localhost:5000", {
          reconnectionDelay: 1000,
          reconnection: true,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });
        try {
          await cacheDataLoaded;
          socket.on("conversation", (data) => {
            console.log(data);
          });
        } catch (error) {
          await cacheEntryRemoved;
          socket.close();
        }
      },
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

    // create
    createConversation: builder.mutation({
      query: (data) => ({
        url: `${CONVERSATION_URL}/create-conversation`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.conversations, tagTypes.messages],
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
