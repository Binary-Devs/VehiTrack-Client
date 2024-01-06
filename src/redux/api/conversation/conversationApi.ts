// import { IMeta } from "@/types";
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
        const socket = io(`${process.env.NEXT_PUBLIC_API_SOCKET_URL}`, {
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
      // providesTags: [tagTypes.conversations],
    }),

    // get single
    getSingleConversation: builder.query({
      query: (id: string) => ({
        url: `${CONVERSATION_URL}/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.conversation],
    }),

    // create
    createConversation: builder.mutation({
      query: (data) => ({
        url: `${CONVERSATION_URL}/create-conversation`,
        method: "POST",
        data: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult = dispatch(
          baseApi.util.updateQueryData(
            //@ts-ignore
            "getAllConversation",
            arg.senderId,
            (draft) => {
              console.log(JSON.stringify(draft));
              // const draftConversation = draft.data.find((c) => c.id == arg.id);
              // draftConversation.message = arg.data.message;
              // draftConversation.timestamp = arg.data.timestamp;
            }
          )
        );
        // optimistic cache update end
        try {
          const conversation = await queryFulfilled;
          console.log(conversation);
        } catch (error) {
          patchResult.undo();
        }
      },
      // invalidatesTags: [tagTypes.conversations, tagTypes.messages],
    }),

    // update
    updateConversation: builder.mutation({
      query: (data) => ({
        url: `${CONVERSATION_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        console.log(arg);
        // optimistic cache update start
        const patchResult = dispatch(
          baseApi.util.updateQueryData(
            //@ts-ignore
            "getAllConversation",
            arg.data.senderId,
            (draft) => {
              console.log("clicked");
              console.log("clicked",JSON.stringify(draft));
              // const draftConversation = draft.data.find((c) => c.id == arg.id);
              // draftConversation.message = arg.data.message;
              // draftConversation.timestamp = arg.data.timestamp;
            }
          )
        );
        // optimistic cache update end
        try {
          const conversation = await queryFulfilled;
          console.log(conversation);
        } catch (error) {
          patchResult.undo();
        }
      },
      // invalidatesTags: [tagTypes.conversations],
    }),
  }),
});

export const {
  useCreateConversationMutation,
  useGetAllConversationQuery,
  useGetSingleConversationQuery,
  useUpdateConversationMutation,
} = conversationApi;
