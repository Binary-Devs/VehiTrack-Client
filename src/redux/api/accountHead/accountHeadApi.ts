import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const ACCOUNT_HEAD_URL = '/account-head';

export const accountHeadApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createAccountHead: build.mutation({
      query: (data) => ({
        url: `${ACCOUNT_HEAD_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.accountHead],
    }),

    // get all
    getAllAccountHead: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${ACCOUNT_HEAD_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          accountHeads: response,
          meta,
        };
      },
      providesTags: [tagTypes.accountHead],
    }),

    // get single
    getSingleAccountHead: build.query({
      query: (id: string) => ({
        url: `${ACCOUNT_HEAD_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.accountHead],
    }),

    // update
    updateAccountHead: build.mutation({
      query: (data) => ({
        url: `${ACCOUNT_HEAD_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.accountHead],
    }),
  }),
});

export const {
  useCreateAccountHeadMutation,
  useGetAllAccountHeadQuery,
  useGetSingleAccountHeadQuery,
  useUpdateAccountHeadMutation,
} = accountHeadApi;
