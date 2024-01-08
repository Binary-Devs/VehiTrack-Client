import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const VEHICLE_URL = '/vehicle';

export const vehicleApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createVehicle: build.mutation({
      query: (data: any) => ({
        url: `${VEHICLE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),

    // get all
    getAllVehicle: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${VEHICLE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          vehicles: response,
          meta,
        };
      },
      providesTags: [tagTypes.vehicle],
    }),

    // get single
    getSingleVehicle: build.query({
      query: (id: string) => ({
        url: `${VEHICLE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.vehicle],
    }),

    // update
    updateVehicle: build.mutation({
      query: (data: any) => ({
        url: `${VEHICLE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),

    // inactive
    inactiveVehicle: build.mutation({
      query: (id: string) => ({
        url: `${VEHICLE_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.vehicle],
    }),
  }),
});

export const {
  useCreateVehicleMutation,
  useGetAllVehicleQuery,
  useGetSingleVehicleQuery,
  useUpdateVehicleMutation,
  useInactiveVehicleMutation,
} = vehicleApi;
