import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const ACCOUNT_TYPE_URL = '/account-type';

export const accountTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createAccountType: build.mutation({
      query: (data) => ({
        url: `${ACCOUNT_TYPE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.accountType],
    }),

    // get all
    getAllAccountType: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${ACCOUNT_TYPE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          accountTypes: response,
          meta,
        };
      },
      providesTags: [tagTypes.accountType],
    }),

    // get single
    getSingleAccountType: build.query({
      query: (id: string) => ({
        url: `${ACCOUNT_TYPE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.accountType],
    }),

    // update
    updateAccountType: build.mutation({
      query: (data) => ({
        url: `${ACCOUNT_TYPE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.accountType],
    }),
  }),
});

export const {
  useCreateAccountTypeMutation,
  useGetAllAccountTypeQuery,
  useGetSingleAccountTypeQuery,
  useUpdateAccountTypeMutation,
} = accountTypeApi;
