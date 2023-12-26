import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const ADMIN_URL = '/admin';

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllAdmin: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${ADMIN_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin, tagTypes.user],
    }),

    // get single
    getSingleAdmin: build.query({
      query: (id: string) => ({
        url: `${ADMIN_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.admin, tagTypes.user],
    }),

    // update
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),

    // inactive
    inactiveAdmin: build.mutation({
      query: (id: string) => ({
        url: `${ADMIN_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  useGetAllAdminQuery,
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
  useInactiveAdminMutation,
} = adminApi;
