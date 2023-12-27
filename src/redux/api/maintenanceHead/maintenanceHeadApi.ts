import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const MAINTENANCE_HEAD_URL = '/maintenance-head';

export const maintenanceHeadApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createMaintenanceHead: build.mutation({
      query: (data) => ({
        url: `${MAINTENANCE_HEAD_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.maintenanceHead],
    }),

    // get all
    getAllMaintenanceHead: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${MAINTENANCE_HEAD_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          maintenanceHeads: response,
          meta,
        };
      },
      providesTags: [tagTypes.maintenanceHead],
    }),

    // get single
    getSingleMaintenanceHead: build.query({
      query: (id: string) => ({
        url: `${MAINTENANCE_HEAD_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.maintenanceHead],
    }),

    // update
    updateMaintenanceHead: build.mutation({
      query: (data) => ({
        url: `${MAINTENANCE_HEAD_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.maintenanceHead],
    }),
  }),
});

export const {
  useCreateMaintenanceHeadMutation,
  useGetAllMaintenanceHeadQuery,
  useGetSingleMaintenanceHeadQuery,
  useUpdateMaintenanceHeadMutation,
} = maintenanceHeadApi;
