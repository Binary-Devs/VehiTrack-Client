import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const FUEL_URL = '/fuel';

export const fuelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createFuel: build.mutation({
      query: (data) => ({
        url: `${FUEL_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.fuel],
    }),

    // get all
    getAllFuel: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FUEL_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          fuels: response,
          meta,
        };
      },
      providesTags: [tagTypes.fuel],
    }),

    // get single
    getSingleFuel: build.query({
      query: (id: string) => ({
        url: `${FUEL_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.fuel],
    }),

    // update
    updateFuel: build.mutation({
      query: (data) => ({
        url: `${FUEL_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.fuel],
    }),

    // delete
    deleteFuel: build.mutation({
      query: (id: string) => ({
        url: `${FUEL_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.fuel],
    }),
  }),
});

export const {
  useCreateFuelMutation,
  useGetAllFuelQuery,
  useGetSingleFuelQuery,
  useUpdateFuelMutation,
  useDeleteFuelMutation,
} = fuelApi;
