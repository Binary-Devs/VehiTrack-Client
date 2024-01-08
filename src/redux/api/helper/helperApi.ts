import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const HELPER_URL = '/helper';

export const helperApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // get all
    getAllHelper: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${HELPER_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          helpers: response,
          meta,
        };
      },
      providesTags: [tagTypes.helper, tagTypes.user],
    }),

    // get single
    getSingleHelper: build.query({
      query: (id: string) => ({
        url: `${HELPER_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.helper, tagTypes.user],
    }),

    // update
    updateHelper: build.mutation({
      query: (data: any) => ({
        url: `${HELPER_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.helper, tagTypes.user],
    }),

    // inactive
    inactiveHelper: build.mutation({
      query: (id: string) => ({
        url: `${HELPER_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.helper, tagTypes.user],
    }),
  }),
});

export const {
  useGetAllHelperQuery,
  useGetSingleHelperQuery,
  useUpdateHelperMutation,
  useInactiveHelperMutation,
} = helperApi;
