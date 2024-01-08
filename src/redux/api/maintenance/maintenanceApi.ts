import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const MAINTENANCE_URL = '/maintenance';

export const maintenanceApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createMaintenance: build.mutation({
      query: (data: any) => ({
        url: `${MAINTENANCE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.maintenance],
    }),

    // get all
    getAllMaintenance: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${MAINTENANCE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          maintenances: response,
          meta,
        };
      },
      providesTags: [tagTypes.maintenance],
    }),

    // get single
    getSingleMaintenance: build.query({
      query: (id: string) => ({
        url: `${MAINTENANCE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.maintenance],
    }),

    // update
    updateMaintenance: build.mutation({
      query: (data: any) => ({
        url: `${MAINTENANCE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.maintenance],
    }),

    // delete
    deleteMaintenance: build.mutation({
      query: (id: string) => ({
        url: `${MAINTENANCE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.maintenance],
    }),
  }),
});

export const {
  useCreateMaintenanceMutation,
  useGetAllMaintenanceQuery,
  useGetSingleMaintenanceQuery,
  useUpdateMaintenanceMutation,
  useDeleteMaintenanceMutation,
} = maintenanceApi;
