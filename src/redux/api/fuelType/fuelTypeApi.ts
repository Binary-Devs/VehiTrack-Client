import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const FUEL_TYPE_URL = '/fuel-type';

export const fuelTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createFuelType: build.mutation({
      query: (data) => ({
        url: `${FUEL_TYPE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.fuelType],
    }),

    // get all
    getAllFuelType: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FUEL_TYPE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          fuelTypes: response,
          meta,
        };
      },
      providesTags: [tagTypes.fuelType],
    }),

    // get single
    getSingleFuelType: build.query({
      query: (id: string) => ({
        url: `${FUEL_TYPE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.fuelType],
    }),

    // update
    updateFuelType: build.mutation({
      query: (data) => ({
        url: `${FUEL_TYPE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.fuelType],
    }),
  }),
});

export const {
  useCreateFuelTypeMutation,
  useGetAllFuelTypeQuery,
  useGetSingleFuelTypeQuery,
  useUpdateFuelTypeMutation,
} = fuelTypeApi;
