import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const SUPER_ADMIN_URL = '/super-admin';

export const superAdminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllSuperAdmin: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${SUPER_ADMIN_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          superAdmins: response,
          meta,
        };
      },
      providesTags: [tagTypes.super_admin, tagTypes.user],
    }),

    // get single
    getSingleSuperAdmin: build.query({
      query: (id: string) => ({
        url: `${SUPER_ADMIN_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.super_admin, tagTypes.user],
    }),

    // update
    updateSuperAdmin: build.mutation({
      query: (data) => ({
        url: `${SUPER_ADMIN_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.super_admin, tagTypes.user],
    }),

    // inactive
    inactiveSuperAdmin: build.mutation({
      query: (id: string) => ({
        url: `${SUPER_ADMIN_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.super_admin, tagTypes.user],
    }),
  }),
});

export const {
  useGetAllSuperAdminQuery,
  useGetSingleSuperAdminQuery,
  useUpdateSuperAdminMutation,
  useInactiveSuperAdminMutation,
} = superAdminApi;
