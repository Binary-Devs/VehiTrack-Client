// import { IMeta } from "@/types";
import { tagTypes } from "@/redux/teg-types";
import { baseApi } from "../baseApi";

const MESSAGE_URL = "/messages";

export const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create
    createMessage: builder.mutation({
      query: (data) => ({
        url: `${MESSAGE_URL}/create-message`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.messages],
    }),

    // get all
    getAllMessage: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `${MESSAGE_URL}`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.messages],
    }),

    // get single
    getSingleMessage: builder.query({
      query: (id: string) => ({
        url: `${MESSAGE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.message],
    }),

    // update
    updateMessage: builder.mutation({
      query: (data) => ({
        url: `${MESSAGE_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.messages],
    }),
  }),
});

export const {
  useCreateMessageMutation,
  useGetAllMessageQuery,
  useGetSingleMessageQuery,
  useUpdateMessageMutation,
} = messageApi;
